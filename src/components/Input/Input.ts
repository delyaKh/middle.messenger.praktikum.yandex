import Handlebars from "handlebars";
import Block from "../../classes/Block";

interface InputProps {
  id: string;
  className: string;
  type: string;
  name?: string;
  isValid?: boolean;
  placeholder?: string;
  pattern?: string;
  value?: string;
  error?: string;
  required?: string;
  minLength?: number;
  maxLength?: number;
  events: {
    focus?: (event?: Event) => void;
    blur?: (event?: Event) => void;
    input?: (event?: Event) => void;
  };
}

export default class Input extends Block {
  constructor(props: InputProps) {
    super("div", props);
  }

  _addEvents(): void {
    if (!this.props.events) {
      return;
    }

    // console.log(this.props.error);

    this.element.querySelectorAll("input").forEach((x) => {
      const { input, focus, blur } = this.props.events as {
        [key: string]: () => void;
      };
      x.addEventListener("focus", focus);
      x.addEventListener("blur", blur);
      x.addEventListener("input", input);
    });
    super._addEvents();
  }

  _removeEvents(): void {
    if (!this.props.events) {
      return;
    }

    // console.log(this.props.error);

    this.element.querySelectorAll("input").forEach((x) => {
      const { input, focus, blur } = this.props.events as {
        [key: string]: () => void;
      };

      x.removeEventListener("focus", focus);
      x.removeEventListener("blur", blur);
      x.removeEventListener("input", input);
    });
    super._removeEvents();
  }

  render() {
    const template = `
    <div>    
        <input {{#if isValid}}class="{{className}}"{{else}}class="error-input"{{/if}} id="{{id}}" name="{{label}}" type="{{type}}" placeholder="{{placeholder}}"
            {{#if value}}
            value={{value}}
            {{else}}
            value=""
            {{/if}} 

            {{#if minLength}}
            minlength = {{minLength}}
            {{/if}}

            {{#if maxLength}}
            maxlength={{maxLength}}
            {{/if}}

            {{#if required}}
            required
            {{/if}}
        />    
        {{#if error}}
        <p class="error-message">
        {{error}}
        </p>
        {{/if}}
        </div>`;
    const res = Handlebars.compile(template);
    return this.compile(res, this.props);
  }
}
