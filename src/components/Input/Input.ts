import Handlebars from "handlebars";
import Block from "../../classes/Block";

interface InputProps {
  id: string;
  className: string;
  type: string;
  name?: string;
  placeholder?: string;
  pattern?: string;
  value?: string;
  error?: string;
  required?: string;
  minLength?: number;
  maxLength?: number;
  events: {
    focus?: (event?: any) => void;
    blur?: (event?: any) => void;
    input?: (event?: any) => void;
    submit?: (event?: any) => void;
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

    console.log(this.props.error);

    this.element.querySelectorAll("input").forEach((x) => {
      const { input, focus, blur, submit } = this.props.events as {
        [key: string]: () => void;
      };
      x.addEventListener("focus", focus);
      x.addEventListener("blur", blur);
      x.addEventListener("input", input);
      x.addEventListener("submit", submit);
    });
    super._addEvents();
  }

  render() {
    const template = `
    <div>    
        <input class="{{className}}" id="{{id}}" name="{{label}}" type="{{type}}" placeholder="{{placeholder}}"
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
        <p class="error-input">
        {{error}}
        </p>
        {{/if}}
        </div>`;

    const res = Handlebars.compile(template);
    return this.compile(res, this.props);
  }
}
