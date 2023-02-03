import Block from "../classes/Block";

//Login validate
export const checkLogin = (val: string, component: Block): boolean => {
  if (isLogin(val)) {
    component.children["login"]?.setProps({
      value: val,
      error: undefined,
    });
    return true;
  } else {
    component.children["login"]?.setProps({
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
      value: val,
      error: undefined,
    });
    return true;
  } else {
    component.children["email"].setProps({
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
      value: val,
      error: undefined,
    });
    return true;
  } else {
    component.children["phone"].setProps({
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
      value: val,
      error: undefined,
    });
    return true;
  } else {
    component.children["second_name"].setProps({
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
      value: val,
      error: undefined,
    });
    return true;
  } else {
    component.children["first_name"].setProps({
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
export const checkPassword = (val: string, component: Block) => {
  if (val?.length > 6) {
    component.children["password"]?.setProps({
      value: val,
      error: "Пароль не соответствует максимальной длине",
    });
    return false;
  } else if (val?.length < 6) {
    component.children["password"]?.setProps({
      value: val,
      error: "Пароль не соответствует минимальной длине",
    });
    return false;
  }

  component.children["password"]?.setProps({
    value: val,
    error: undefined,
  });
  return true;
};
