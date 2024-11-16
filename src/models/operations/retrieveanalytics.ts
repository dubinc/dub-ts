/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
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
 * The parameter to group the analytics data points by. Defaults to `count` if undefined. Note that `trigger` is deprecated (use `triggers` instead), but kept for backwards compatibility.
 */
export const QueryParamGroupBy = {
  Count: "count",
  Timeseries: "timeseries",
  Continents: "continents",
  Countries: "countries",
  Cities: "cities",
  Devices: "devices",
  Browsers: "browsers",
  Os: "os",
  Trigger: "trigger",
  Triggers: "triggers",
  Referers: "referers",
  RefererUrls: "referer_urls",
  TopLinks: "top_links",
  TopUrls: "top_urls",
} as const;
/**
 * The parameter to group the analytics data points by. Defaults to `count` if undefined. Note that `trigger` is deprecated (use `triggers` instead), but kept for backwards compatibility.
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
  Ytd: "ytd",
  Oney: "1y",
  All: "all",
  AllUnfiltered: "all_unfiltered",
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
} as const;
/**
 * The trigger to retrieve analytics for. If undefined, return both QR and link clicks.
 */
export type Trigger = ClosedEnum<typeof Trigger>;

/**
 * The tag IDs to retrieve analytics for.
 */
export type RetrieveAnalyticsQueryParamTagIds = string | Array<string>;

export type RetrieveAnalyticsRequest = {
  /**
   * The type of event to retrieve analytics for. Defaults to `clicks`.
   */
  event?: Event | undefined;
  /**
   * The parameter to group the analytics data points by. Defaults to `count` if undefined. Note that `trigger` is deprecated (use `triggers` instead), but kept for backwards compatibility.
   */
  groupBy?: QueryParamGroupBy | undefined;
  /**
   * The domain to filter analytics for.
   */
  domain?: string | undefined;
  /**
   * The short link slug.
   */
  key?: string | undefined;
  /**
   * The unique ID of the short link on Dub.
   */
  linkId?: string | undefined;
  /**
   * This is the ID of the link in the your database. Must be prefixed with 'ext_' when passed as a query parameter.
   */
  externalId?: string | undefined;
  /**
   * The interval to retrieve analytics for. If undefined, defaults to 24h.
   */
  interval?: Interval | undefined;
  /**
   * The start date and time when to retrieve analytics from. Takes precedence over `interval`.
   */
  start?: string | undefined;
  /**
   * The end date and time when to retrieve analytics from. If not provided, defaults to the current date. Takes precedence over `interval`.
   */
  end?: string | undefined;
  /**
   * The IANA time zone code for aligning timeseries granularity (e.g. America/New_York). Defaults to UTC.
   */
  timezone?: string | undefined;
  /**
   * The continent to retrieve analytics for.
   */
  continent?: components.ContinentCode | undefined;
  /**
   * The country to retrieve analytics for.
   */
  country?: components.CountryCode | undefined;
  /**
   * The city to retrieve analytics for.
   */
  city?: string | undefined;
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
   * Deprecated. Use the `trigger` field instead. Filter for QR code scans. If true, filter for QR codes only. If false, filter for links only. If undefined, return both.
   */
  qr?: boolean | undefined;
  /**
   * Filter for root domains. If true, filter for domains only. If false, filter for links only. If undefined, return both.
   */
  root?: boolean | undefined;
};

/**
 * Analytics data
 */
export type RetrieveAnalyticsResponseBody =
  | components.AnalyticsCount
  | Array<components.AnalyticsTimeseries>
  | Array<components.AnalyticsContinents>
  | Array<components.AnalyticsCountries>
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
  interval: Interval$inboundSchema.optional(),
  start: z.string().optional(),
  end: z.string().optional(),
  timezone: z.string().default("UTC"),
  continent: components.ContinentCode$inboundSchema.optional(),
  country: components.CountryCode$inboundSchema.optional(),
  city: z.string().optional(),
  device: z.string().optional(),
  browser: z.string().optional(),
  os: z.string().optional(),
  trigger: Trigger$inboundSchema.optional(),
  referer: z.string().optional(),
  refererUrl: z.string().optional(),
  url: z.string().optional(),
  tagId: z.string().optional(),
  tagIds: z.union([z.string(), z.array(z.string())]).optional(),
  qr: z.boolean().optional(),
  root: z.boolean().optional(),
});

/** @internal */
export type RetrieveAnalyticsRequest$Outbound = {
  event: string;
  groupBy: string;
  domain?: string | undefined;
  key?: string | undefined;
  linkId?: string | undefined;
  externalId?: string | undefined;
  interval?: string | undefined;
  start?: string | undefined;
  end?: string | undefined;
  timezone: string;
  continent?: string | undefined;
  country?: string | undefined;
  city?: string | undefined;
  device?: string | undefined;
  browser?: string | undefined;
  os?: string | undefined;
  trigger?: string | undefined;
  referer?: string | undefined;
  refererUrl?: string | undefined;
  url?: string | undefined;
  tagId?: string | undefined;
  tagIds?: string | Array<string> | undefined;
  qr?: boolean | undefined;
  root?: boolean | undefined;
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
  interval: Interval$outboundSchema.optional(),
  start: z.string().optional(),
  end: z.string().optional(),
  timezone: z.string().default("UTC"),
  continent: components.ContinentCode$outboundSchema.optional(),
  country: components.CountryCode$outboundSchema.optional(),
  city: z.string().optional(),
  device: z.string().optional(),
  browser: z.string().optional(),
  os: z.string().optional(),
  trigger: Trigger$outboundSchema.optional(),
  referer: z.string().optional(),
  refererUrl: z.string().optional(),
  url: z.string().optional(),
  tagId: z.string().optional(),
  tagIds: z.union([z.string(), z.array(z.string())]).optional(),
  qr: z.boolean().optional(),
  root: z.boolean().optional(),
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
