import Block from "../classes/Block";

//Login validate
export const checkLogin = (val: string, component: Block): boolean => {
  if (isLogin(val)) {
    component.children["login"].setProps({
      value: val,
      error: undefined,
    });
    return true;
  } else {
    component.children["login"].setProps({
      value: val,
      error: "Нужно ввести валидный логин",
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
      error: "Нужно ввести валидный email",
    });
    return false;
  }
};
export const isEmail = (value: string) => {
  return /[7-9]{1}[0-9]{9}/.test(value);
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
      error: "Нужно ввести валидный телефон",
    });
    return false;
  }
};
export const isPhone = (value: string) => {
  return /^[a-zA-Z0-9_.-]*$/.test(value);
};

//Password validate
export const checkPassword = (val: string, component: Block) => {
  if (val.length > 6) {
    component.children["password"]?.setProps({
      value: val,
      error: "Пароль не проходит проверку по максимальной длине",
    });
    return false;
  } else if (val.length < 6) {
    component.children["password"]?.setProps({
      value: val,
      error: "Пароль не проходит проверку по минимальной длине",
    });
    return false;
  }

  component.children["password"]?.setProps({
    value: val,
    error: undefined,
  });
  return true;
};
