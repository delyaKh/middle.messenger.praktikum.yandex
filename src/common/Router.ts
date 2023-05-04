import Block from "../classes/Block";
import isEqual from "../helpers/helpers";

class Route {
  private _block: Block | null = null;
  private _blockClass: typeof Block;
  private _pathname: string;
  private _query: string;

  constructor(pathname: string, blockClass: typeof Block, query: string) {
    this._pathname = pathname;
    this._blockClass = blockClass;
    this._block = null;
    this._query = query;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    this._block = null;
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass("", {});
      this._render(this._query, this._block);
      return;
    }

    this._block.show();
  }

  private _render(query: string, block: Block) {
    const root = document.querySelector(query);

    if (root === null) {
      throw new Error(`root not found by selector "${query}"`);
    }

    root.innerHTML = "";

    root.append(block.getContent()!);
    block.dispatchComponentDidMount();

    return root;
  }
}

export class Router {
  private static __instance: Router;
  private _routes: Route[] = [];
  private _currentRoute: Route | null = null;
  private _history = window.history;
  private _rootQuery = "#app";

  constructor() {
    if (Router.__instance) {
      return Router.__instance;
    }

    this._routes = [];
    this._history = window.history;
    this._currentRoute = null;

    Router.__instance = this;
  }

  use(pathname: string, block: typeof Block) {
    const route = new Route(pathname, block, this._rootQuery);
    this._routes.push(route);

    return this;
  }

  start() {
    window.onpopstate = (event: PopStateEvent) => {
      this._onRoute((<Window>event.currentTarget).location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }
    this._currentRoute = route;
    route.render();
  }

  go(pathname: string) {
    this._history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  back() {
    this._history.back();
  }

  forward() {
    this._history.forward();
  }

  getRoute(pathname: string) {
    return this._routes.find((route) => route.match(pathname));
  }
}

export const router = new Router();
