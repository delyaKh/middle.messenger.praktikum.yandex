import Handlebars from "handlebars";
import Block from "../../../classes/Block";
import "../../error/error.scss";

interface IErrorProps {
  errorCode?: string;
  errorMessage?: string;
}
export default class ServerErrorPage extends Block {
  constructor(props: IErrorProps) {
    const errorProps: IErrorProps = {
      errorCode: "500",
      errorMessage: "Мы уже фиксим",
    };
    super("div", errorProps);
  }

  render() {
    const template = `<div class="error-form">
    <main class="main">
      <div class="error-container">
        <div class="error-form">{{ errorCode }}</div>
        <div class="error-form">{{ errorMessage }}</div>
        <div class="auth-link">
          <a>Вернуться к чатам</a>
        </div>
      </div>
    </main>
  </div>;`;

    const res = Handlebars.compile(template);
    return this.compile(res, this.props);
  }
}

const notFoundErrorPage = new ServerErrorPage({});
const dom = notFoundErrorPage.render();
document.body.appendChild(dom);
