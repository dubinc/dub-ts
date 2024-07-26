/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as z from "zod";

export type TrackLeadRequestBody = {
    /**
     * The ID of the click in th Dub. You can read this value from `dclid` cookie.
     */
    clickId: string;
    /**
     * The name of the event to track.
     */
    eventName: string;
    /**
     * This is the unique identifier for the customer in the client's app. This is used to track the customer's journey.
     */
    customerId: string;
    /**
     * Name of the customer in the client's app.
     */
    customerName?: string | null | undefined;
    /**
     * Email of the customer in the client's app.
     */
    customerEmail?: string | null | undefined;
    /**
     * Avatar of the customer in the client's app.
     */
    customerAvatar?: string | null | undefined;
    /**
     * Additional metadata to be stored with the lead event
     */
    metadata?: { [k: string]: any } | null | undefined;
};

/**
 * A lead was tracked.
 */
export type TrackLeadResponseBody = {
    clickId: string;
    eventName: string;
    customerId: string;
    customerName: string | null;
    customerEmail: string | null;
    customerAvatar: string | null;
    metadata?: { [k: string]: any } | undefined;
};

/** @internal */
export const TrackLeadRequestBody$inboundSchema: z.ZodType<
    TrackLeadRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    clickId: z.string(),
    eventName: z.string(),
    customerId: z.string(),
    customerName: z.nullable(z.string()).optional(),
    customerEmail: z.nullable(z.string()).optional(),
    customerAvatar: z.nullable(z.string()).optional(),
    metadata: z.nullable(z.record(z.any())).optional(),
});

/** @internal */
export type TrackLeadRequestBody$Outbound = {
    clickId: string;
    eventName: string;
    customerId: string;
    customerName?: string | null | undefined;
    customerEmail?: string | null | undefined;
    customerAvatar?: string | null | undefined;
    metadata?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const TrackLeadRequestBody$outboundSchema: z.ZodType<
    TrackLeadRequestBody$Outbound,
    z.ZodTypeDef,
    TrackLeadRequestBody
> = z.object({
    clickId: z.string(),
    eventName: z.string(),
    customerId: z.string(),
    customerName: z.nullable(z.string()).optional(),
    customerEmail: z.nullable(z.string()).optional(),
    customerAvatar: z.nullable(z.string()).optional(),
    metadata: z.nullable(z.record(z.any())).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrackLeadRequestBody$ {
    /** @deprecated use `TrackLeadRequestBody$inboundSchema` instead. */
    export const inboundSchema = TrackLeadRequestBody$inboundSchema;
    /** @deprecated use `TrackLeadRequestBody$outboundSchema` instead. */
    export const outboundSchema = TrackLeadRequestBody$outboundSchema;
    /** @deprecated use `TrackLeadRequestBody$Outbound` instead. */
    export type Outbound = TrackLeadRequestBody$Outbound;
}

/** @internal */
export const TrackLeadResponseBody$inboundSchema: z.ZodType<
    TrackLeadResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    clickId: z.string(),
    eventName: z.string(),
    customerId: z.string(),
    customerName: z.nullable(z.string()),
    customerEmail: z.nullable(z.string()),
    customerAvatar: z.nullable(z.string()),
    metadata: z.record(z.any()).optional(),
});

/** @internal */
export type TrackLeadResponseBody$Outbound = {
    clickId: string;
    eventName: string;
    customerId: string;
    customerName: string | null;
    customerEmail: string | null;
    customerAvatar: string | null;
    metadata?: { [k: string]: any } | undefined;
};

/** @internal */
export const TrackLeadResponseBody$outboundSchema: z.ZodType<
    TrackLeadResponseBody$Outbound,
    z.ZodTypeDef,
    TrackLeadResponseBody
> = z.object({
    clickId: z.string(),
    eventName: z.string(),
    customerId: z.string(),
    customerName: z.nullable(z.string()),
    customerEmail: z.nullable(z.string()),
    customerAvatar: z.nullable(z.string()),
    metadata: z.record(z.any()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrackLeadResponseBody$ {
    /** @deprecated use `TrackLeadResponseBody$inboundSchema` instead. */
    export const inboundSchema = TrackLeadResponseBody$inboundSchema;
    /** @deprecated use `TrackLeadResponseBody$outboundSchema` instead. */
    export const outboundSchema = TrackLeadResponseBody$outboundSchema;
    /** @deprecated use `TrackLeadResponseBody$Outbound` instead. */
    export type Outbound = TrackLeadResponseBody$Outbound;
}
