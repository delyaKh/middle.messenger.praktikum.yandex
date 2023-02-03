import Handlebars from "handlebars";
import Block from "../../classes/Block";
import Input from "../../components/Input/Input";
import {
  checkEmail,
  checkFirstName,
  checkLogin,
  checkPhone,
  checkSecondName,
} from "../../utils/validator";
import "./profile.scss";

export default class ProfilePage extends Block {
  constructor(props: any) {
    super("div", props);
  }

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
      value: profile.email,
      required: "required",
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
      placeholder: "Логин",
      value: profile.login,
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
      value: profile.first_name,
      className: "profile-input",
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
      className: "profile-input",
      value: profile.second_name,
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
      className: "profile-input",
      value: profile.phone,
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

    const nickname = new Input({
      id: "nickname",
      name: "nickname",
      type: "text",
      value: profile.nickname,
      className: "profile-input",
      placeholder: "Имя в чате",
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

    const template = `<main class="main">
    <div class="profile-wrap">
            <form class="form">
                        <div class="profile-image">
                            <img class="profile-item-img" src="{{{img}}}" name="avatar" alt="avatar"/>    
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
                        <button class="btn btn-primary btn-block profile-button" type="reset" onclick="location.href='./chat.html'">Выйти</button>                       
                        
            </form>   
        </div>    
    </div>
        </main>`;

    this.children.email = email;
    this.children.login = login;
    this.children.first_name = first_name;
    this.children.second_name = second_name;
    this.children.phone = phone;
    this.children.nickname = nickname;

    const res = Handlebars.compile(template);
    return this.compile(res, this.props);
  }
}

const profilePage = new ProfilePage({});
const dom = profilePage.render();
document.body.appendChild(dom);
