import Block from "../../classes/Block";
import "./home.component.scss";

export default class Home extends Block {
  protected render() {
    const template = `
    <main>
      <nav class="nav-container">
             <ui class="form">
                <li class="item">
                <a href="../auth/auth.hbs">Авторизация</a>
                </li>
                <li class="item">
                <a href="../signUp/signup.hbs">Регистрация</a>
                </li>
                <li class="item">
                <a href="../chat/chat.hbs">Переход к чатам</a>
                </li>
                <li class="item">
                <a href="../error/notFoundError.component.html">Страница не найдена 404</a>
                </li>
                <li class="item">
                <a href="../error/serverError.hbs">Серверая ошибка 500</a>
                </li>
                <li class="item">
                <a href="../../pages/profile/profile.hbs">Профиль</a>
                </li>
             </ui>
    </nav>
      </main>`;

    return this.compile(template, {});
  }
}
