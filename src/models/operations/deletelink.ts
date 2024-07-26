/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteLinkRequest = {
    /**
     * The id of the link to delete. You may use either `linkId` (obtained via `/links/info` endpoint) or `externalId` prefixed with `ext_`.
     */
    linkId: string;
};

/**
 * The deleted link
 */
export type DeleteLinkResponseBody = {
    /**
     * The ID of the link.
     */
    id: string;
};

/** @internal */
export const DeleteLinkRequest$inboundSchema: z.ZodType<DeleteLinkRequest, z.ZodTypeDef, unknown> =
    z.object({
        linkId: z.string(),
    });

/** @internal */
export type DeleteLinkRequest$Outbound = {
    linkId: string;
};

/** @internal */
export const DeleteLinkRequest$outboundSchema: z.ZodType<
    DeleteLinkRequest$Outbound,
    z.ZodTypeDef,
    DeleteLinkRequest
> = z.object({
    linkId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteLinkRequest$ {
    /** @deprecated use `DeleteLinkRequest$inboundSchema` instead. */
    export const inboundSchema = DeleteLinkRequest$inboundSchema;
    /** @deprecated use `DeleteLinkRequest$outboundSchema` instead. */
    export const outboundSchema = DeleteLinkRequest$outboundSchema;
    /** @deprecated use `DeleteLinkRequest$Outbound` instead. */
    export type Outbound = DeleteLinkRequest$Outbound;
}

/** @internal */
export const DeleteLinkResponseBody$inboundSchema: z.ZodType<
    DeleteLinkResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
});

/** @internal */
export type DeleteLinkResponseBody$Outbound = {
    id: string;
};

/** @internal */
export const DeleteLinkResponseBody$outboundSchema: z.ZodType<
    DeleteLinkResponseBody$Outbound,
    z.ZodTypeDef,
    DeleteLinkResponseBody
> = z.object({
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteLinkResponseBody$ {
    /** @deprecated use `DeleteLinkResponseBody$inboundSchema` instead. */
    export const inboundSchema = DeleteLinkResponseBody$inboundSchema;
    /** @deprecated use `DeleteLinkResponseBody$outboundSchema` instead. */
    export const outboundSchema = DeleteLinkResponseBody$outboundSchema;
    /** @deprecated use `DeleteLinkResponseBody$Outbound` instead. */
    export type Outbound = DeleteLinkResponseBody$Outbound;
}
