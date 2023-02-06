import Handlebars from "handlebars";
import Block from "../../classes/Block";
import "./home.scss";

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
             <ul class="form">
                <li class="item">
                <a href="/auth.html">Авторизация</a>
                </li>
                <li class="item">
                <a href="./registration.html">Регистрация</a>
                </li>
                <li class="item">
                <a href="/chat.html">Переход к чатам</a>
                </li>
                <li class="item">
                <a href="/notFoundError.html">Страница не найдена</a>
                </li>
                <li class="item">
                <a href="/serverError.html">Серверая ошибка 500</a>
                </li>
                <li class="item">
                <a href="/profile.html">Профиль</a>
                </li>
             </ul>
      </nav>
    </main>`;
    const res = Handlebars.compile(template);
    return this.compile(res, this.props);
  }
}
