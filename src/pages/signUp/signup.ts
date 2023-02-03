import Handlebars from "handlebars";
import Block from "../../classes/Block";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {
  checkEmail,
  checkFirstName,
  checkLogin,
  checkPassword,
  checkPhone,
  checkSecondName,
} from "../../utils/validator";
import "./signup.scss";

export default class RegistrationPage extends Block {
  constructor(props: any) {
    super("div", props);
  }

  render() {
    const email = new Input({
      id: "email",
      name: "email",
      type: "email",
      className: "form-control auth-input",
      placeholder: "Почта",
      required: "required",
      events: {
        blur: (event: InputEvent) => {
          // @ts-ignore
          const _email = event?.target.value;
          checkEmail(_email, this);
        },
        focus: (event: InputEvent) => {
          // @ts-ignore
          const _email = event?.target.value;
          checkEmail(_email, this);
        },
      },
    });

    const login = new Input({
      id: "login",
      name: "login",
      type: "text",
      className: "form-control auth-input",
      placeholder: "Логин",
      required: "required",
      events: {
        blur: (event: InputEvent) => {
          // @ts-ignore
          const _login = event?.target.value;
          checkLogin(_login, this);
        },
        focus: (event: InputEvent) => {
          // @ts-ignore
          const _login = event?.target.value;
          checkLogin(_login, this);
        },
      },
    });

    const first_name = new Input({
      id: "first_name",
      name: "first_name",
      type: "text",
      className: "form-control auth-input",
      placeholder: "Имя",
      required: "required",
      events: {
        blur: (event: InputEvent) => {
          // @ts-ignore
          const _first_name = event?.target.value;
          checkFirstName(_first_name, this);
        },
        focus: (event: InputEvent) => {
          // @ts-ignore
          const _first_name = event?.target.value;
          checkFirstName(_first_name, this);
        },
      },
    });

    const second_name = new Input({
      id: "second_name",
      name: "second_name",
      type: "text",
      className: "form-control auth-input",
      placeholder: "Фамилия",
      required: "required",
      events: {
        blur: (event: InputEvent) => {
          // @ts-ignore
          const _second_name = event?.target.value;
          checkSecondName(_second_name, this);
        },
        focus: (event: InputEvent) => {
          // @ts-ignore
          const _second_name = event?.target.value;
          checkSecondName(_second_name, this);
        },
      },
    });

    const phone = new Input({
      id: "phone",
      name: "phone",
      type: "phone",
      className: "form-control auth-input",
      placeholder: "Телефон",
      required: "required",
      events: {
        blur: (event: InputEvent) => {
          // @ts-ignore
          const _phone = event?.target.value;
          checkPhone(_phone, this);
        },
        focus: (event: InputEvent) => {
          // @ts-ignore
          const _phone = event?.target.value;
          checkPhone(_phone, this);
        },
      },
    });

    const password = new Input({
      id: "password",
      name: "password",
      type: "password",
      className: "form-control auth-input",
      placeholder: "Пароль",
      required: "required",
      minLength: 6,
      events: {
        blur: (event: InputEvent) => {
          // @ts-ignore
          const _password = event?.target.value;
          checkPassword(_password, this);
        },
        focus: (event: InputEvent) => {
          // @ts-ignore
          const _password = event?.target.value;
          checkPassword(_password, this);
        },
      },
    });

    const password_verify = new Input({
      id: "password_verify",
      name: "password_verify",
      type: "password",
      className: "form-control auth-input",
      placeholder: "Пароль(еще раз)",
      required: "required",
      minLength: 6,
      events: {
        blur: (event: InputEvent) => {
          // @ts-ignore
          const _password = event?.target.value;
          checkPassword(_password, this);
        },
        focus: (event: InputEvent) => {
          // @ts-ignore
          const _password = event?.target.value;
          checkPassword(_password, this);
        },
      },
    });

    const button = new Button({
      name: "Зарегистрироваться",
      type: "button",
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
            window.location.href = "./chat.html";
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
    <main class="main">
        <div class="auth">
          <form class="form">
            <div class="auth-title">Регистрация</div>
              <div class="auth-inputs">
              <div class="profile-input-form">
                {{{email}}}
              </div>                
              <div class="profile-input-form">
                {{{login}}}
              </div>
              <div class="profile-input-form">
                {{{first_name}}}
              </div>                
              <div class="profile-input-form">
              {{{second_name}}}
              </div>
                <div class="profile-input-form">
                {{{phone}}}
              </div>
                <div class="profile-input-form">
                {{{password}}}
              </div>
                <div class="profile-input-form">
                {{{password_verify}}}
              </div>
                
              </div>
              {{{button}}}
            <div class="auth-link">
              <a href="./chat.html">Войти</a>
            </div>
          </form>
        </div>
    </main>`;

    this.children.email = email;
    this.children.login = login;
    this.children.first_name = first_name;
    this.children.second_name = second_name;
    this.children.phone = phone;
    this.children.password = password;
    this.children.password_verify = password_verify;
    this.children.button = button;

    const res = Handlebars.compile(template);
    return this.compile(res, this.props);
  }
}

const notFoundErrorPage = new RegistrationPage({});
const dom = notFoundErrorPage.render();
document.body.appendChild(dom);
