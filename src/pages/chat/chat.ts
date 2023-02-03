import Handlebars from "handlebars";
import Block from "../../classes/Block";
import "./chat.scss";

export default class ChatPage extends Block {
  constructor(props: any) {
    super("div", props);
  }

  render() {
    const people_list = [
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
    const dialog_room = {
      index: "0",
      last_date: "22 декабря",
      dialog: [
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
    const template = `<main class="main">
      <div class="chat-main">            
          <div id="plist" class="chat-list">
              <div class="form-group">
                  <div class="link-button">
                      <a class="link-button" href="./profile.html">Профиль</a>
                   </div>
                  <input type="text" class="chat-search" placeholder="Поиск...">
              </div>    
                  
              <ul class="chat-list-ui">
                  {{#each data.people_list}}
                      <li class="chat-item" onclick="{openChatRoom()}">
                          <div class="chat-item-info">
                              <div class="chat-item-img">
                              <img class="chat-img" src="/static/images/avatar.png" width="160" height="90" alt="avatar"/>
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
                      <div class="chat-item-name chat-name-header">{{data.profile.first_name}} {{data.profile.second_name}}</div>
                      <button class="chat-item-button-info">
                          <img class="chat-container-button-info-icon" src="/static/images/points.png" alt="info">
                      </button>
                      </div>           
                  </div>

                  <div class="chat-container-dialog">
                      <div class="dialog-last-date">{{data.dialog_room.last_date}}</div>
                      <ui class="dialog-list">
                          {{#each data.dialog_room.dialog}}
                              <li class="message-li">
                                  <div class="message">
                                      <div class="message-{{type}}">
                                          <div class="message-content">{{message}}</div>                                 
                                          <div class="message-time">{{time}}</div>
                                      </div>
                                  </div>                                
                              </li>
                          {{/each}}
                      </ui>
                  </div>

                  <div class="chat-container-footer">
                      <input type="text" name="message" class="chat-container-footer-input" placeholder="Сообщение">
                      <button class="chat-container-button">
                          <img class="chat-container-button-send-icon" src="/static/images/send.png" alt="send message">
                      </button>
                  </div>
          </div>        
          </div>           
      </div>
  </main>`;

    const res = Handlebars.compile(template);
    return this.compile(res, this.props);
  }
}

const chatPage = new ChatPage({});
const dom = chatPage.render();
document.body.appendChild(dom);
