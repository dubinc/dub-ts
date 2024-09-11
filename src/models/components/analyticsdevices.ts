/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type AnalyticsDevices = {
  /**
   * The name of the device
   */
  device: string;
  /**
   * The number of clicks from this device
   */
  clicks?: number | undefined;
  /**
   * The number of leads from this device
   */
  leads?: number | undefined;
  /**
   * The number of sales from this device
   */
  sales?: number | undefined;
  /**
   * The total amount of sales from this device, in cents
   */
  saleAmount?: number | undefined;
};

/** @internal */
export const AnalyticsDevices$inboundSchema: z.ZodType<
  AnalyticsDevices,
  z.ZodTypeDef,
  unknown
> = z.object({
  device: z.string(),
  clicks: z.number().default(0),
  leads: z.number().default(0),
  sales: z.number().default(0),
  saleAmount: z.number().default(0),
});

/** @internal */
export type AnalyticsDevices$Outbound = {
  device: string;
  clicks: number;
  leads: number;
  sales: number;
  saleAmount: number;
};

/** @internal */
export const AnalyticsDevices$outboundSchema: z.ZodType<
  AnalyticsDevices$Outbound,
  z.ZodTypeDef,
  AnalyticsDevices
> = z.object({
  device: z.string(),
  clicks: z.number().default(0),
  leads: z.number().default(0),
  sales: z.number().default(0),
  saleAmount: z.number().default(0),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AnalyticsDevices$ {
  /** @deprecated use `AnalyticsDevices$inboundSchema` instead. */
  export const inboundSchema = AnalyticsDevices$inboundSchema;
  /** @deprecated use `AnalyticsDevices$outboundSchema` instead. */
  export const outboundSchema = AnalyticsDevices$outboundSchema;
  /** @deprecated use `AnalyticsDevices$Outbound` instead. */
  export type Outbound = AnalyticsDevices$Outbound;
}
