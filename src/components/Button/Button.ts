import Block from "../../classes/Block";

interface ButtonProps {
  className: string;
  type?: string;
  icon?: string;
  light?: boolean;
  color?: string;
  label?: string;
  title?: string;
  child: string;
  onClick?: () => void;
}

const className = "";
const template = "button #{className}";

export default class Button extends Block {
  constructor(props: ButtonProps) {
    super("button", {
      className: className,
      type: props.type ?? "button",
      icon: props.icon ?? "",
      light: props.light ?? false,
      color: props.color ?? "",
      label: props.label ?? "",
      title: props.title ?? "",
      child: props.child,
      events: {
        click: props.onClick,
      },
    });
  }

  protected render(): any {
    super.render();
    const result = this.compile(template, this.props);
    return result;
  }
}
