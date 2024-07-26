/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as z from "zod";

export type GetLinkInfoRequest = {
    domain?: string | undefined;
    /**
     * The key of the link to retrieve. E.g. for `d.to/github`, the key is `github`.
     */
    key?: string | undefined;
    /**
     * The unique ID of the short link.
     */
    linkId?: string | undefined;
    /**
     * This is the ID of the link in the your database. Must be prefixed with `ext_` when passed as a query parameter.
     */
    externalId?: string | undefined;
};

/** @internal */
export const GetLinkInfoRequest$inboundSchema: z.ZodType<
    GetLinkInfoRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    domain: z.string().optional(),
    key: z.string().optional(),
    linkId: z.string().optional(),
    externalId: z.string().optional(),
});

/** @internal */
export type GetLinkInfoRequest$Outbound = {
    domain?: string | undefined;
    key?: string | undefined;
    linkId?: string | undefined;
    externalId?: string | undefined;
};

/** @internal */
export const GetLinkInfoRequest$outboundSchema: z.ZodType<
    GetLinkInfoRequest$Outbound,
    z.ZodTypeDef,
    GetLinkInfoRequest
> = z.object({
    domain: z.string().optional(),
    key: z.string().optional(),
    linkId: z.string().optional(),
    externalId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLinkInfoRequest$ {
    /** @deprecated use `GetLinkInfoRequest$inboundSchema` instead. */
    export const inboundSchema = GetLinkInfoRequest$inboundSchema;
    /** @deprecated use `GetLinkInfoRequest$outboundSchema` instead. */
    export const outboundSchema = GetLinkInfoRequest$outboundSchema;
    /** @deprecated use `GetLinkInfoRequest$Outbound` instead. */
    export type Outbound = GetLinkInfoRequest$Outbound;
}
