import EventBus from "./EventBus";
import { getTemplateFromString } from "../utils/getTemplateFromString";

type TProps = Record<string, any>;

export default class Block {
  private _element: HTMLElement;
  private _meta: {
    tagName: string;
    props: TProps;
  };
  private eventBus: () => EventBus;
  public props: TProps;

  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  constructor(tagName: string, props: TProps) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props,
    };

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  get element() {
    return this._element;
  }

  init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  setProps = (nextProps: TProps) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  getContent() {
    return this.element;
  }

  show() {
    this.getContent().style.display = "block";
  }

  hide() {
    this.getContent().style.display = "none";
  }

  protected componentDidMount(oldProps?: TProps) {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected componentDidUpdate(oldProps: TProps, newProps: TProps) {
    return oldProps !== newProps;
  }

  protected render(): void | string {}

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  private _componentDidMount() {
    this.componentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidUpdate(oldProps: TProps, newProps: TProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  private _render() {
    const blockHTML = this.render();
    this._removeEvents();
    if (blockHTML) {
      const template = getTemplateFromString(blockHTML);
      if (template) {
        template.getAttributeNames().forEach((name) => {
          this._element.setAttribute(name, template.getAttribute(name) || "");
        });
        const blockElements = template.content.cloneNode(true);
        this._element.innerHTML = "";
        this._element.append(blockElements);
        const markerElements = this._element.querySelectorAll("[data-uuid]");
        // this._renderChildComponents(markerElements);
        this._element.removeAttribute("data-uuid");
      }
    }
    this._addEvents();
  }

  private _removeEvents() {
    const { events = {} } = this.props;
    Object.keys(events).forEach((eventName) => {
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }

  private _addEvents() {
    const { events = {} } = this.props;
    Object.keys(events).forEach((eventName) => {
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  private _makePropsProxy(props: TProps) {
    return new Proxy(props, {
      set: (target: TProps, prop: string, value: unknown) => {
        target[prop] = value;
        this._meta.props = this.props;
        this.eventBus().emit(Block.EVENTS.FLOW_CDU, this._meta.props, target);
        return true;
      },
      deleteProperty: () => {
        throw new Error("нет доступа");
      },
    });
  }

  private _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }
}
