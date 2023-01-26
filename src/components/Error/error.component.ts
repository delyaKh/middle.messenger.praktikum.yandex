import Block from "../../classes/Block";

interface ErrorProps {
  code: string;
  text: string;
  link: string;
}

const template = `<main class="main">
<div class="error-container">
    <div class="error-form">{{code}}</div>
    <div class="error-form">{{text}}</div>
    <div class="auth-link">
        <a href="/src/pages/chat/chat.hbs">{{link}}</a>
    </div>
</div>
</main>`;

export default class Error extends Block {
  constructor({ code, text, link }: ErrorProps) {
    super("div", { code, text, link });
  }

  protected render(): any {
    return this.compile(template, this.props);
  }
}
