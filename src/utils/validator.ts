import Block from "../classes/Block";

const validator = (component: Block) => {
  console.log("Validate");
  const errors: string[] = [];

  Object.entries(component.children).forEach(([key, child]) => {
    if (component.children[key].props.required) {
      const required = child.props.required;
      const name = child.props.name;

      if (!required.text) {
        required.text = "Required";
      }

      if (required.rules) {
        if (!required.rules.min) {
          required.rules.min = 1;
        }

        // @ts-ignore
        const value = child.getContent().querySelector("input").value.trim();

        if (value.length >= 1) {
          if (required.rules.min) {
            if (value.length < required.rules.min) {
              errors[name] = required.text;
            }
          }

          if (required.rules.max) {
            if (value.length > required.rules.max) {
              errors[name] = required.text;
            }
          }

          if (required.rules.pattern) {
            const re = new RegExp(required.rules.pattern);
            if (re.test(value) === false) {
              errors[name] = required.text;
            }
          }
        }
      }
    }
  });
  if (!isEqual(component.props.errors, errors)) {
    component.setProps({ errors });
  }

  if (Object.entries(errors).length > 0) {
    return false;
  }

  return true;
};

function isEqual(componentErrors: string[], newErrors: string[]) {
  if (componentErrors && newErrors) {
    if (
      Object.entries(componentErrors)?.length !==
      Object.entries(newErrors)?.length
    ) {
      return false;
    }

    for (let i = 0; i < Object.entries(componentErrors).length; i++) {
      if (componentErrors[i] !== newErrors[i]) return false;
    }
    return true;
  }
}

export default validator;
