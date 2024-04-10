import { BeforeRequestHook } from "./types";

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
            throw new Error("API key is required");
        }

        request.headers.set("Authorization", `Bearer ${token}`);

        return request;
    },
};
