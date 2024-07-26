/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as components from "../models/components/index.js";

export enum SecurityErrorCode {
    Incomplete = "incomplete",
    UnrecognisedSecurityType = "unrecognized_security_type",
}

export class SecurityError extends Error {
    constructor(public code: SecurityErrorCode, message: string) {
        super(message);
        this.name = "SecurityError";
    }

    static incomplete(): SecurityError {
        return new SecurityError(
            SecurityErrorCode.Incomplete,
            "Security requirements not met in order to perform the operation"
        );
    }
    static unrecognizedType(type: string): SecurityError {
        return new SecurityError(
            SecurityErrorCode.UnrecognisedSecurityType,
            `Unrecognised security type: ${type}`
        );
    }
}

export type SecurityState = {
    basic: { username?: string | undefined; password?: string | undefined };
    headers: Record<string, string>;
    queryParams: Record<string, string>;
    cookies: Record<string, string>;
};

type SecurityInputBasic = {
    type: "http:basic";
    value: { username?: string | undefined; password?: string | undefined } | null | undefined;
};

type SecurityInputBearer = {
    type: "http:bearer";
    value: string | null | undefined;
    fieldName: string;
};

type SecurityInputAPIKey = {
    type: "apiKey:header" | "apiKey:query" | "apiKey:cookie";
    value: string | null | undefined;
    fieldName: string;
};

type SecurityInputOIDC = {
    type: "openIdConnect";
    value: string | null | undefined;
    fieldName: string;
};

type SecurityInputOAuth2 = {
    type: "oauth2";
    value: string | null | undefined;
    fieldName: string;
};

type SecurityInputOAuth2ClientCredentials = {
    type: "oauth2:client_credentials";
    value: string | null | undefined;
    fieldName: string;
};

export type SecurityInput =
    | SecurityInputBasic
    | SecurityInputBearer
    | SecurityInputAPIKey
    | SecurityInputOAuth2
    | SecurityInputOAuth2ClientCredentials
    | SecurityInputOIDC;

export function resolveSecurity(...options: SecurityInput[][]): SecurityState | null {
    const state: SecurityState = {
        basic: { username: "", password: "" },
        headers: {},
        queryParams: {},
        cookies: {},
    };

    const option = options.find((opts) => {
        return opts.every((o) => {
            if (o.value == null) {
                return false;
            } else if (o.type === "http:basic") {
                return o.value.username != null || o.value.password != null;
            } else if (typeof o.value === "string") {
                return !!o.value;
            } else {
                throw new Error(
                    `Unrecognized security type: ${o.type} (value type: ${typeof o.value})`
                );
            }
        });
    });
    if (option == null) {
        return null;
    }

    option.forEach((spec) => {
        if (spec.value == null) {
            return;
        }

        const { type } = spec;

        switch (type) {
            case "apiKey:header":
                state.headers[spec.fieldName] = spec.value;
                break;
            case "apiKey:query":
                state.queryParams[spec.fieldName] = spec.value;
                break;
            case "apiKey:cookie":
                state.cookies[spec.fieldName] = spec.value;
                break;
            case "http:basic":
                applyBasic(state, spec);
                break;
            case "http:bearer":
                applyBearer(state, spec);
                break;
            case "oauth2":
                applyBearer(state, spec);
                break;
            case "oauth2:client_credentials":
                break;
            case "openIdConnect":
                applyBearer(state, spec);
                break;
            default:
                spec satisfies never;
                throw SecurityError.unrecognizedType(type);
        }
    });

    return state;
}

function applyBasic(state: SecurityState, spec: SecurityInputBasic) {
    if (spec.value == null) {
        return;
    }

    state.basic = spec.value;
}

function applyBearer(
    state: SecurityState,
    spec: SecurityInputBearer | SecurityInputOAuth2 | SecurityInputOIDC
) {
    if (spec.value == null) {
        return;
    }

    let value = spec.value;
    if (value.slice(0, 7).toLowerCase() !== "bearer ") {
        value = `Bearer ${value}`;
    }

    state.headers[spec.fieldName] = value;
}
export function resolveGlobalSecurity(
    security: Partial<components.Security> | null | undefined
): SecurityState | null {
    return resolveSecurity([
        {
            fieldName: "Authorization",
            type: "http:bearer",
            value: security?.token,
        },
    ]);
}
