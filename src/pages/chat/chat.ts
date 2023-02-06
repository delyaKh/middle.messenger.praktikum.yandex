import Handlebars from "handlebars";
import Block from "../../classes/Block";
import Input from "../../components/Input/Input";
import "./chat.scss";

export interface User {
  user_name: string;
  last_message: string;
  user_id: number;
  user_avatar: string;
  time_last_message: string;
  unread_messagges: string;
}
export interface Dialog {
  type: string;
  message: string;
  time: string;
}
export interface Room {
  index: string;
  last_date: string;
  dialogs: Dialog[];
}
export interface IProfile {
  _id: string;
  index: number;
  avatar: string;
  first_name: string;
  second_name: string;
  email: string;
  login: string;
  nickname: string;
  phone: string;
  password: string;
}
export interface ChatProps {
  people_list: User[];
  dialog_room: Room;
  prifile: IProfile;
  events: {
    onClick: () => void;
  };
}
export default class ChatPage extends Block {
  private profile: IProfile = {
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
  private people_list: User[] = [
    {
      user_name: "Петр Белов",
      last_message: "Привет",
      user_id: 1,
      user_avatar: "",
      time_last_message: "10:34",
      unread_messagges: "2",
    },
    {
      user_name: "Илья Петров",
      last_message: "Друзья, я сегодня не смогу придти!...",
      user_id: 2,
      user_avatar: "",
      time_last_message: "10:01",
      unread_messagges: "1",
    },
  ];
  private dialog_room: Room = {
    index: "0",
    last_date: "22 декабря",
    dialogs: [
      {
        type: "request",
        message:
          "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну.",
        time: "11:56",
      },
      {
        type: "response",
        time: "12:00",
        message: "Привет, очеень круто!",
      },
      {
        type: "request",
        message: "Давай посмотрим фильм об истории НАСА?",
        time: "12:05",
      },
      {
        type: "response",
        message: "Я сегодня не смогу(",
        time: "12:10",
      },
    ],
  };

  constructor(props: ChatProps) {
    super("div", props);
    this.props.people_list = this.people_list;
    this.props.dialog_room = this.dialog_room;
    this.props.profile = this.profile;
    this.props.events = {
      onClick: () => {
        //@ts-ignore
        document.getElementById("empty").style.display = "none";
        //@ts-ignore
        document.getElementById("room").style.display = "block";
      },
    };
  }

  _addEvents(): void {
    if (!this.props.events) {
      return;
    }
    // console.log(this.props.error);
    this.element.querySelectorAll("li").forEach((x) => {
      const { onClick } = this.props.events as {
        [key: string]: () => void;
      };
      x.addEventListener("onClick", onClick);
    });
    super._addEvents();
  }

  _removeEvents(): void {
    if (!this.props.events) {
      return;
    }
    // console.log(this.props.error);
    this.element.querySelectorAll("li").forEach((x) => {
      const { onClick } = this.props.events as {
        [key: string]: () => void;
      };

      x.removeEventListener("onClick", onClick);
    });
    super._removeEvents();
  }

  render() {
    const searchInput = new Input({
      id: "search",
      className: "chat-search",
      isValid: true,
      type: "text",
      placeholder: "Поиск...",
    });

    const messageInput = new Input({
      id: "message",
      name: "message",
      className: "chat-container-footer-input",
      isValid: true,
      type: "text",
      placeholder: "Сообщение",
    });

    const template = `<main class="main">
      <div class="chat-main">            
          <div id="plist" class="chat-list">
              <div class="form-group">
                  <div class="link-button">
                      <a class="link-button" href="./profile.html">Профиль</a>
                   </div>
                  {{{searchInput}}}
              </div>    
                  
              <ul class="chat-list-ui">
                  {{#each people_list}}
                      <li class="chat-item">
                          <div class="chat-item-info">
                              <div class="chat-item-img">
                              <img class="chat-img" src="static/images/avatar.png" width="160" height="90" alt="avatar"/>
                              </div>
                              <div class="chat-about">
                                  <div class="chat-item-name">{{user_name}}</div>
                                  <div class="chat-item-message">{{last_message}}</div>
                              </div>
                                  <div class="chat-item-about2">
                                      <div class="chat-item-about-rows">
                                          <div class="chat-item-time">{{time_last_message}}</div>
                                          <div class="chat-item-unread">
                                              <div class="chat-item-unread-text">{{unread_messagges}}</div>
                                          </div>
                                      </div>
                                  </div>    
                              </div>                                      
                          </li>
                      {{/each}}
              </ul>
          </div>
          <div id="empty" class="chat-empty-container">
              <div  class="empty-text">
                  Выберите чат чтобы отправить сообщение
              </div>
          </div>
          <div id="room" class="chat-container">
          <div class="chat-container-rows">                
                  <div class="chat-container-profile-head">
                      <div class="chat-container-profile-head-column">
                      <img class="chat-img" src="/static/images/avatar.png" alt="avatar"/>
                      <div class="chat-item-name chat-name-header">{{profile.first_name}} {{profile.second_name}}</div>
                      <button class="chat-item-button-info">
                          <img class="chat-container-button-info-icon" src="/static/images/points.png" alt="info">
                      </button>
                      </div>           
                  </div>

                  <div class="chat-container-dialog">
                      <div class="dialog-last-date">{{dialog_room.last_date}}</div>
                      <ul class="dialog-list">
                          {{#each dialog_room.dialog}}
                              <li class="message-li">
                                  <div class="message">
                                      <div class="message-{{type}}">
                                          <div class="message-content">{{message}}</div>                                 
                                          <div class="message-time">{{time}}</div>
                                      </div>
                                  </div>                                
                              </li>
                          {{/each}}
                      </ul>
                  </div>

                  <div class="chat-container-footer">
                     {{{messageInput}}}
                      <button class="chat-container-button">
                          <img class="chat-container-button-send-icon" src="/static/images/send.png" alt="send message">
                      </button>
                  </div>
          </div>        
          </div>           
      </div>
  </main>`;

    this.children.searchInput = searchInput;
    this.children.messageInput = messageInput;

    const res = Handlebars.compile(template);
    return this.compile(res, this.props);
  }
}

const chatPage = new ChatPage({} as ChatProps);
const dom = chatPage.render();
document.body.appendChild(dom);
