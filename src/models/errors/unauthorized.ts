/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * A short code indicating the error code returned.
 */
export const UnauthorizedCode = {
    Unauthorized: "unauthorized",
} as const;
/**
 * A short code indicating the error code returned.
 */
export type UnauthorizedCode = ClosedEnum<typeof UnauthorizedCode>;

export type UnauthorizedError = {
    /**
     * A short code indicating the error code returned.
     */
    code: UnauthorizedCode;
    /**
     * A human readable explanation of what went wrong.
     */
    message: string;
    /**
     * A link to our documentation with more details about this error code
     */
    docUrl?: string | undefined;
};

/**
 * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
 */
export type UnauthorizedData = {
    error: UnauthorizedError;
};

/**
 * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
 */
export class Unauthorized extends Error {
    error: UnauthorizedError;

    /** The original data that was passed to this error instance. */
    data$: UnauthorizedData;

    constructor(err: UnauthorizedData) {
        const message = err.error?.message || "API error occurred";
        super(message);
        this.data$ = err;

        this.error = err.error;

        this.name = "Unauthorized";
    }
}

/** @internal */
export const UnauthorizedCode$inboundSchema: z.ZodNativeEnum<typeof UnauthorizedCode> =
    z.nativeEnum(UnauthorizedCode);

/** @internal */
export const UnauthorizedCode$outboundSchema: z.ZodNativeEnum<typeof UnauthorizedCode> =
    UnauthorizedCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedCode$ {
    /** @deprecated use `UnauthorizedCode$inboundSchema` instead. */
    export const inboundSchema = UnauthorizedCode$inboundSchema;
    /** @deprecated use `UnauthorizedCode$outboundSchema` instead. */
    export const outboundSchema = UnauthorizedCode$outboundSchema;
}

/** @internal */
export const UnauthorizedError$inboundSchema: z.ZodType<UnauthorizedError, z.ZodTypeDef, unknown> =
    z
        .object({
            code: UnauthorizedCode$inboundSchema,
            message: z.string(),
            doc_url: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                doc_url: "docUrl",
            });
        });

/** @internal */
export type UnauthorizedError$Outbound = {
    code: string;
    message: string;
    doc_url?: string | undefined;
};

/** @internal */
export const UnauthorizedError$outboundSchema: z.ZodType<
    UnauthorizedError$Outbound,
    z.ZodTypeDef,
    UnauthorizedError
> = z
    .object({
        code: UnauthorizedCode$outboundSchema,
        message: z.string(),
        docUrl: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            docUrl: "doc_url",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnauthorizedError$ {
    /** @deprecated use `UnauthorizedError$inboundSchema` instead. */
    export const inboundSchema = UnauthorizedError$inboundSchema;
    /** @deprecated use `UnauthorizedError$outboundSchema` instead. */
    export const outboundSchema = UnauthorizedError$outboundSchema;
    /** @deprecated use `UnauthorizedError$Outbound` instead. */
    export type Outbound = UnauthorizedError$Outbound;
}

/** @internal */
export const Unauthorized$inboundSchema: z.ZodType<Unauthorized, z.ZodTypeDef, unknown> = z
    .object({
        error: z.lazy(() => UnauthorizedError$inboundSchema),
    })
    .transform((v) => {
        return new Unauthorized(v);
    });

/** @internal */
export type Unauthorized$Outbound = {
    error: UnauthorizedError$Outbound;
};

/** @internal */
export const Unauthorized$outboundSchema: z.ZodType<
    Unauthorized$Outbound,
    z.ZodTypeDef,
    Unauthorized
> = z
    .instanceof(Unauthorized)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            error: z.lazy(() => UnauthorizedError$outboundSchema),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Unauthorized$ {
    /** @deprecated use `Unauthorized$inboundSchema` instead. */
    export const inboundSchema = Unauthorized$inboundSchema;
    /** @deprecated use `Unauthorized$outboundSchema` instead. */
    export const outboundSchema = Unauthorized$outboundSchema;
    /** @deprecated use `Unauthorized$Outbound` instead. */
    export type Outbound = Unauthorized$Outbound;
}
