/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ClicksTopUrls = {
    /**
     * The destination URL
     */
    url: string;
    /**
     * The number of clicks from this URL
     */
    clicks: number;
};

/** @internal */
export const ClicksTopUrls$inboundSchema: z.ZodType<ClicksTopUrls, z.ZodTypeDef, unknown> =
    z.object({
        url: z.string(),
        clicks: z.number(),
    });

/** @internal */
export type ClicksTopUrls$Outbound = {
    url: string;
    clicks: number;
};

/** @internal */
export const ClicksTopUrls$outboundSchema: z.ZodType<
    ClicksTopUrls$Outbound,
    z.ZodTypeDef,
    ClicksTopUrls
> = z.object({
    url: z.string(),
    clicks: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClicksTopUrls$ {
    /** @deprecated use `ClicksTopUrls$inboundSchema` instead. */
    export const inboundSchema = ClicksTopUrls$inboundSchema;
    /** @deprecated use `ClicksTopUrls$outboundSchema` instead. */
    export const outboundSchema = ClicksTopUrls$outboundSchema;
    /** @deprecated use `ClicksTopUrls$Outbound` instead. */
    export type Outbound = ClicksTopUrls$Outbound;
}
