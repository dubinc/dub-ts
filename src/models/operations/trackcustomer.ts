/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
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
    customerName?: string | null | undefined;
    /**
     * Email of the customer in the client's app.
     */
    customerEmail?: string | null | undefined;
    /**
     * Avatar of the customer in the client's app.
     */
    customerAvatar?: string | null | undefined;
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
export namespace TrackCustomerRequestBody$ {
    export const inboundSchema: z.ZodType<TrackCustomerRequestBody, z.ZodTypeDef, unknown> = z
        .object({
            customerId: z.string(),
            customerName: z.nullable(z.string()).default(null),
            customerEmail: z.nullable(z.string()).default(null),
            customerAvatar: z.nullable(z.string()).default(null),
        })
        .transform((v) => {
            return {
                customerId: v.customerId,
                customerName: v.customerName,
                customerEmail: v.customerEmail,
                customerAvatar: v.customerAvatar,
            };
        });

    export type Outbound = {
        customerId: string;
        customerName: string | null;
        customerEmail: string | null;
        customerAvatar: string | null;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TrackCustomerRequestBody> = z
        .object({
            customerId: z.string(),
            customerName: z.nullable(z.string()).default(null),
            customerEmail: z.nullable(z.string()).default(null),
            customerAvatar: z.nullable(z.string()).default(null),
        })
        .transform((v) => {
            return {
                customerId: v.customerId,
                customerName: v.customerName,
                customerEmail: v.customerEmail,
                customerAvatar: v.customerAvatar,
            };
        });
}

/** @internal */
export namespace TrackCustomerResponseBody$ {
    export const inboundSchema: z.ZodType<TrackCustomerResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            customerId: z.string(),
            customerName: z.nullable(z.string()),
            customerEmail: z.nullable(z.string()),
            customerAvatar: z.nullable(z.string()),
        })
        .transform((v) => {
            return {
                customerId: v.customerId,
                customerName: v.customerName,
                customerEmail: v.customerEmail,
                customerAvatar: v.customerAvatar,
            };
        });

    export type Outbound = {
        customerId: string;
        customerName: string | null;
        customerEmail: string | null;
        customerAvatar: string | null;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TrackCustomerResponseBody> = z
        .object({
            customerId: z.string(),
            customerName: z.nullable(z.string()),
            customerEmail: z.nullable(z.string()),
            customerAvatar: z.nullable(z.string()),
        })
        .transform((v) => {
            return {
                customerId: v.customerId,
                customerName: v.customerName,
                customerEmail: v.customerEmail,
                customerAvatar: v.customerAvatar,
            };
        });
}
