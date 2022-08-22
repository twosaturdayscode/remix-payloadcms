import type { Payload } from "payload";

declare module "@remix-run/node" {
  interface AppLoadContext {
    payload: Payload;
    test: string
  }
}

export {};