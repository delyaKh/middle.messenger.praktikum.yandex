import Block from "../../classes/Block";

export interface ButtonProps {
  className?: string;
  primary?: boolean;
  secondary?: boolean;
  link?: boolean;
  href?: string;
  events: {
    click: () => void;
  };
}

let template = "button #{child}";

export default class Button extends Block {
  constructor(props: ButtonProps) {
    if (props.link) {
      template = `a(href="${props.href}") #{child}`;
    }
    super("div", props);
  }

  render() {
    return this.compile(
      () => template,
      this.props
    )({
      child: this.props.child,
    });
  }
}
