/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * A short code indicating the error code returned.
 */
export const ForbiddenCode = {
    Forbidden: "forbidden",
} as const;
/**
 * A short code indicating the error code returned.
 */
export type ForbiddenCode = ClosedEnum<typeof ForbiddenCode>;

export type ForbiddenError = {
    /**
     * A short code indicating the error code returned.
     */
    code: ForbiddenCode;
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
 * The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server.
 */
export type ForbiddenData = {
    error: ForbiddenError;
};

/**
 * The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server.
 */
export class Forbidden extends Error {
    error: ForbiddenError;

    /** The original data that was passed to this error instance. */
    data$: ForbiddenData;

    constructor(err: ForbiddenData) {
        const message = err.error?.message || "API error occurred";
        super(message);
        this.data$ = err;

        this.error = err.error;

        this.name = "Forbidden";
    }
}

/** @internal */
export const ForbiddenCode$inboundSchema: z.ZodNativeEnum<typeof ForbiddenCode> =
    z.nativeEnum(ForbiddenCode);

/** @internal */
export const ForbiddenCode$outboundSchema: z.ZodNativeEnum<typeof ForbiddenCode> =
    ForbiddenCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ForbiddenCode$ {
    /** @deprecated use `ForbiddenCode$inboundSchema` instead. */
    export const inboundSchema = ForbiddenCode$inboundSchema;
    /** @deprecated use `ForbiddenCode$outboundSchema` instead. */
    export const outboundSchema = ForbiddenCode$outboundSchema;
}

/** @internal */
export const ForbiddenError$inboundSchema: z.ZodType<ForbiddenError, z.ZodTypeDef, unknown> = z
    .object({
        code: ForbiddenCode$inboundSchema,
        message: z.string(),
        doc_url: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            doc_url: "docUrl",
        });
    });

/** @internal */
export type ForbiddenError$Outbound = {
    code: string;
    message: string;
    doc_url?: string | undefined;
};

/** @internal */
export const ForbiddenError$outboundSchema: z.ZodType<
    ForbiddenError$Outbound,
    z.ZodTypeDef,
    ForbiddenError
> = z
    .object({
        code: ForbiddenCode$outboundSchema,
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
export namespace ForbiddenError$ {
    /** @deprecated use `ForbiddenError$inboundSchema` instead. */
    export const inboundSchema = ForbiddenError$inboundSchema;
    /** @deprecated use `ForbiddenError$outboundSchema` instead. */
    export const outboundSchema = ForbiddenError$outboundSchema;
    /** @deprecated use `ForbiddenError$Outbound` instead. */
    export type Outbound = ForbiddenError$Outbound;
}

/** @internal */
export const Forbidden$inboundSchema: z.ZodType<Forbidden, z.ZodTypeDef, unknown> = z
    .object({
        error: z.lazy(() => ForbiddenError$inboundSchema),
    })
    .transform((v) => {
        return new Forbidden(v);
    });

/** @internal */
export type Forbidden$Outbound = {
    error: ForbiddenError$Outbound;
};

/** @internal */
export const Forbidden$outboundSchema: z.ZodType<Forbidden$Outbound, z.ZodTypeDef, Forbidden> = z
    .instanceof(Forbidden)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            error: z.lazy(() => ForbiddenError$outboundSchema),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Forbidden$ {
    /** @deprecated use `Forbidden$inboundSchema` instead. */
    export const inboundSchema = Forbidden$inboundSchema;
    /** @deprecated use `Forbidden$outboundSchema` instead. */
    export const outboundSchema = Forbidden$outboundSchema;
    /** @deprecated use `Forbidden$Outbound` instead. */
    export type Outbound = Forbidden$Outbound;
}
