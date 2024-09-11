/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type AnalyticsTopLinks = {
  /**
   * The unique ID of the short link
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  link: string;
  /**
   * The unique ID of the short link
   */
  id: string;
  /**
   * The domain of the short link
   */
  domain: string;
  /**
   * The key of the short link
   */
  key: string;
  /**
   * The short link URL
   */
  shortLink: string;
  /**
   * The destination URL of the short link
   */
  url: string;
  /**
   * The creation timestamp of the short link
   */
  createdAt: string;
  /**
   * The number of clicks from this link
   */
  clicks?: number | undefined;
  /**
   * The number of leads from this link
   */
  leads?: number | undefined;
  /**
   * The number of sales from this link
   */
  sales?: number | undefined;
  /**
   * The total amount of sales from this link, in cents
   */
  saleAmount?: number | undefined;
};

/** @internal */
export const AnalyticsTopLinks$inboundSchema: z.ZodType<
  AnalyticsTopLinks,
  z.ZodTypeDef,
  unknown
> = z.object({
  link: z.string(),
  id: z.string(),
  domain: z.string(),
  key: z.string(),
  shortLink: z.string(),
  url: z.string(),
  createdAt: z.string(),
  clicks: z.number().default(0),
  leads: z.number().default(0),
  sales: z.number().default(0),
  saleAmount: z.number().default(0),
});

/** @internal */
export type AnalyticsTopLinks$Outbound = {
  link: string;
  id: string;
  domain: string;
  key: string;
  shortLink: string;
  url: string;
  createdAt: string;
  clicks: number;
  leads: number;
  sales: number;
  saleAmount: number;
};

/** @internal */
export const AnalyticsTopLinks$outboundSchema: z.ZodType<
  AnalyticsTopLinks$Outbound,
  z.ZodTypeDef,
  AnalyticsTopLinks
> = z.object({
  link: z.string(),
  id: z.string(),
  domain: z.string(),
  key: z.string(),
  shortLink: z.string(),
  url: z.string(),
  createdAt: z.string(),
  clicks: z.number().default(0),
  leads: z.number().default(0),
  sales: z.number().default(0),
  saleAmount: z.number().default(0),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AnalyticsTopLinks$ {
  /** @deprecated use `AnalyticsTopLinks$inboundSchema` instead. */
  export const inboundSchema = AnalyticsTopLinks$inboundSchema;
  /** @deprecated use `AnalyticsTopLinks$outboundSchema` instead. */
  export const outboundSchema = AnalyticsTopLinks$outboundSchema;
  /** @deprecated use `AnalyticsTopLinks$Outbound` instead. */
  export type Outbound = AnalyticsTopLinks$Outbound;
}
