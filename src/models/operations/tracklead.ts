/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
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
    customerName?: string | undefined;
    /**
     * Email of the customer in the client's app.
     */
    customerEmail?: string | undefined;
    /**
     * Avatar of the customer in the client's app.
     */
    customerAvatar?: string | undefined;
    /**
     * Additional metadata to be stored with the lead event
     */
    metadata?: { [k: string]: any } | undefined;
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
export namespace TrackLeadRequestBody$ {
    export const inboundSchema: z.ZodType<TrackLeadRequestBody, z.ZodTypeDef, unknown> = z
        .object({
            clickId: z.string(),
            eventName: z.string(),
            customerId: z.string(),
            customerName: z.string().optional(),
            customerEmail: z.string().optional(),
            customerAvatar: z.string().optional(),
            metadata: z.record(z.any()).optional(),
        })
        .transform((v) => {
            return {
                clickId: v.clickId,
                eventName: v.eventName,
                customerId: v.customerId,
                ...(v.customerName === undefined ? null : { customerName: v.customerName }),
                ...(v.customerEmail === undefined ? null : { customerEmail: v.customerEmail }),
                ...(v.customerAvatar === undefined ? null : { customerAvatar: v.customerAvatar }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
            };
        });

    export type Outbound = {
        clickId: string;
        eventName: string;
        customerId: string;
        customerName?: string | undefined;
        customerEmail?: string | undefined;
        customerAvatar?: string | undefined;
        metadata?: { [k: string]: any } | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TrackLeadRequestBody> = z
        .object({
            clickId: z.string(),
            eventName: z.string(),
            customerId: z.string(),
            customerName: z.string().optional(),
            customerEmail: z.string().optional(),
            customerAvatar: z.string().optional(),
            metadata: z.record(z.any()).optional(),
        })
        .transform((v) => {
            return {
                clickId: v.clickId,
                eventName: v.eventName,
                customerId: v.customerId,
                ...(v.customerName === undefined ? null : { customerName: v.customerName }),
                ...(v.customerEmail === undefined ? null : { customerEmail: v.customerEmail }),
                ...(v.customerAvatar === undefined ? null : { customerAvatar: v.customerAvatar }),
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
            };
        });
}

/** @internal */
export namespace TrackLeadResponseBody$ {
    export const inboundSchema: z.ZodType<TrackLeadResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            clickId: z.string(),
            eventName: z.string(),
            customerId: z.string(),
            customerName: z.nullable(z.string()),
            customerEmail: z.nullable(z.string()),
            customerAvatar: z.nullable(z.string()),
            metadata: z.record(z.any()).optional(),
        })
        .transform((v) => {
            return {
                clickId: v.clickId,
                eventName: v.eventName,
                customerId: v.customerId,
                customerName: v.customerName,
                customerEmail: v.customerEmail,
                customerAvatar: v.customerAvatar,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
            };
        });

    export type Outbound = {
        clickId: string;
        eventName: string;
        customerId: string;
        customerName: string | null;
        customerEmail: string | null;
        customerAvatar: string | null;
        metadata?: { [k: string]: any } | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TrackLeadResponseBody> = z
        .object({
            clickId: z.string(),
            eventName: z.string(),
            customerId: z.string(),
            customerName: z.nullable(z.string()),
            customerEmail: z.nullable(z.string()),
            customerAvatar: z.nullable(z.string()),
            metadata: z.record(z.any()).optional(),
        })
        .transform((v) => {
            return {
                clickId: v.clickId,
                eventName: v.eventName,
                customerId: v.customerId,
                customerName: v.customerName,
                customerEmail: v.customerEmail,
                customerAvatar: v.customerAvatar,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
            };
        });
}
