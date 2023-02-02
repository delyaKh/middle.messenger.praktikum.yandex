import Handlebars from "handlebars";
import Block from "../../classes/Block";
import Input from "../../components/Input/Input";
import validator from "../../utils/validator";
import "./auth.scss";

interface IAuthProps {
  login?: string;
  password?: string;
}
export default class AuthPage extends Block {
  constructor(props: IAuthProps) {
    const authProps: IAuthProps = {
      login: "404",
      password: "Не туда попали",
    };
    super("div", authProps);
  }

  render() {
    const login = new Input({
      type: "text",
      className: "form-control auth-input",
      placeholder: "Логин",
      onInput: (event: InputEvent) => {
        console.log(event.data);
      },
      onBlur: (event: InputEvent) => {
        validator(this);
      },
      onFocus: (event: InputEvent) => {
        validator(this);
      },
    });

    const password = new Input({
      type: "password",
      className: "form-control auth-input",
      placeholder: "Пароль",
    });

    const template = `
    <main>
      <div class="auth">
          <form class="form">
            <div class="auth-title">Вход</div>   
                {{{login}}}  
                {{{password}}} 
            <div class="form-group">
                <button class="btn btn-primary btn-block button-create" 
                type="submit">Авторизоваться</button>
            </div>
            <div class="auth-link">
              <a href="./registration.html">Нет аккаунта?</a>
            </div>
          </form>       
    </div>
   </main>`;

    this.children.login = login;
    this.children.password = password;

    const res = Handlebars.compile(template);
    return this.compile(res, this.props);
  }
}

const notFoundErrorPage = new AuthPage({});
const dom = notFoundErrorPage.render();
document.body.appendChild(dom);
