import { BeforeRequestHook } from "./types.js";

export const overrideBaseURL: BeforeRequestHook = {
  beforeRequest: async (_, request) => {
    let baseURL = "";
    if (typeof process !== "undefined") {
      baseURL = process.env["DUB_BASE_URL"] ?? "";
    }
    if (!baseURL) {
      return request;
    }

    const clone = new URL(request.url);
    const base = new URL(baseURL);

    clone.protocol = base.protocol;
    clone.host = base.host;
    clone.port = base.port;
    clone.username = base.username;
    clone.password = base.password;

    return new Request(clone.toString(), request);
  },
};
