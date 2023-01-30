import Block from "../../classes/Block";
import "./home.component.scss";

export default class Home extends Block {
  constructor(props: any) {
    super("div", {
      ...props,
    });
  }

  protected render() {
    const template = `
    <main>
      <nav class="nav-container">
             <ui class="form">
                <li class="item">
                <a href="/notFoundError.html">Авторизация</a>
                </li>
                <li class="item">
                <a href="./notFoundError.html">Регистрация</a>
                </li>
                <li class="item">
                <a href="/notFoundError.html">Переход к чатам</a>
                </li>
                <li class="item">
                <a href="/notFoundError.html">Страница не найдена</a>
                </li>
                <li class="item">
                <a href="/notFoundError.html">Серверая ошибка 500</a>
                </li>
                <li class="item">
                <a href="/notFoundError.html">Профиль</a>
                </li>
             </ui>
    </nav>
      </main>`;

    return this.compile(template, this.props);
  }
}
