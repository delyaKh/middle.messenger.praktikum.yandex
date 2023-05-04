import HTTPTransport from "../classes/HTTPTransport";

export abstract class BaseAPI {
  protected http: HTTPTransport;

  protected constructor(path: string) {
    this.http = new HTTPTransport(path);
  }

  public abstract create?(data: unknown): Promise<unknown>;

  public abstract read?(identifier?: string | number): Promise<unknown>;

  public abstract update?(data: unknown): Promise<unknown>;

  public abstract delete?(identifier: string | number): Promise<unknown>;
}
