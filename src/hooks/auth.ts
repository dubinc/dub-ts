import { BeforeRequestHook } from "./types.js";

export const injectAPIKey: BeforeRequestHook = {
  beforeRequest: async (_, request) => {
    const authz = request.headers.get("Authorization");
    if (authz) {
      return request;
    }

    let token = "";
    if (typeof process !== "undefined") {
      token = process.env["DUB_API_KEY"] ?? "";
    }

    if (!token) {
      throw new Error(
        "The DUB_API_KEY environment variable is missing or empty; either provide it, or instantiate the Dub client with an token option, like new Dub({ token: 'My Token' }).",
      );
    }

    request.headers.set("Authorization", `Bearer ${token}`);

    return request;
  },
};
