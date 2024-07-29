/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type TrackCustomerRequestBody = {
    /**
     * This is the unique identifier for the customer in the client's app. This is used to track the customer's journey.
     */
    customerId: string;
    /**
     * Name of the customer in the client's app.
     */
    customerName?: string | undefined;
    /**
     * Email of the customer in the client's app.
     */
    customerEmail?: string | undefined;
    /**
     * Avatar of the customer in the client's app.
     */
    customerAvatar?: string | undefined;
};

/**
 * A customer was tracked.
 */
export type TrackCustomerResponseBody = {
    customerId: string;
    customerName: string | null;
    customerEmail: string | null;
    customerAvatar: string | null;
};

/** @internal */
export const TrackCustomerRequestBody$inboundSchema: z.ZodType<
    TrackCustomerRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    customerId: z.string(),
    customerName: z.string().optional(),
    customerEmail: z.string().optional(),
    customerAvatar: z.string().optional(),
});

/** @internal */
export type TrackCustomerRequestBody$Outbound = {
    customerId: string;
    customerName?: string | undefined;
    customerEmail?: string | undefined;
    customerAvatar?: string | undefined;
};

/** @internal */
export const TrackCustomerRequestBody$outboundSchema: z.ZodType<
    TrackCustomerRequestBody$Outbound,
    z.ZodTypeDef,
    TrackCustomerRequestBody
> = z.object({
    customerId: z.string(),
    customerName: z.string().optional(),
    customerEmail: z.string().optional(),
    customerAvatar: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrackCustomerRequestBody$ {
    /** @deprecated use `TrackCustomerRequestBody$inboundSchema` instead. */
    export const inboundSchema = TrackCustomerRequestBody$inboundSchema;
    /** @deprecated use `TrackCustomerRequestBody$outboundSchema` instead. */
    export const outboundSchema = TrackCustomerRequestBody$outboundSchema;
    /** @deprecated use `TrackCustomerRequestBody$Outbound` instead. */
    export type Outbound = TrackCustomerRequestBody$Outbound;
}

/** @internal */
export const TrackCustomerResponseBody$inboundSchema: z.ZodType<
    TrackCustomerResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    customerId: z.string(),
    customerName: z.nullable(z.string()),
    customerEmail: z.nullable(z.string()),
    customerAvatar: z.nullable(z.string()),
});

/** @internal */
export type TrackCustomerResponseBody$Outbound = {
    customerId: string;
    customerName: string | null;
    customerEmail: string | null;
    customerAvatar: string | null;
};

/** @internal */
export const TrackCustomerResponseBody$outboundSchema: z.ZodType<
    TrackCustomerResponseBody$Outbound,
    z.ZodTypeDef,
    TrackCustomerResponseBody
> = z.object({
    customerId: z.string(),
    customerName: z.nullable(z.string()),
    customerEmail: z.nullable(z.string()),
    customerAvatar: z.nullable(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrackCustomerResponseBody$ {
    /** @deprecated use `TrackCustomerResponseBody$inboundSchema` instead. */
    export const inboundSchema = TrackCustomerResponseBody$inboundSchema;
    /** @deprecated use `TrackCustomerResponseBody$outboundSchema` instead. */
    export const outboundSchema = TrackCustomerResponseBody$outboundSchema;
    /** @deprecated use `TrackCustomerResponseBody$Outbound` instead. */
    export type Outbound = TrackCustomerResponseBody$Outbound;
}
