import Handlebars from "handlebars";
import Block from "../../classes/Block";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { checkPassword } from "../../utils/validator";
import "./profile.scss";

export default class ProfilePasswordEditorPage extends Block {
  constructor(props: any) {
    super("div", props);
  }

  private _profilePasswordValue: {
    newPassword: string;
    repeatPassword: string;
    password: string;
  };

  render() {
    const currentPassword = "123456";

    const password = new Input({
      id: "password",
      name: "password",
      type: "password",
      isValid: true,
      className: "profile-input",
      value: currentPassword,
      minLength: 6,
      events: {
        blur: (event: InputEvent) => {
          // @ts-ignore
          const _password = event?.target.value;
          checkPassword(_password, this, "password");
        },
      },
    });

    const newPassword = new Input({
      id: "newPassword",
      name: "newPassword",
      type: "password",
      isValid: true,
      className: "profile-input",
      value: currentPassword,
      minLength: 6,
      events: {
        blur: (event: InputEvent) => {
          // @ts-ignore
          const _password = event?.target.value;
          checkPassword(_password, this, "newPassword");
        },
      },
    });

    const repeatPassword = new Input({
      id: "repeatPassword",
      name: "repeatPassword",
      type: "password",
      isValid: true,
      className: "profile-input",
      value: currentPassword,
      minLength: 6,
      events: {
        blur: (event: InputEvent) => {
          // @ts-ignore
          const _password = event?.target.value;
          checkPassword(_password, this, "repeatPassword");
        },
      },
    });

    const button = new Button({
      className: "btn btn-primary btn-block profile-button-save",
      name: "Сохранить",
      type: "reset",
      events: {
        submit: () => {
          // @ts-ignore
          const _password = document.getElementById("password")?.value;
          // @ts-ignore
          const _newPassword = document.getElementById("password")?.value;
          // @ts-ignore
          const _repeatPassword = document.getElementById("password")?.value;

          var _checkPasword = checkPassword(_password, this, "password");
          var _checkNewPasword = checkPassword(
            _newPassword,
            this,
            "newPassword"
          );
          var _checkRepeatPasword = checkPassword(
            _repeatPassword,
            this,
            "repeatPassword"
          );
          if (
            _checkPasword &&
            _checkNewPasword &&
            _checkRepeatPasword &&
            _newPassword === _repeatPassword
          ) {
            this._profilePasswordValue = {
              password: _password,
              newPassword: _newPassword,
              repeatPassword: _repeatPassword,
            };
            console.log(this._profilePasswordValue);
          }
        },
        click: () => {
          // @ts-ignore
          const _password = document.getElementById("password")?.value;
          // @ts-ignore
          const _newPassword = document.getElementById("password")?.value;
          // @ts-ignore
          const _repeatPassword = document.getElementById("password")?.value;

          var _checkPasword = checkPassword(_password, this, "password");
          var _checkNewPasword = checkPassword(
            _newPassword,
            this,
            "newPassword"
          );
          var _checkRepeatPasword = checkPassword(
            _repeatPassword,
            this,
            "repeatPassword"
          );
          if (
            _checkPasword &&
            _checkNewPasword &&
            _checkRepeatPasword &&
            _newPassword === _repeatPassword
          ) {
            this._profilePasswordValue = {
              password: _password,
              newPassword: _newPassword,
              repeatPassword: _repeatPassword,
            };
            console.log(this._profilePasswordValue);
          }
        },
      },
    });

    const template = `<main class="main">
    <div class="profile-wrap">
            <form class="form">
                        <div class="profile-image">
                            <img class="profile-item-img" src="/static/images/avatar.png" alt="avatar"/>
                        </div>                    
                        <div class="profile-input-password-form">
                            <label class="profile-label">Старый пароль</label>
                            {{{password}}}
                        </div>
    
                        <div class="profile-input-password-form">
                            <label class="profile-label">Новый пароль</label>
                            {{{newPassword}}}
                        </div>
    
                        <div class="profile-input-password-form">
                            <label class="profile-label">Повторить пароль</label>
                            {{{repeatPassword}}}
                        </div>
                        <div class="profile-button-form">
                          {{{button}}}                       
                        </div>                    
            </form>   
        </div>
        </main>`;

    this.children.password = password;
    this.children.newPassword = newPassword;
    this.children.repeatPassword = repeatPassword;
    this.children.button = button;

    const res = Handlebars.compile(template);
    return this.compile(res, this.props);
  }
}

const notFoundErrorPage = new ProfilePasswordEditorPage({});
const dom = notFoundErrorPage.render();
document.body.appendChild(dom);
