import Handlebars from "handlebars";
import Block from "../../classes/Block";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {
  checkAllForm,
  checkEmail,
  checkFirstName,
  checkLogin,
  checkPhone,
  checkSecondName,
  TFormType,
} from "../../utils/validator";
import "./profile.scss";

export interface IProfileType extends TFormType {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  phone: string;
}
export default class ProfilePage extends Block {
  constructor(props: any) {
    super("div", props);
  }

  private _profileValue: IProfileType = {
    login: "",
    email: "",
    first_name: "",
    second_name: "",
    phone: "",
  };

  render() {
    const profile = {
      _id: "1",
      index: 0,
      avatar: "/static/img/ava.png",
      first_name: "Petr",
      second_name: "Belov",
      email: "petrbelov@mail.ru",
      login: "PetrBelov",
      nickname: "petr_belov",
      phone: "+7(909)9673030",
      password: "12345678",
    };

    const email = new Input({
      id: "email",
      name: "email",
      type: "email",
      className: "profile-input",
      isValid: true,
      placeholder: profile.email,
      events: {
        blur: () => {
          // @ts-ignore
          const _email = document.getElementById("email")?.value;
          checkEmail(_email, this);
        },
        focus: () => {
          // @ts-ignore
          // const _email = document.getElementById("email")?.value;
          // checkEmail(_email, this);
        },
      },
    });

    const login = new Input({
      id: "login",
      name: "login",
      type: "text",
      className: "profile-input",
      isValid: true,
      placeholder: profile.login,
      events: {
        blur: (event: InputEvent) => {
          // @ts-ignore
          const _login = event?.target.value;
          checkLogin(_login, this);
        },
        focus: (event: InputEvent) => {},
      },
    });

    const first_name = new Input({
      id: "first_name",
      name: "first_name",
      isValid: true,
      type: "text",
      placeholder: profile.first_name,
      className: "profile-input",
      events: {
        blur: (event: InputEvent) => {
          // @ts-ignore
          const _first_name = event?.target.value;
          checkFirstName(_first_name, this);
        },
        focus: (event: InputEvent) => {},
      },
    });

    const second_name = new Input({
      id: "second_name",
      name: "second_name",
      isValid: true,
      type: "text",
      className: "profile-input",
      placeholder: profile.second_name,
      events: {
        blur: (event: InputEvent) => {
          // @ts-ignore
          const _second_name = event?.target.value;
          checkSecondName(_second_name, this);
        },
        focus: (event: InputEvent) => {},
      },
    });

    const phone = new Input({
      id: "phone",
      name: "phone",
      type: "phone",
      isValid: true,
      className: "profile-input",
      placeholder: profile.phone,
      events: {
        blur: (event: InputEvent) => {
          // @ts-ignore
          const _phone = event?.target.value;
          checkPhone(_phone, this);
        },
        focus: (event: InputEvent) => {},
      },
    });

    const nickname = new Input({
      id: "nickname",
      name: "nickname",
      type: "text",
      placeholder: profile.nickname,
      isValid: true,
      className: "profile-input",
      events: {
        blur: (event: InputEvent) => {},
        focus: (event: InputEvent) => {},
      },
    });

    const button = new Button({
      className: "btn btn-primary btn-block profile-button",
      name: "Выйти",
      type: "reset",
      events: {
        submit: () => {
          this._profileValue = {
            // @ts-ignore
            login: document.getElementById("login")?.value,
            // @ts-ignore
            email: document.getElementById("email")?.value,
            // @ts-ignore
            first_name: document.getElementById("first_name")?.value,
            // @ts-ignore
            second_name: document.getElementById("second_name")?.value,
            // @ts-ignore
            phone: document.getElementById("phone")?.value,
          };

          if (checkAllForm(this._profileValue, this)) {
            console.log(this._profileValue);
            // window.location.href = "./chat.html";
          }
        },
        click: () => {
          this._profileValue = {
            // @ts-ignore
            login: document.getElementById("login")?.value,
            // @ts-ignore
            email: document.getElementById("email")?.value,
            // @ts-ignore
            first_name: document.getElementById("first_name")?.value,
            // @ts-ignore
            second_name: document.getElementById("second_name")?.value,
            // @ts-ignore
            phone: document.getElementById("phone")?.value,
          };

          if (checkAllForm(this._profileValue, this)) {
            console.log(this._profileValue);
            // window.location.href = "./chat.html";
          }
        },
      },
    });

    const template = `<main class="main">
    <div class="profile-wrap">
            <form class="form">
                        <div class="profile-image">
                            <img class="profile-item-img" src="image/avatar.png" name="avatar" alt="avatar"/>    
                        </div>
                        <div class="profile-name">petr_belov</div>    
                        <div class="profile-input-form">
                            <label class="profile-label">Почта</label>
                            {{{email}}}
                        </div>    
                        <div class="profile-input-form">
                            <label class="profile-label">Логин</label>
                            {{{login}}}
                        </div>
    
                        <div class="profile-input-form">
                            <label class="profile-label">Имя</label>
                            {{{first_name}}}
                        </div>
    
                        <div class="profile-input-form">
                            <label class="profile-label">Фамилия</label>
                            {{{second_name}}}
                        </div>
    
                        <div class="profile-input-form">
                            <label class="profile-label">Имя в чате</label>
                            {{{nickname}}}
                        </div>
    
                        <div class="profile-input-form">
                            <label class="profile-label">Телефон</label>
                            {{{phone}}}
                        </div>
    
                        <div class="profile-link">
                            <a href="./profileEditor.html">Изменить данные</a>
                        </div>
                        <div class="profile-link">
                            <a href="./profilePasswordEditor.html">Изменить пароль</a>
                        </div>
                        {{{button}}}                      
                        
            </form>   
        </div>    
    </div>
        </main>`;

    this.children.email = email;
    this.children.login = login;
    this.children.first_name = first_name;
    this.children.second_name = second_name;
    this.children.nickname = nickname;
    this.children.phone = phone;
    this.children.button = button;

    const res = Handlebars.compile(template);
    return this.compile(res, this.props);
  }
}

const profilePage = new ProfilePage({});
const dom = profilePage.render();
document.body.appendChild(dom);
