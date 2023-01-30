import Block from "../../classes/Block";
import "./error.component.scss";

export default class notFoundError extends Block {
  render() {
    const template = `<div class="error-form">
    <main class="main">
<div class="error-container">
    <div class="error-form">404</div>
    <div class="error-form">Не туда попали</div>
    <div class="auth-link">
        <a href="/src/pages/chat/chat.hbs">Вернуться к чатам</a>
    </div>
</div>
</main>`;

    return this.compile(template, this.props);
  }
}

// {{{Error code='404' text='Не туда попали' link='Назад к чатам'}}}
