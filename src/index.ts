import Home from "./pages/home/home.component";

document.addEventListener("DOMContentLoaded", () => {
  const homePage = new Home("div", {});
  const root = document.querySelector("#app");

  if (!root) {
    throw new Error("Root not found");
  }

  homePage.dispatchComponentDidMount();
  root.innerHTML = "";
  root.append(homePage.getContent());
});
