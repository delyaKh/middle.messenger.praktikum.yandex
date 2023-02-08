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

  private _authValue: {
    login: string;
    password: string;
  };

  render() {
    const login = new Input({
      id: "login",
      name: "login",
      type: "text",
      className: "auth-input",
      isValid: true,
      placeholder: "Логин",
      pattern: "^[a-zA-Z0-9_.-]*$",
      events: {
        blur: (event: InputEvent) => {
          // @ts-ignore
          const _login = event?.target.value;
          checkLogin(_login, this);
        },
        focus: (event: InputEvent) => {
          // @ts-ignore
          // const _login = event?.target.value;
          // checkLogin(_login, this);
        },
      },
    });

    const password = new Input({
      id: "password",
      name: "password",
      type: "password",
      isValid: true,
      className: "form-control auth-input",
      placeholder: "Пароль",
      minLength: 6,
      events: {
        blur: (event: InputEvent) => {
          // @ts-ignore
          const _password = event?.target.value;
          checkPassword(_password, this, "password");
        },
        focus: (event: InputEvent) => {
          // @ts-ignore
          // const _password = event?.target.value;
          // checkPassword(_password, this);
        },
      },
    });

    const button = new Button({
      name: "Авторизоваться",
      type: "button",
      className: "btn btn-primary btn-block button-create",
      events: {
        submit: () => {
          // @ts-ignore
          const _login = document.getElementById("login")?.value;
          // @ts-ignore
          const _password = document.getElementById("password")?.value;
          var _checkLogin = checkLogin(_login, this);
          var _checkPasword = checkPassword(_password, this, "password");

          if (_checkLogin && _checkPasword) {
            this._authValue = { login: _login, password: _password };
            console.log(this._authValue);
            // window.location.href = "./chat.html";
          }
        },
        click: (event: InputEvent) => {
          // @ts-ignore
          const _login = document.getElementById("login")?.value;
          // @ts-ignore
          const _password = document.getElementById("password")?.value;
          var _checkLogin = checkLogin(_login, this);
          var _checkPasword = checkPassword(_password, this, "password");

          if (_checkLogin && _checkPasword) {
            this._authValue = { login: _login, password: _password };
            console.log(this._authValue);
            // window.location.href = "./chat.html";
          }
        },
      },
    });

    const template = `
    <main>
      <div class="auth">
          <form id="form" class="form">
            <div class="auth-title">Вход</div> 
            <div class="profile-input-form">
            {{{login}}}
            </div>  
            <div class="profile-input-form">
            {{{password}}}    
            </div>              
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

const authPage = new AuthPage({});
const dom = authPage.render();
document.body.appendChild(dom);
