import Home from "./pages/home/home";

document.addEventListener("DOMContentLoaded", () => {
  const homePage = new Home({});
  const root = document.querySelector("#app");

  if (!root) {
    throw new Error("Root not found");
  }

  homePage.dispatchComponentDidMount();
  root.innerHTML = "";
  root.append(homePage.getContent());
});
