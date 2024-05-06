/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
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
export namespace GetLinkInfoRequest$ {
    export type Inbound = {
        domain?: string | undefined;
        key?: string | undefined;
        linkId?: string | undefined;
        externalId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetLinkInfoRequest, z.ZodTypeDef, Inbound> = z
        .object({
            domain: z.string().optional(),
            key: z.string().optional(),
            linkId: z.string().optional(),
            externalId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.domain === undefined ? null : { domain: v.domain }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.linkId === undefined ? null : { linkId: v.linkId }),
                ...(v.externalId === undefined ? null : { externalId: v.externalId }),
            };
        });

    export type Outbound = {
        domain?: string | undefined;
        key?: string | undefined;
        linkId?: string | undefined;
        externalId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLinkInfoRequest> = z
        .object({
            domain: z.string().optional(),
            key: z.string().optional(),
            linkId: z.string().optional(),
            externalId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.domain === undefined ? null : { domain: v.domain }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.linkId === undefined ? null : { linkId: v.linkId }),
                ...(v.externalId === undefined ? null : { externalId: v.externalId }),
            };
        });
}
