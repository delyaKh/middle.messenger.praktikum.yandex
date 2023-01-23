import Block from "../classes/Block";

interface ButtonProps {
  className: string;
  child: string;
}

export default class Button extends Block {
  constructor(props: ButtonProps) {
    super("button", props);
  }

  protected render(): string | void {
    super.render();
    // return compile(template, this.props);
  }
}
