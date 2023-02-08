const parser = new DOMParser();

export function getTemplateFromString(
  html: string
): HTMLTemplateElement | null {
  const document = parser.parseFromString(html, "text/html");
  const result = document.querySelector("template");
  return result;
}
