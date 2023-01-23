import Block from "../classes/Block";

export function renderDOM(query: string, block: Block) {
  const root = document.querySelector(query);
  root?.appendChild(block.getContent());

  block.dispatchComponentDidMount();

  return root;
}
