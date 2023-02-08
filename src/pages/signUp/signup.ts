import Handlebars from "handlebars";
import Block from "../../classes/Block";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {
  checkAllForm,
  checkEmail,
  checkFirstName,
  checkLogin,
  checkPassword,
  checkPhone,
  checkSecondName,
  TFormType,
} from "../../utils/validator";
import "./signup.scss";

export interface ISignUpType extends TFormType {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  phone: string;
  password: string;
}

export default class RegistrationPage extends Block {
  constructor(props: any) {
    super("div", props);
  }

  private _signupValue: ISignUpType = {
    email: "",
    login: "",
    first_name: "",
    second_name: "",
    phone: "",
    password: "",
  };

  render() {
    const email = new Input({
      id: "email",
      name: "email",
      type: "email",
      isValid: true,
      className: "form-control signup-input",
      placeholder: "Почта",
      events: {
        blur: (event: InputEvent) => {
          // @ts-ignore
          const _email = event?.target.value;
          checkEmail(_email, this);
        },
        focus: (event: InputEvent) => {
          // @ts-ignore
          // const _email = event?.target.value;
          // checkEmail(_email, this);
        },
      },
    });

    const login = new Input({
      id: "login",
      name: "login",
      type: "text",
      isValid: true,
      className: "form-control signup-input",
      placeholder: "Логин",
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

    const first_name = new Input({
      id: "first_name",
      name: "first_name",
      type: "text",
      isValid: true,
      className: "form-control signup-input",
      placeholder: "Имя",
      events: {
        blur: (event: InputEvent) => {
          // @ts-ignore
          const _first_name = event?.target.value;
          checkFirstName(_first_name, this);
        },
        focus: (event: InputEvent) => {
          // @ts-ignore
          // const _first_name = event?.target.value;
          // checkFirstName(_first_name, this);
        },
      },
    });

    const second_name = new Input({
      id: "second_name",
      name: "second_name",
      type: "text",
      isValid: true,
      className: "form-control signup-input",
      placeholder: "Фамилия",
      events: {
        blur: (event: InputEvent) => {
          // @ts-ignore
          const _second_name = event?.target.value;
          checkSecondName(_second_name, this);
        },
        focus: (event: InputEvent) => {
          // @ts-ignore
          // const _second_name = event?.target.value;
          // checkSecondName(_second_name, this);
        },
      },
    });

    const phone = new Input({
      id: "phone",
      name: "phone",
      type: "phone",
      isValid: true,
      className: "form-control signup-input",
      placeholder: "Телефон",
      events: {
        blur: (event: InputEvent) => {
          // @ts-ignore
          const _phone = event?.target.value;
          checkPhone(_phone, this);
        },
        focus: (event: InputEvent) => {
          // @ts-ignore
          // const _phone = event?.target.value;
          // checkPhone(_phone, this);
        },
      },
    });

    const password = new Input({
      id: "password",
      name: "password",
      type: "password",
      isValid: true,
      className: "form-control signup-input",
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

    const password_verify = new Input({
      id: "password_verify",
      name: "password_verify",
      type: "password",
      isValid: true,
      className: "form-control signup-input",
      placeholder: "Пароль(еще раз)",
      minLength: 6,
      events: {
        blur: (event: InputEvent) => {
          // @ts-ignore
          const _password = event?.target.value;
          checkPassword(_password, this, "password_verify");
        },
        focus: (event: InputEvent) => {
          // @ts-ignore
          // const _password = event?.target.value;
          // checkPassword(_password, this);
        },
      },
    });

    const button = new Button({
      name: "Зарегистрироваться",
      type: "button",
      className: "btn btn-primary btn-block button-create",
      events: {
        submit: () => {
          this._signupValue = {
            // @ts-ignore
            login: document.getElementById("login")?.value,
            // @ts-ignore
            password: document.getElementById("password")?.value,
            // @ts-ignore
            email: document.getElementById("email")?.value,
            // @ts-ignore
            first_name: document.getElementById("first_name")?.value,
            // @ts-ignore
            second_name: document.getElementById("second_name")?.value,
            // @ts-ignore
            phone: document.getElementById("phone")?.value,
            // @ts-ignore
            password_verify: document.getElementById("password_verify")?.value,
          };

          if (checkAllForm(this._signupValue, this)) {
            console.log(this._signupValue);
            // window.location.href = "./chat.html";
          }
        },
        click: () => {
          this._signupValue = {
            // @ts-ignore
            login: document.getElementById("login")?.value,
            // @ts-ignore
            password: document.getElementById("password")?.value,
            // @ts-ignore
            email: document.getElementById("email")?.value,
            // @ts-ignore
            first_name: document.getElementById("first_name")?.value,
            // @ts-ignore
            second_name: document.getElementById("second_name")?.value,
            // @ts-ignore
            phone: document.getElementById("phone")?.value,
            // @ts-ignore
            password_verify: document.getElementById("password_verify")?.value,
          };

          if (checkAllForm(this._signupValue, this)) {
            console.log(this._signupValue);
            // window.location.href = "./chat.html";
          }
        },
      },
    });

    const template = `
    <main class="main">
        <div class="signup">
          <form class="form">
            <div class="signup-title">Регистрация</div>
              <div class="signup-inputs">
              <div class="profile-input-form">
                {{{email}}}
              </div>                
              <div class="signup-input-form">
                {{{login}}}
              </div>
              <div class="signup-input-form">
                {{{first_name}}}
              </div>                
              <div class="signup-input-form">
              {{{second_name}}}
              </div>
                <div class="signup-input-form">
                {{{phone}}}
              </div>
                <div class="signup-input-form">
                {{{password}}}
              </div>
                <div class="signup-input-form">
                {{{password_verify}}}
              </div>
                
              </div>
              {{{button}}}
            <div class="signup-link">
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
