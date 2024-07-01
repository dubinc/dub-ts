/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type LeadsOS = {
    /**
     * The name of the OS
     */
    os: string;
    /**
     * The number of leads from this OS
     */
    leads: number;
};

/** @internal */
export namespace LeadsOS$ {
    export const inboundSchema: z.ZodType<LeadsOS, z.ZodTypeDef, unknown> = z.object({
        os: z.string(),
        leads: z.number(),
    });

    export type Outbound = {
        os: string;
        leads: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LeadsOS> = z.object({
        os: z.string(),
        leads: z.number(),
    });
}