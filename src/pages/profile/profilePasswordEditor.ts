import Handlebars from "handlebars";
import Block from "../../classes/Block";
import "./profile.scss";

interface IErrorProps {
  errorCode?: string;
  errorMessage?: string;
}
export default class ProfilePasswordEditorPage extends Block {
  constructor(props: IErrorProps) {
    const errorProps: IErrorProps = {
      errorCode: "500",
      errorMessage: "Мы уже фиксим",
    };
    super("div", errorProps);
  }

  render() {
    const template = `<main class="main">
    <div class="profile-wrap">
            <form class="form">
                        <div class="profile-image">
                            <img class="profile-item-img" src="/static/images/avatar.png" alt="avatar"/>
                        </div>                    
                        <div class="profile-input-password-form">
                            <label class="profile-label">Старый пароль</label>
                            <input class="profile-input" name="oldPassword" type="password" value="{{data.profile.password}}">
                        </div>
    
                        <div class="profile-input-password-form">
                            <label class="profile-label">Новый пароль</label>
                            <input class="profile-input" name="newPassword" type="password" value="{{data.profile.password}}">
                        </div>
    
                        <div class="profile-input-password-form">
                            <label class="profile-label">Повторить пароль</label>
                            <input class="profile-input" name="newPassword" type="password" value="{{data.profile.password}}">
                        </div>
                        <div class="profile-button-form">
                            <button class="btn btn-primary btn-block profile-button-save" type="reset" onclick="location.href='./profile.html'">Сохранить</button>                       
                        </div>                    
            </form>   
        </div>
        </main>`;

    const res = Handlebars.compile(template);
    return this.compile(res, this.props);
  }
}

const notFoundErrorPage = new ProfilePasswordEditorPage({});
const dom = notFoundErrorPage.render();
document.body.appendChild(dom);
