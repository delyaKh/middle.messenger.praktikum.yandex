import Handlebars from "handlebars";
import Block from "../../classes/Block";

interface InputProps {
  className: string;
  type: string;
  name?: string;
  placeholder?: string;
  pattern?: string;
  value?: string;
  error?: string;
  onInput?: (event?: any) => void;
  onFocus?: (event?: any) => void;
  onBlur?: (event?: any) => void;
}

export default class Input extends Block {
  constructor(props: InputProps) {
    super("div", {
      events: {
        input: props.onInput,
        focus: props.onFocus,
        blur: props.onBlur,
      },
      ...props,
    });
  }

  render() {
    const template = `
    <div class="profile-input-form">
        <label class="profile-label">{{label}}</label>
        <input class="{{className}}" name="{{label}}" type="{{type}}" placeholder="{{placeholder}}"
            {{#if value}}
            value={{value}}
            {{else}}
            value=""
            {{/if}}
            onInput={{onInput}}
            onBlur={{onBlur}}
            onFocus={{onFocus}}
        />
        {{#if error}}
            <p>{{error}}</p>
        {{/if}}
    </div>`;

    const res = Handlebars.compile(template);
    return this.compile(res, this.props);
  }
}
