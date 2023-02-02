import Handlebars from "handlebars";
import Block from "../../classes/Block";
import "./profile.scss";

interface IErrorProps {
  errorCode?: string;
  errorMessage?: string;
}
export default class ProfilePage extends Block {
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
                            <img class="profile-item-img" src="/static/images/avatar.png" name="avatar" alt="avatar"/>
    
                        </div>
                        <div class="profile-name">{{data.profile.first_name}}</div>
    
                        <div class="profile-input-form">
                            <label class="profile-label">Почта</label>
                            <input class="profile-input" name="email" value="{{ data.profile.email}}">
                        </div>
    
                        <div class="profile-input-form">
                            <label class="profile-label">Логин</label>
                            <input class="profile-input" name="login" value="{{ data.profile.login}}">
                        </div>
    
                        <div class="profile-input-form">
                            <label class="profile-label">Имя</label>
                            <input class="profile-input" name="first_name" value="{{ data.profile.first_name}}">
                        </div>
    
                        <div class="profile-input-form">
                            <label class="profile-label">Фамилия</label>
                            <input class="profile-input" name="second_name" value="{{ data.profile.second_name}}">
                        </div>
    
                        <div class="profile-input-form">
                            <label class="profile-label">Имя в чате</label>
                            <input class="profile-input" name="display_name" value="{{ data.profile.nickname}}">
                        </div>
    
                        <div class="profile-input-form">
                            <label class="profile-label">Телефон</label>
                            <input class="profile-input" name="phone" value="{{ data.profile.phone}}">
                        </div>
    
                        <div class="profile-link">
                            <a href="./profileEditor.html">Изменить данные</a>
                        </div>
                        <div class="profile-link">
                            <a href="./profilePasswordEditor.html">Изменить пароль</a>
                        </div>
                        <button class="btn btn-primary btn-block profile-button" type="reset" onclick="location.href='./chat.html'">Выйти</button>                       
                        
            </form>   
        </div>    
    </div>
        </main>`;

    const res = Handlebars.compile(template);
    return this.compile(res, this.props);
  }
}

const notFoundErrorPage = new ProfilePage({});
const dom = notFoundErrorPage.render();
document.body.appendChild(dom);
