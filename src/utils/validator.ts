import Block from "../classes/Block";

//Login validate
export const checkLogin = (val: string, component: Block): boolean => {
  if (isLogin(val)) {
    component.children["login"]?.setProps({
      isValid: true,
      value: val,
      error: undefined,
    });
    return true;
  } else {
    component.children["login"]?.setProps({
      isValid: false,
      value: val,
      error: "Логин не соответствует",
    });
    return false;
  }
};
export const isLogin = (value: string) => {
  return /^[a-zA-Z0-9-_]{3,20}$/.test(value);
};

//Email validate
export const checkEmail = (val: string, component: Block): boolean => {
  if (isEmail(val)) {
    component.children["email"].setProps({
      isValid: true,
      value: val,
      error: undefined,
    });
    return true;
  } else {
    component.children["email"].setProps({
      isValid: false,
      value: val,
      error: "Email не соответствует",
    });
    return false;
  }
};
export const isEmail = (value: string) => {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value);
};

//Phone validate
export const checkPhone = (val: string, component: Block): boolean => {
  if (isPhone(val)) {
    component.children["phone"].setProps({
      isValid: true,
      value: val,
      error: undefined,
    });
    return true;
  } else {
    component.children["phone"].setProps({
      isValid: false,
      value: val,
      error: "Номер не соответствует",
    });
    return false;
  }
};
export const isPhone = (value: string) => {
  return /[7-9]{1}[0-9]{9}/.test(value);
};

//Second name validate
export const checkSecondName = (val: string, component: Block): boolean => {
  if (isName(val)) {
    component.children["second_name"].setProps({
      isValid: true,
      value: val,
      error: undefined,
    });
    return true;
  } else {
    component.children["second_name"].setProps({
      isValid: false,
      value: val,
      error: "Фамилия не соответствует",
    });
    return false;
  }
};

//First name validate
export const checkFirstName = (val: string, component: Block): boolean => {
  if (isName(val)) {
    component.children["first_name"].setProps({
      isValid: true,
      value: val,
      error: undefined,
    });
    return true;
  } else {
    component.children["first_name"].setProps({
      isValid: false,
      value: val,
      error: "Имя не соответствует",
    });
    return false;
  }
};

export const isName = (value: string) => {
  return /^(A-Z)*[a-zA-Z ]*|^(А-Я)*[а-яА-Я ]*/.test(value);
};

//Password validate
export const checkPassword = (val: string, component: Block, type: string) => {
  if (val?.length > 6) {
    component.props.isValid = false;
    component.children[type]?.setProps({
      isValid: false,
      value: val,
      error: "Пароль не соответствует максимальной длине",
    });
    return false;
  } else if (val?.length < 6) {
    component.children[type]?.setProps({
      isValid: false,
      value: val,
      error: "Пароль не соответствует минимальной длине",
    });
    return false;
  }

  component.children[type]?.setProps({
    isValid: true,
    value: val,
    error: undefined,
  });
  return true;
};

export const checkAllForm = (val: TFormType, component: Block) => {
  Object.entries(val).forEach(([key, value]) => {
    switch (key) {
      case "login":
        if (!checkLogin(value, component)) {
          return false;
        }
        break;
      case "email":
        if (!checkEmail(value, component)) {
          return false;
        }
        break;
      case "first_name":
        if (!checkFirstName(value, component)) {
          return false;
        }
        break;
      case "second_name":
        if (!checkSecondName(value, component)) {
          return false;
        }
        break;
      case "phone":
        if (!checkPhone(value, component)) {
          return false;
        }

        break;
      case "password":
        if (!checkPassword(value, component, "password")) {
          return false;
        }
        break;
      case "password-verify":
        if (!checkPassword(value, component, "password-verify")) {
          return false;
        }
        break;
    }
  });
  return true;
};

export interface TFormType {
  email?: string;
  login?: string;
  first_name?: string;
  second_name?: string;
  phone?: string;
  password?: string;
  password_verify?: string;
}
