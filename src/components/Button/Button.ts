import Handlebars from "handlebars";
import Block from "../../classes/Block";

export interface ButtonProps {
  name: string;
  type?: string;
  className: string;
  primary?: boolean;
  secondary?: boolean;
  href?: string;
  events: {
    click?: (event?: any) => void;
    submit?: (event?: any) => void;
  };
}

export default class Button extends Block {
  constructor(props: ButtonProps) {
    super("div", props);
  }

  _addEvents(): void {
    if (!this.props.events) {
      return;
    }

    console.log(this.props.error);

    this.element.querySelectorAll("button").forEach((x) => {
      const { click, submit } = this.props.events as {
        [key: string]: () => void;
      };
      x.addEventListener("click", click);
      x.addEventListener("submit", submit);
    });
    super._addEvents();
  }

  render() {
    const template = `<div class="form-group">
    <button class="{{className}}"
    type="{{type}}">{{name}}</button>
    </div>`;

    const res = Handlebars.compile(template);
    return this.compile(res, this.props);
  }
}
