/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The type of event to retrieve analytics for. Defaults to `clicks`.
 */
export const Event = {
  Clicks: "clicks",
  Leads: "leads",
  Sales: "sales",
  Composite: "composite",
} as const;
/**
 * The type of event to retrieve analytics for. Defaults to `clicks`.
 */
export type Event = ClosedEnum<typeof Event>;

/**
 * The parameter to group the analytics data points by. Defaults to `count` if undefined.
 */
export const QueryParamGroupBy = {
  Count: "count",
  Timeseries: "timeseries",
  Continents: "continents",
  Regions: "regions",
  Countries: "countries",
  Cities: "cities",
  Devices: "devices",
  Browsers: "browsers",
  Os: "os",
  Trigger: "trigger",
  Triggers: "triggers",
  Referers: "referers",
  RefererUrls: "referer_urls",
  TopPartners: "top_partners",
  TopLinks: "top_links",
  TopUrls: "top_urls",
  UtmSources: "utm_sources",
  UtmMediums: "utm_mediums",
  UtmCampaigns: "utm_campaigns",
  UtmTerms: "utm_terms",
  UtmContents: "utm_contents",
} as const;
/**
 * The parameter to group the analytics data points by. Defaults to `count` if undefined.
 */
export type QueryParamGroupBy = ClosedEnum<typeof QueryParamGroupBy>;

/**
 * The interval to retrieve analytics for. If undefined, defaults to 24h.
 */
export const Interval = {
  TwentyFourh: "24h",
  Sevend: "7d",
  Thirtyd: "30d",
  Ninetyd: "90d",
  Oney: "1y",
  Mtd: "mtd",
  Qtd: "qtd",
  Ytd: "ytd",
  All: "all",
} as const;
/**
 * The interval to retrieve analytics for. If undefined, defaults to 24h.
 */
export type Interval = ClosedEnum<typeof Interval>;

/**
 * The trigger to retrieve analytics for. If undefined, return both QR and link clicks.
 */
export const Trigger = {
  Qr: "qr",
  Link: "link",
  Pageview: "pageview",
  Deeplink: "deeplink",
} as const;
/**
 * The trigger to retrieve analytics for. If undefined, return both QR and link clicks.
 */
export type Trigger = ClosedEnum<typeof Trigger>;

/**
 * The tag IDs to retrieve analytics for.
 */
export type RetrieveAnalyticsQueryParamTagIds = string | Array<string>;

/**
 * Filter sales by type: 'new' for first-time purchases, 'recurring' for repeat purchases. If undefined, returns both.
 */
export const SaleType = {
  New: "new",
  Recurring: "recurring",
} as const;
/**
 * Filter sales by type: 'new' for first-time purchases, 'recurring' for repeat purchases. If undefined, returns both.
 */
export type SaleType = ClosedEnum<typeof SaleType>;

export type RetrieveAnalyticsRequest = {
  /**
   * The type of event to retrieve analytics for. Defaults to `clicks`.
   */
  event?: Event | undefined;
  /**
   * The parameter to group the analytics data points by. Defaults to `count` if undefined.
   */
  groupBy?: QueryParamGroupBy | undefined;
  /**
   * The domain to filter analytics for.
   */
  domain?: string | undefined;
  /**
   * The slug of the short link to retrieve analytics for. Must be used along with the corresponding `domain` of the short link to fetch analytics for a specific short link.
   */
  key?: string | undefined;
  /**
   * The unique ID of the short link on Dub to retrieve analytics for.
   */
  linkId?: string | undefined;
  /**
   * The ID of the link in the your database. Must be prefixed with 'ext_' when passed as a query parameter.
   */
  externalId?: string | undefined;
  /**
   * The ID of the tenant that created the link inside your system.
   */
  tenantId?: string | undefined;
  /**
   * The ID of the program to retrieve analytics for.
   */
  programId?: string | undefined;
  /**
   * The ID of the partner to retrieve analytics for.
   */
  partnerId?: string | undefined;
  /**
   * The ID of the customer to retrieve analytics for.
   */
  customerId?: string | undefined;
  /**
   * The interval to retrieve analytics for. If undefined, defaults to 24h.
   */
  interval?: Interval | undefined;
  /**
   * The start date and time when to retrieve analytics from. If set, takes precedence over `interval`.
   */
  start?: string | undefined;
  /**
   * The end date and time when to retrieve analytics from. If not provided, defaults to the current date. If set along with `start`, takes precedence over `interval`.
   */
  end?: string | undefined;
  /**
   * The IANA time zone code for aligning timeseries granularity (e.g. America/New_York). Defaults to UTC.
   */
  timezone?: string | undefined;
  /**
   * The country to retrieve analytics for. Must be passed as a 2-letter ISO 3166-1 country code. Learn more: https://d.to/geo
   */
  country?: components.CountryCode | undefined;
  /**
   * The city to retrieve analytics for.
   */
  city?: string | undefined;
  /**
   * The ISO 3166-2 region code to retrieve analytics for.
   */
  region?: string | undefined;
  /**
   * The continent to retrieve analytics for.
   */
  continent?: components.ContinentCode | undefined;
  /**
   * The device to retrieve analytics for.
   */
  device?: string | undefined;
  /**
   * The browser to retrieve analytics for.
   */
  browser?: string | undefined;
  /**
   * The OS to retrieve analytics for.
   */
  os?: string | undefined;
  /**
   * The trigger to retrieve analytics for. If undefined, return both QR and link clicks.
   */
  trigger?: Trigger | undefined;
  /**
   * The referer to retrieve analytics for.
   */
  referer?: string | undefined;
  /**
   * The full referer URL to retrieve analytics for.
   */
  refererUrl?: string | undefined;
  /**
   * The URL to retrieve analytics for.
   */
  url?: string | undefined;
  /**
   * Deprecated. Use `tagIds` instead. The tag ID to retrieve analytics for.
   */
  tagId?: string | undefined;
  /**
   * The tag IDs to retrieve analytics for.
   */
  tagIds?: string | Array<string> | undefined;
  /**
   * The folder ID to retrieve analytics for. If not provided, return analytics for unsorted links.
   */
  folderId?: string | undefined;
  /**
   * Deprecated. Use the `trigger` field instead. Filter for QR code scans. If true, filter for QR codes only. If false, filter for links only. If undefined, return both.
   */
  qr?: boolean | undefined;
  /**
   * Filter for root domains. If true, filter for domains only. If false, filter for links only. If undefined, return both.
   */
  root?: boolean | undefined;
  /**
   * Filter sales by type: 'new' for first-time purchases, 'recurring' for repeat purchases. If undefined, returns both.
   */
  saleType?: SaleType | undefined;
  /**
   * The UTM source of the short link.
   */
  utmSource?: string | null | undefined;
  /**
   * The UTM medium of the short link.
   */
  utmMedium?: string | null | undefined;
  /**
   * The UTM campaign of the short link.
   */
  utmCampaign?: string | null | undefined;
  /**
   * The UTM term of the short link.
   */
  utmTerm?: string | null | undefined;
  /**
   * The UTM content of the short link.
   */
  utmContent?: string | null | undefined;
};

/**
 * Analytics data
 */
export type RetrieveAnalyticsResponseBody =
  | components.AnalyticsCount
  | Array<components.AnalyticsTimeseries>
  | Array<components.AnalyticsContinents>
  | Array<components.AnalyticsCountries>
  | Array<components.AnalyticsRegions>
  | Array<components.AnalyticsCities>
  | Array<components.AnalyticsDevices>
  | Array<components.AnalyticsBrowsers>
  | Array<components.AnalyticsOS>
  | Array<components.AnalyticsTriggers>
  | Array<components.AnalyticsReferers>
  | Array<components.AnalyticsRefererUrls>
  | Array<components.AnalyticsTopLinks>
  | Array<components.AnalyticsTopUrls>;

/** @internal */
export const Event$inboundSchema: z.ZodNativeEnum<typeof Event> = z.nativeEnum(
  Event,
);

/** @internal */
export const Event$outboundSchema: z.ZodNativeEnum<typeof Event> =
  Event$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Event$ {
  /** @deprecated use `Event$inboundSchema` instead. */
  export const inboundSchema = Event$inboundSchema;
  /** @deprecated use `Event$outboundSchema` instead. */
  export const outboundSchema = Event$outboundSchema;
}

/** @internal */
export const QueryParamGroupBy$inboundSchema: z.ZodNativeEnum<
  typeof QueryParamGroupBy
> = z.nativeEnum(QueryParamGroupBy);

/** @internal */
export const QueryParamGroupBy$outboundSchema: z.ZodNativeEnum<
  typeof QueryParamGroupBy
> = QueryParamGroupBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryParamGroupBy$ {
  /** @deprecated use `QueryParamGroupBy$inboundSchema` instead. */
  export const inboundSchema = QueryParamGroupBy$inboundSchema;
  /** @deprecated use `QueryParamGroupBy$outboundSchema` instead. */
  export const outboundSchema = QueryParamGroupBy$outboundSchema;
}

/** @internal */
export const Interval$inboundSchema: z.ZodNativeEnum<typeof Interval> = z
  .nativeEnum(Interval);

/** @internal */
export const Interval$outboundSchema: z.ZodNativeEnum<typeof Interval> =
  Interval$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Interval$ {
  /** @deprecated use `Interval$inboundSchema` instead. */
  export const inboundSchema = Interval$inboundSchema;
  /** @deprecated use `Interval$outboundSchema` instead. */
  export const outboundSchema = Interval$outboundSchema;
}

/** @internal */
export const Trigger$inboundSchema: z.ZodNativeEnum<typeof Trigger> = z
  .nativeEnum(Trigger);

/** @internal */
export const Trigger$outboundSchema: z.ZodNativeEnum<typeof Trigger> =
  Trigger$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Trigger$ {
  /** @deprecated use `Trigger$inboundSchema` instead. */
  export const inboundSchema = Trigger$inboundSchema;
  /** @deprecated use `Trigger$outboundSchema` instead. */
  export const outboundSchema = Trigger$outboundSchema;
}

/** @internal */
export const RetrieveAnalyticsQueryParamTagIds$inboundSchema: z.ZodType<
  RetrieveAnalyticsQueryParamTagIds,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type RetrieveAnalyticsQueryParamTagIds$Outbound = string | Array<string>;

/** @internal */
export const RetrieveAnalyticsQueryParamTagIds$outboundSchema: z.ZodType<
  RetrieveAnalyticsQueryParamTagIds$Outbound,
  z.ZodTypeDef,
  RetrieveAnalyticsQueryParamTagIds
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveAnalyticsQueryParamTagIds$ {
  /** @deprecated use `RetrieveAnalyticsQueryParamTagIds$inboundSchema` instead. */
  export const inboundSchema = RetrieveAnalyticsQueryParamTagIds$inboundSchema;
  /** @deprecated use `RetrieveAnalyticsQueryParamTagIds$outboundSchema` instead. */
  export const outboundSchema =
    RetrieveAnalyticsQueryParamTagIds$outboundSchema;
  /** @deprecated use `RetrieveAnalyticsQueryParamTagIds$Outbound` instead. */
  export type Outbound = RetrieveAnalyticsQueryParamTagIds$Outbound;
}

export function retrieveAnalyticsQueryParamTagIdsToJSON(
  retrieveAnalyticsQueryParamTagIds: RetrieveAnalyticsQueryParamTagIds,
): string {
  return JSON.stringify(
    RetrieveAnalyticsQueryParamTagIds$outboundSchema.parse(
      retrieveAnalyticsQueryParamTagIds,
    ),
  );
}

export function retrieveAnalyticsQueryParamTagIdsFromJSON(
  jsonString: string,
): SafeParseResult<RetrieveAnalyticsQueryParamTagIds, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetrieveAnalyticsQueryParamTagIds$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveAnalyticsQueryParamTagIds' from JSON`,
  );
}

/** @internal */
export const SaleType$inboundSchema: z.ZodNativeEnum<typeof SaleType> = z
  .nativeEnum(SaleType);

/** @internal */
export const SaleType$outboundSchema: z.ZodNativeEnum<typeof SaleType> =
  SaleType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SaleType$ {
  /** @deprecated use `SaleType$inboundSchema` instead. */
  export const inboundSchema = SaleType$inboundSchema;
  /** @deprecated use `SaleType$outboundSchema` instead. */
  export const outboundSchema = SaleType$outboundSchema;
}

/** @internal */
export const RetrieveAnalyticsRequest$inboundSchema: z.ZodType<
  RetrieveAnalyticsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  event: Event$inboundSchema.default("clicks"),
  groupBy: QueryParamGroupBy$inboundSchema.default("count"),
  domain: z.string().optional(),
  key: z.string().optional(),
  linkId: z.string().optional(),
  externalId: z.string().optional(),
  tenantId: z.string().optional(),
  programId: z.string().optional(),
  partnerId: z.string().optional(),
  customerId: z.string().optional(),
  interval: Interval$inboundSchema.optional(),
  start: z.string().optional(),
  end: z.string().optional(),
  timezone: z.string().default("UTC"),
  country: components.CountryCode$inboundSchema.optional(),
  city: z.string().optional(),
  region: z.string().optional(),
  continent: components.ContinentCode$inboundSchema.optional(),
  device: z.string().optional(),
  browser: z.string().optional(),
  os: z.string().optional(),
  trigger: Trigger$inboundSchema.optional(),
  referer: z.string().optional(),
  refererUrl: z.string().optional(),
  url: z.string().optional(),
  tagId: z.string().optional(),
  tagIds: z.union([z.string(), z.array(z.string())]).optional(),
  folderId: z.string().optional(),
  qr: z.boolean().optional(),
  root: z.boolean().optional(),
  saleType: SaleType$inboundSchema.optional(),
  utm_source: z.nullable(z.string()).optional(),
  utm_medium: z.nullable(z.string()).optional(),
  utm_campaign: z.nullable(z.string()).optional(),
  utm_term: z.nullable(z.string()).optional(),
  utm_content: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "utm_source": "utmSource",
    "utm_medium": "utmMedium",
    "utm_campaign": "utmCampaign",
    "utm_term": "utmTerm",
    "utm_content": "utmContent",
  });
});

/** @internal */
export type RetrieveAnalyticsRequest$Outbound = {
  event: string;
  groupBy: string;
  domain?: string | undefined;
  key?: string | undefined;
  linkId?: string | undefined;
  externalId?: string | undefined;
  tenantId?: string | undefined;
  programId?: string | undefined;
  partnerId?: string | undefined;
  customerId?: string | undefined;
  interval?: string | undefined;
  start?: string | undefined;
  end?: string | undefined;
  timezone: string;
  country?: string | undefined;
  city?: string | undefined;
  region?: string | undefined;
  continent?: string | undefined;
  device?: string | undefined;
  browser?: string | undefined;
  os?: string | undefined;
  trigger?: string | undefined;
  referer?: string | undefined;
  refererUrl?: string | undefined;
  url?: string | undefined;
  tagId?: string | undefined;
  tagIds?: string | Array<string> | undefined;
  folderId?: string | undefined;
  qr?: boolean | undefined;
  root?: boolean | undefined;
  saleType?: string | undefined;
  utm_source?: string | null | undefined;
  utm_medium?: string | null | undefined;
  utm_campaign?: string | null | undefined;
  utm_term?: string | null | undefined;
  utm_content?: string | null | undefined;
};

/** @internal */
export const RetrieveAnalyticsRequest$outboundSchema: z.ZodType<
  RetrieveAnalyticsRequest$Outbound,
  z.ZodTypeDef,
  RetrieveAnalyticsRequest
> = z.object({
  event: Event$outboundSchema.default("clicks"),
  groupBy: QueryParamGroupBy$outboundSchema.default("count"),
  domain: z.string().optional(),
  key: z.string().optional(),
  linkId: z.string().optional(),
  externalId: z.string().optional(),
  tenantId: z.string().optional(),
  programId: z.string().optional(),
  partnerId: z.string().optional(),
  customerId: z.string().optional(),
  interval: Interval$outboundSchema.optional(),
  start: z.string().optional(),
  end: z.string().optional(),
  timezone: z.string().default("UTC"),
  country: components.CountryCode$outboundSchema.optional(),
  city: z.string().optional(),
  region: z.string().optional(),
  continent: components.ContinentCode$outboundSchema.optional(),
  device: z.string().optional(),
  browser: z.string().optional(),
  os: z.string().optional(),
  trigger: Trigger$outboundSchema.optional(),
  referer: z.string().optional(),
  refererUrl: z.string().optional(),
  url: z.string().optional(),
  tagId: z.string().optional(),
  tagIds: z.union([z.string(), z.array(z.string())]).optional(),
  folderId: z.string().optional(),
  qr: z.boolean().optional(),
  root: z.boolean().optional(),
  saleType: SaleType$outboundSchema.optional(),
  utmSource: z.nullable(z.string()).optional(),
  utmMedium: z.nullable(z.string()).optional(),
  utmCampaign: z.nullable(z.string()).optional(),
  utmTerm: z.nullable(z.string()).optional(),
  utmContent: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    utmSource: "utm_source",
    utmMedium: "utm_medium",
    utmCampaign: "utm_campaign",
    utmTerm: "utm_term",
    utmContent: "utm_content",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveAnalyticsRequest$ {
  /** @deprecated use `RetrieveAnalyticsRequest$inboundSchema` instead. */
  export const inboundSchema = RetrieveAnalyticsRequest$inboundSchema;
  /** @deprecated use `RetrieveAnalyticsRequest$outboundSchema` instead. */
  export const outboundSchema = RetrieveAnalyticsRequest$outboundSchema;
  /** @deprecated use `RetrieveAnalyticsRequest$Outbound` instead. */
  export type Outbound = RetrieveAnalyticsRequest$Outbound;
}

export function retrieveAnalyticsRequestToJSON(
  retrieveAnalyticsRequest: RetrieveAnalyticsRequest,
): string {
  return JSON.stringify(
    RetrieveAnalyticsRequest$outboundSchema.parse(retrieveAnalyticsRequest),
  );
}

export function retrieveAnalyticsRequestFromJSON(
  jsonString: string,
): SafeParseResult<RetrieveAnalyticsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetrieveAnalyticsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveAnalyticsRequest' from JSON`,
  );
}

/** @internal */
export const RetrieveAnalyticsResponseBody$inboundSchema: z.ZodType<
  RetrieveAnalyticsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.AnalyticsCount$inboundSchema,
  z.array(components.AnalyticsTimeseries$inboundSchema),
  z.array(components.AnalyticsContinents$inboundSchema),
  z.array(components.AnalyticsCountries$inboundSchema),
  z.array(components.AnalyticsRegions$inboundSchema),
  z.array(components.AnalyticsCities$inboundSchema),
  z.array(components.AnalyticsDevices$inboundSchema),
  z.array(components.AnalyticsBrowsers$inboundSchema),
  z.array(components.AnalyticsOS$inboundSchema),
  z.array(components.AnalyticsTriggers$inboundSchema),
  z.array(components.AnalyticsReferers$inboundSchema),
  z.array(components.AnalyticsRefererUrls$inboundSchema),
  z.array(components.AnalyticsTopLinks$inboundSchema),
  z.array(components.AnalyticsTopUrls$inboundSchema),
]);

/** @internal */
export type RetrieveAnalyticsResponseBody$Outbound =
  | components.AnalyticsCount$Outbound
  | Array<components.AnalyticsTimeseries$Outbound>
  | Array<components.AnalyticsContinents$Outbound>
  | Array<components.AnalyticsCountries$Outbound>
  | Array<components.AnalyticsRegions$Outbound>
  | Array<components.AnalyticsCities$Outbound>
  | Array<components.AnalyticsDevices$Outbound>
  | Array<components.AnalyticsBrowsers$Outbound>
  | Array<components.AnalyticsOS$Outbound>
  | Array<components.AnalyticsTriggers$Outbound>
  | Array<components.AnalyticsReferers$Outbound>
  | Array<components.AnalyticsRefererUrls$Outbound>
  | Array<components.AnalyticsTopLinks$Outbound>
  | Array<components.AnalyticsTopUrls$Outbound>;

/** @internal */
export const RetrieveAnalyticsResponseBody$outboundSchema: z.ZodType<
  RetrieveAnalyticsResponseBody$Outbound,
  z.ZodTypeDef,
  RetrieveAnalyticsResponseBody
> = z.union([
  components.AnalyticsCount$outboundSchema,
  z.array(components.AnalyticsTimeseries$outboundSchema),
  z.array(components.AnalyticsContinents$outboundSchema),
  z.array(components.AnalyticsCountries$outboundSchema),
  z.array(components.AnalyticsRegions$outboundSchema),
  z.array(components.AnalyticsCities$outboundSchema),
  z.array(components.AnalyticsDevices$outboundSchema),
  z.array(components.AnalyticsBrowsers$outboundSchema),
  z.array(components.AnalyticsOS$outboundSchema),
  z.array(components.AnalyticsTriggers$outboundSchema),
  z.array(components.AnalyticsReferers$outboundSchema),
  z.array(components.AnalyticsRefererUrls$outboundSchema),
  z.array(components.AnalyticsTopLinks$outboundSchema),
  z.array(components.AnalyticsTopUrls$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveAnalyticsResponseBody$ {
  /** @deprecated use `RetrieveAnalyticsResponseBody$inboundSchema` instead. */
  export const inboundSchema = RetrieveAnalyticsResponseBody$inboundSchema;
  /** @deprecated use `RetrieveAnalyticsResponseBody$outboundSchema` instead. */
  export const outboundSchema = RetrieveAnalyticsResponseBody$outboundSchema;
  /** @deprecated use `RetrieveAnalyticsResponseBody$Outbound` instead. */
  export type Outbound = RetrieveAnalyticsResponseBody$Outbound;
}

export function retrieveAnalyticsResponseBodyToJSON(
  retrieveAnalyticsResponseBody: RetrieveAnalyticsResponseBody,
): string {
  return JSON.stringify(
    RetrieveAnalyticsResponseBody$outboundSchema.parse(
      retrieveAnalyticsResponseBody,
    ),
  );
}

export function retrieveAnalyticsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<RetrieveAnalyticsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RetrieveAnalyticsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RetrieveAnalyticsResponseBody' from JSON`,
  );
}
