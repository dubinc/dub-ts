/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteDomainRequest = {
    /**
     * The domain name.
     */
    slug: string;
};

/**
 * The domain was deleted.
 */
export type DeleteDomainResponseBody = {
    /**
     * The domain name.
     */
    slug: string;
};

/** @internal */
export const DeleteDomainRequest$inboundSchema: z.ZodType<
    DeleteDomainRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    slug: z.string(),
});

/** @internal */
export type DeleteDomainRequest$Outbound = {
    slug: string;
};

/** @internal */
export const DeleteDomainRequest$outboundSchema: z.ZodType<
    DeleteDomainRequest$Outbound,
    z.ZodTypeDef,
    DeleteDomainRequest
> = z.object({
    slug: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteDomainRequest$ {
    /** @deprecated use `DeleteDomainRequest$inboundSchema` instead. */
    export const inboundSchema = DeleteDomainRequest$inboundSchema;
    /** @deprecated use `DeleteDomainRequest$outboundSchema` instead. */
    export const outboundSchema = DeleteDomainRequest$outboundSchema;
    /** @deprecated use `DeleteDomainRequest$Outbound` instead. */
    export type Outbound = DeleteDomainRequest$Outbound;
}

/** @internal */
export const DeleteDomainResponseBody$inboundSchema: z.ZodType<
    DeleteDomainResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    slug: z.string(),
});

/** @internal */
export type DeleteDomainResponseBody$Outbound = {
    slug: string;
};

/** @internal */
export const DeleteDomainResponseBody$outboundSchema: z.ZodType<
    DeleteDomainResponseBody$Outbound,
    z.ZodTypeDef,
    DeleteDomainResponseBody
> = z.object({
    slug: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteDomainResponseBody$ {
    /** @deprecated use `DeleteDomainResponseBody$inboundSchema` instead. */
    export const inboundSchema = DeleteDomainResponseBody$inboundSchema;
    /** @deprecated use `DeleteDomainResponseBody$outboundSchema` instead. */
    export const outboundSchema = DeleteDomainResponseBody$outboundSchema;
    /** @deprecated use `DeleteDomainResponseBody$Outbound` instead. */
    export type Outbound = DeleteDomainResponseBody$Outbound;
}
