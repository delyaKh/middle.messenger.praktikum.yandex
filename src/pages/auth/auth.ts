import Handlebars from "handlebars";
import Block from "../../classes/Block";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { checkLogin, checkPassword } from "../../utils/validator";
import "./auth.scss";

export default class AuthPage extends Block {
  constructor(props: any) {
    super("div", props);
  }

  render() {
    const login = new Input({
      id: "login",
      type: "text",
      className: "form-control auth-input",
      placeholder: "Логин",
      required: "required",
      pattern: "^[a-zA-Z0-9_.-]*$",
      events: {
        blur: () => {
          // @ts-ignore
          const _login = document.getElementById("login")?.value;
          checkLogin(_login, this);
        },
        focus: () => {
          // @ts-ignore
          const _login = document.getElementById("login")?.value;
          if (_login != null) {
            checkLogin(_login, this);
          }
        },
        submit: () => {},
      },
    });

    const password = new Input({
      id: "password",
      type: "password",
      className: "form-control auth-input",
      placeholder: "Пароль",
      required: "required",
      minLength: 6,
      events: {
        blur: () => {
          // @ts-ignore
          const _password = document.getElementById("password")?.value;
          checkPassword(_password, this);
        },
        focus: () => {
          // @ts-ignore
          const _password = document.getElementById("password")?.value;
          checkPassword(_password, this);
        },
        submit: () => {},
      },
    });

    const button = new Button({
      name: "Авторизоваться",
      type: "submit",
      events: {
        submit: () => {
          // @ts-ignore
          const _login = document.getElementById("login")?.value;
          // @ts-ignore
          const _password = document.getElementById("password")?.value;
          var _checkLogin = checkLogin(_login, this);
          var _checkPasword = checkPassword(_password, this);

          if (_checkLogin && _checkPasword) {
            console.log("is valid");
            window.location.href = "./serverError.html";
          }
        },
        click: () => {
          // @ts-ignore
          const _login = document.getElementById("login")?.value;
          // @ts-ignore
          const _password = document.getElementById("password")?.value;
          checkLogin(_login, this);
          checkPassword(_password, this);
        },
      },
    });

    const template = `
    <main>
      <div class="auth">
          <form id="form" class="form">
            <div class="auth-title">Вход</div> 
            {{{login}}}  
            {{{password}}}                  
            {{{button}}}
            <div class="auth-link">
              <a href="./registration.html">Нет аккаунта?</a>
            </div>
          </form>       
    </div>
   </main>`;

    this.children.login = login;
    this.children.password = password;
    this.children.button = button;

    const res = Handlebars.compile(template);
    return this.compile(res, this.props);
  }
}

const notFoundErrorPage = new AuthPage({});
const dom = notFoundErrorPage.render();
document.body.appendChild(dom);
