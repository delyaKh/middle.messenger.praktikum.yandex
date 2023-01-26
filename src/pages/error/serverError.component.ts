import Block from "../../classes/Block";
import "./error.component.scss";

export default class serverError extends Block {
  render() {
    const template = `<div class="error-form">
    {{{Error code='500' text='Мы уже фиксим' link='Назад к чатам'}}}
    </div>`;

    return this.compile(template, this.props);
  }
}
