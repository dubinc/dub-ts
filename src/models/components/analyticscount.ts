/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type AnalyticsCount = {
  /**
   * The total number of clicks
   */
  clicks?: number | undefined;
  /**
   * The total number of leads
   */
  leads?: number | undefined;
  /**
   * The total number of sales
   */
  sales?: number | undefined;
  /**
   * The total amount of sales
   */
  saleAmount?: number | undefined;
};

/** @internal */
export const AnalyticsCount$inboundSchema: z.ZodType<
  AnalyticsCount,
  z.ZodTypeDef,
  unknown
> = z.object({
  clicks: z.number().default(0),
  leads: z.number().default(0),
  sales: z.number().default(0),
  saleAmount: z.number().default(0),
});

/** @internal */
export type AnalyticsCount$Outbound = {
  clicks: number;
  leads: number;
  sales: number;
  saleAmount: number;
};

/** @internal */
export const AnalyticsCount$outboundSchema: z.ZodType<
  AnalyticsCount$Outbound,
  z.ZodTypeDef,
  AnalyticsCount
> = z.object({
  clicks: z.number().default(0),
  leads: z.number().default(0),
  sales: z.number().default(0),
  saleAmount: z.number().default(0),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AnalyticsCount$ {
  /** @deprecated use `AnalyticsCount$inboundSchema` instead. */
  export const inboundSchema = AnalyticsCount$inboundSchema;
  /** @deprecated use `AnalyticsCount$outboundSchema` instead. */
  export const outboundSchema = AnalyticsCount$outboundSchema;
  /** @deprecated use `AnalyticsCount$Outbound` instead. */
  export type Outbound = AnalyticsCount$Outbound;
}
