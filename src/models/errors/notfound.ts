/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * A short code indicating the error code returned.
 */
export const NotFoundCode = {
    NotFound: "not_found",
} as const;
/**
 * A short code indicating the error code returned.
 */
export type NotFoundCode = ClosedEnum<typeof NotFoundCode>;

export type NotFoundError = {
    /**
     * A short code indicating the error code returned.
     */
    code: NotFoundCode;
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
 * The server cannot find the requested resource.
 */
export type NotFoundData = {
    error: NotFoundError;
};

/**
 * The server cannot find the requested resource.
 */
export class NotFound extends Error {
    error: NotFoundError;

    /** The original data that was passed to this error instance. */
    data$: NotFoundData;

    constructor(err: NotFoundData) {
        const message = err.error?.message || "API error occurred";
        super(message);
        this.data$ = err;

        this.error = err.error;

        this.name = "NotFound";
    }
}

/** @internal */
export const NotFoundCode$inboundSchema: z.ZodNativeEnum<typeof NotFoundCode> =
    z.nativeEnum(NotFoundCode);

/** @internal */
export const NotFoundCode$outboundSchema: z.ZodNativeEnum<typeof NotFoundCode> =
    NotFoundCode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotFoundCode$ {
    /** @deprecated use `NotFoundCode$inboundSchema` instead. */
    export const inboundSchema = NotFoundCode$inboundSchema;
    /** @deprecated use `NotFoundCode$outboundSchema` instead. */
    export const outboundSchema = NotFoundCode$outboundSchema;
}

/** @internal */
export const NotFoundError$inboundSchema: z.ZodType<NotFoundError, z.ZodTypeDef, unknown> = z
    .object({
        code: NotFoundCode$inboundSchema,
        message: z.string(),
        doc_url: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            doc_url: "docUrl",
        });
    });

/** @internal */
export type NotFoundError$Outbound = {
    code: string;
    message: string;
    doc_url?: string | undefined;
};

/** @internal */
export const NotFoundError$outboundSchema: z.ZodType<
    NotFoundError$Outbound,
    z.ZodTypeDef,
    NotFoundError
> = z
    .object({
        code: NotFoundCode$outboundSchema,
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
export namespace NotFoundError$ {
    /** @deprecated use `NotFoundError$inboundSchema` instead. */
    export const inboundSchema = NotFoundError$inboundSchema;
    /** @deprecated use `NotFoundError$outboundSchema` instead. */
    export const outboundSchema = NotFoundError$outboundSchema;
    /** @deprecated use `NotFoundError$Outbound` instead. */
    export type Outbound = NotFoundError$Outbound;
}

/** @internal */
export const NotFound$inboundSchema: z.ZodType<NotFound, z.ZodTypeDef, unknown> = z
    .object({
        error: z.lazy(() => NotFoundError$inboundSchema),
    })
    .transform((v) => {
        return new NotFound(v);
    });

/** @internal */
export type NotFound$Outbound = {
    error: NotFoundError$Outbound;
};

/** @internal */
export const NotFound$outboundSchema: z.ZodType<NotFound$Outbound, z.ZodTypeDef, NotFound> = z
    .instanceof(NotFound)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            error: z.lazy(() => NotFoundError$outboundSchema),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NotFound$ {
    /** @deprecated use `NotFound$inboundSchema` instead. */
    export const inboundSchema = NotFound$inboundSchema;
    /** @deprecated use `NotFound$outboundSchema` instead. */
    export const outboundSchema = NotFound$outboundSchema;
    /** @deprecated use `NotFound$Outbound` instead. */
    export type Outbound = NotFound$Outbound;
}
