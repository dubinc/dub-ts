/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type SalesDevices = {
    /**
     * The name of the device
     */
    device: string;
    /**
     * The number of sales from this device
     */
    sales: number;
    /**
     * The total amount of sales from this device
     */
    amount: number;
};

/** @internal */
export namespace SalesDevices$ {
    export const inboundSchema: z.ZodType<SalesDevices, z.ZodTypeDef, unknown> = z
        .object({
            device: z.string(),
            sales: z.number(),
            amount: z.number(),
        })
        .transform((v) => {
            return {
                device: v.device,
                sales: v.sales,
                amount: v.amount,
            };
        });

    export type Outbound = {
        device: string;
        sales: number;
        amount: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SalesDevices> = z
        .object({
            device: z.string(),
            sales: z.number(),
            amount: z.number(),
        })
        .transform((v) => {
            return {
                device: v.device,
                sales: v.sales,
                amount: v.amount,
            };
        });
}
