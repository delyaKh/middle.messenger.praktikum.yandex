import Block from "../../classes/Block";

export default class NotFoundPage extends Block {
  render() {
    const template = `<div class="error-form">
    {{{Error code='404' text='Не туда попали' link='Назад к чатам'}}}
    </div>`;

    return this.compile(() => template, this.props);
  }
}
