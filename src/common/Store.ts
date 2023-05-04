import { User } from "../api/AuthApi";
import Block from "../classes/Block";
import EventBus from "../classes/EventBus";
import isEqual, { set } from "../helpers/helpers";

export enum StoreEvents {
  Updated = "Updated",
}
interface State {
  user: {
    data?: User;
    isLoading?: boolean;
    hasError?: boolean;
  };
}
export interface IUserData {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}

interface ILastMessage {
  time: string;
  content: string;
}

export interface IChatData {
  id: number;
  title: string;
  avatar: string | null;
  created_by: number;
  unread_count: number;
  last_message: ILastMessage;
}
interface IStoreData {
  currentUser?: IUserData;
  chatList?: IChatData[];
  currentChatId?: string;
  // messageList: IMessageProps[];
}

export type Indexed<T = any> = {
  [key in string]: T;
};

export class Store extends EventBus {
  private _state: Indexed = {};

  getState() {
    return this._state;
  }

  set(path: string, value: unknown) {
    set(this._state, path, value);

    this.emit(StoreEvents.Updated, this._state);
  }
}

const store = new Store();

export const withStore =
  (mapStateToProps: (state: IStoreData) => Record<string, unknown>) =>
  (Component: typeof Block) => {
    return class WithStore extends Component {
      constructor(props: any) {
        const state = mapStateToProps(store.getState());
        super("", { ...props, ...state });

        store.on(StoreEvents.Updated, () => {
          const newState = mapStateToProps(store.getState());

          if (!isEqual(state, newState)) {
            this.setProps({ ...newState });
          }
        });
      }
    };
  };

export { store };
