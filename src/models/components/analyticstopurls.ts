/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AnalyticsTopUrls = {
  /**
   * The destination URL
   */
  url: string;
  /**
   * The number of clicks from this URL
   */
  clicks?: number | undefined;
  /**
   * The number of leads from this URL
   */
  leads?: number | undefined;
  /**
   * The number of sales from this URL
   */
  sales?: number | undefined;
  /**
   * The total amount of sales from this URL, in cents
   */
  saleAmount?: number | undefined;
};

/** @internal */
export const AnalyticsTopUrls$inboundSchema: z.ZodType<
  AnalyticsTopUrls,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string(),
  clicks: z.number().default(0),
  leads: z.number().default(0),
  sales: z.number().default(0),
  saleAmount: z.number().default(0),
});

/** @internal */
export type AnalyticsTopUrls$Outbound = {
  url: string;
  clicks: number;
  leads: number;
  sales: number;
  saleAmount: number;
};

/** @internal */
export const AnalyticsTopUrls$outboundSchema: z.ZodType<
  AnalyticsTopUrls$Outbound,
  z.ZodTypeDef,
  AnalyticsTopUrls
> = z.object({
  url: z.string(),
  clicks: z.number().default(0),
  leads: z.number().default(0),
  sales: z.number().default(0),
  saleAmount: z.number().default(0),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AnalyticsTopUrls$ {
  /** @deprecated use `AnalyticsTopUrls$inboundSchema` instead. */
  export const inboundSchema = AnalyticsTopUrls$inboundSchema;
  /** @deprecated use `AnalyticsTopUrls$outboundSchema` instead. */
  export const outboundSchema = AnalyticsTopUrls$outboundSchema;
  /** @deprecated use `AnalyticsTopUrls$Outbound` instead. */
  export type Outbound = AnalyticsTopUrls$Outbound;
}

export function analyticsTopUrlsToJSON(
  analyticsTopUrls: AnalyticsTopUrls,
): string {
  return JSON.stringify(
    AnalyticsTopUrls$outboundSchema.parse(analyticsTopUrls),
  );
}

export function analyticsTopUrlsFromJSON(
  jsonString: string,
): SafeParseResult<AnalyticsTopUrls, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AnalyticsTopUrls$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AnalyticsTopUrls' from JSON`,
  );
}
