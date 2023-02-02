import Handlebars from "handlebars";
import Block from "../../classes/Block";
import "./signup.scss";

interface IAuthProps {
  login?: string;
  password?: string;
}
export default class RegistrationPage extends Block {
  constructor(props: IAuthProps) {
    const authProps: IAuthProps = {
      login: "404",
      password: "Не туда попали",
    };
    super("div", authProps);
  }

  render() {
    const template = `
    <main class="main">
        <div class="auth">
    <form class="form">
        <div class="auth-title">Регистрация</div>

        <div class="auth-inputs">
        <div class="form-group">
            <input class="form-control auth-input" type="email" name="email" id="email" placeholder="Почта" required>
        </div>
        <div class="form-group">
            <input class="form-control auth-input" type="text" name="login" pattern="^[a-zA-Z0-9_.-]*$" id="login" placeholder="Логин" required>
        </div>
        <div class="form-group">
            <input class="form-control auth-input" type="text" name="firs_tname" id="first_name" placeholder="Имя" required>
        </div>
      <div class="form-group">
            <input class="form-control auth-input" type="text" name="second_name" id="second_name" placeholder="Фамилия" required>
        </div>
      <div class="form-group">
            <input class="form-control auth-input" type="phone" name="phone" id="phone" placeholder="Телефон" required>
        </div>
        <div class="form-group">
            <input class="form-control auth-input" type="password" name="password" minlength="6" id="password" placeholder="Пароль" required>
        </div>
        <div class="form-group">
            <input class="form-control auth-input" type="password" name="password" minlength="6" id="password" placeholder="Пароль(еще раз)" required>
        </div>
        </div>    
           
        <div class="form-group">
            <button class="btn btn-primary btn-block button-create" type="submit" onclick="{btnHandler()}">Зарегистрироваться</button>
        </div>
       <div class="auth-link">
         <a href="./chat.html">Войти</a>
      </div>
    </form>
</div>
    </main>`;

    const res = Handlebars.compile(template);
    return this.compile(res, this.props);
  }
}

const notFoundErrorPage = new RegistrationPage({});
const dom = notFoundErrorPage.render();
document.body.appendChild(dom);
