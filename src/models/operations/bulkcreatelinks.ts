/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The unique IDs of the tags assigned to the short link.
 */
export type BulkCreateLinksTagIds = string | Array<string>;

/**
 * The unique name of the tags assigned to the short link (case insensitive).
 */
export type BulkCreateLinksTagNames = string | Array<string>;

export type RequestBody = {
  /**
   * The destination URL of the short link.
   */
  url: string;
  /**
   * The domain of the short link. If not provided, the primary domain for the workspace will be used (or `dub.sh` if the workspace has no domains).
   */
  domain?: string | undefined;
  /**
   * The short link slug. If not provided, a random 7-character slug will be generated.
   */
  key?: string | undefined;
  /**
   * The ID of the link in your database. If set, it can be used to identify the link in future API requests (must be prefixed with 'ext_' when passed as a query parameter). This key is unique across your workspace.
   */
  externalId?: string | null | undefined;
  /**
   * The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant.
   */
  tenantId?: string | null | undefined;
  /**
   * The prefix of the short link slug for randomly-generated keys (e.g. if prefix is `/c/`, generated keys will be in the `/c/:key` format). Will be ignored if `key` is provided.
   */
  prefix?: string | undefined;
  /**
   * Whether to track conversions for the short link.
   */
  trackConversion?: boolean | undefined;
  /**
   * Whether the short link is archived.
   */
  archived?: boolean | undefined;
  /**
   * Deprecated: Use `dashboard` instead. Whether the short link's stats are publicly accessible.
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  publicStats?: boolean | undefined;
  /**
   * The unique ID of the tag assigned to the short link. This field is deprecated – use `tagIds` instead.
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  tagId?: string | null | undefined;
  /**
   * The unique IDs of the tags assigned to the short link.
   */
  tagIds?: string | Array<string> | undefined;
  /**
   * The unique name of the tags assigned to the short link (case insensitive).
   */
  tagNames?: string | Array<string> | undefined;
  /**
   * The comments for the short link.
   */
  comments?: string | null | undefined;
  /**
   * The date and time when the short link will expire at.
   */
  expiresAt?: string | null | undefined;
  /**
   * The URL to redirect to when the short link has expired.
   */
  expiredUrl?: string | null | undefined;
  /**
   * The password required to access the destination URL of the short link.
   */
  password?: string | null | undefined;
  /**
   * Whether the short link uses Custom Social Media Cards feature.
   */
  proxy?: boolean | undefined;
  /**
   * The custom link preview title (og:title). Will be used for Custom Social Media Cards if `proxy` is true. Learn more: https://d.to/og
   */
  title?: string | null | undefined;
  /**
   * The custom link preview description (og:description). Will be used for Custom Social Media Cards if `proxy` is true. Learn more: https://d.to/og
   */
  description?: string | null | undefined;
  /**
   * The custom link preview image (og:image). Will be used for Custom Social Media Cards if `proxy` is true. Learn more: https://d.to/og
   */
  image?: string | null | undefined;
  /**
   * The custom link preview video (og:video). Will be used for Custom Social Media Cards if `proxy` is true. Learn more: https://d.to/og
   */
  video?: string | null | undefined;
  /**
   * Whether the short link uses link cloaking.
   */
  rewrite?: boolean | undefined;
  /**
   * The iOS destination URL for the short link for iOS device targeting.
   */
  ios?: string | null | undefined;
  /**
   * The Android destination URL for the short link for Android device targeting.
   */
  android?: string | null | undefined;
  /**
   * Geo targeting information for the short link in JSON format `{[COUNTRY]: https://example.com }`.
   */
  geo?: components.LinkGeoTargeting | null | undefined;
  /**
   * Allow search engines to index your short link. Defaults to `false` if not provided. Learn more: https://d.to/noindex
   */
  doIndex?: boolean | undefined;
  /**
   * The UTM source of the short link. If set, this will populate or override the UTM source in the destination URL.
   */
  utmSource?: string | null | undefined;
  /**
   * The UTM medium of the short link. If set, this will populate or override the UTM medium in the destination URL.
   */
  utmMedium?: string | null | undefined;
  /**
   * The UTM campaign of the short link. If set, this will populate or override the UTM campaign in the destination URL.
   */
  utmCampaign?: string | null | undefined;
  /**
   * The UTM term of the short link. If set, this will populate or override the UTM term in the destination URL.
   */
  utmTerm?: string | null | undefined;
  /**
   * The UTM content of the short link. If set, this will populate or override the UTM content in the destination URL.
   */
  utmContent?: string | null | undefined;
  /**
   * The referral tag of the short link. If set, this will populate or override the `ref` query parameter in the destination URL.
   */
  ref?: string | null | undefined;
  /**
   * The ID of the program the short link is associated with.
   */
  programId?: string | null | undefined;
  /**
   * An array of webhook IDs to trigger when the link is clicked. These webhooks will receive click event data.
   */
  webhookIds?: Array<string> | null | undefined;
};

export type ResponseBody = components.LinkErrorSchema | components.LinkSchema;

/** @internal */
export const BulkCreateLinksTagIds$inboundSchema: z.ZodType<
  BulkCreateLinksTagIds,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type BulkCreateLinksTagIds$Outbound = string | Array<string>;

/** @internal */
export const BulkCreateLinksTagIds$outboundSchema: z.ZodType<
  BulkCreateLinksTagIds$Outbound,
  z.ZodTypeDef,
  BulkCreateLinksTagIds
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BulkCreateLinksTagIds$ {
  /** @deprecated use `BulkCreateLinksTagIds$inboundSchema` instead. */
  export const inboundSchema = BulkCreateLinksTagIds$inboundSchema;
  /** @deprecated use `BulkCreateLinksTagIds$outboundSchema` instead. */
  export const outboundSchema = BulkCreateLinksTagIds$outboundSchema;
  /** @deprecated use `BulkCreateLinksTagIds$Outbound` instead. */
  export type Outbound = BulkCreateLinksTagIds$Outbound;
}

export function bulkCreateLinksTagIdsToJSON(
  bulkCreateLinksTagIds: BulkCreateLinksTagIds,
): string {
  return JSON.stringify(
    BulkCreateLinksTagIds$outboundSchema.parse(bulkCreateLinksTagIds),
  );
}

export function bulkCreateLinksTagIdsFromJSON(
  jsonString: string,
): SafeParseResult<BulkCreateLinksTagIds, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BulkCreateLinksTagIds$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BulkCreateLinksTagIds' from JSON`,
  );
}

/** @internal */
export const BulkCreateLinksTagNames$inboundSchema: z.ZodType<
  BulkCreateLinksTagNames,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type BulkCreateLinksTagNames$Outbound = string | Array<string>;

/** @internal */
export const BulkCreateLinksTagNames$outboundSchema: z.ZodType<
  BulkCreateLinksTagNames$Outbound,
  z.ZodTypeDef,
  BulkCreateLinksTagNames
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BulkCreateLinksTagNames$ {
  /** @deprecated use `BulkCreateLinksTagNames$inboundSchema` instead. */
  export const inboundSchema = BulkCreateLinksTagNames$inboundSchema;
  /** @deprecated use `BulkCreateLinksTagNames$outboundSchema` instead. */
  export const outboundSchema = BulkCreateLinksTagNames$outboundSchema;
  /** @deprecated use `BulkCreateLinksTagNames$Outbound` instead. */
  export type Outbound = BulkCreateLinksTagNames$Outbound;
}

export function bulkCreateLinksTagNamesToJSON(
  bulkCreateLinksTagNames: BulkCreateLinksTagNames,
): string {
  return JSON.stringify(
    BulkCreateLinksTagNames$outboundSchema.parse(bulkCreateLinksTagNames),
  );
}

export function bulkCreateLinksTagNamesFromJSON(
  jsonString: string,
): SafeParseResult<BulkCreateLinksTagNames, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BulkCreateLinksTagNames$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BulkCreateLinksTagNames' from JSON`,
  );
}

/** @internal */
export const RequestBody$inboundSchema: z.ZodType<
  RequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string(),
  domain: z.string().optional(),
  key: z.string().optional(),
  externalId: z.nullable(z.string()).optional(),
  tenantId: z.nullable(z.string()).optional(),
  prefix: z.string().optional(),
  trackConversion: z.boolean().default(false),
  archived: z.boolean().default(false),
  publicStats: z.boolean().default(false),
  tagId: z.nullable(z.string()).optional(),
  tagIds: z.union([z.string(), z.array(z.string())]).optional(),
  tagNames: z.union([z.string(), z.array(z.string())]).optional(),
  comments: z.nullable(z.string()).optional(),
  expiresAt: z.nullable(z.string()).optional(),
  expiredUrl: z.nullable(z.string()).optional(),
  password: z.nullable(z.string()).optional(),
  proxy: z.boolean().default(false),
  title: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  image: z.nullable(z.string()).optional(),
  video: z.nullable(z.string()).optional(),
  rewrite: z.boolean().default(false),
  ios: z.nullable(z.string()).optional(),
  android: z.nullable(z.string()).optional(),
  geo: z.nullable(components.LinkGeoTargeting$inboundSchema).optional(),
  doIndex: z.boolean().default(false),
  utm_source: z.nullable(z.string()).optional(),
  utm_medium: z.nullable(z.string()).optional(),
  utm_campaign: z.nullable(z.string()).optional(),
  utm_term: z.nullable(z.string()).optional(),
  utm_content: z.nullable(z.string()).optional(),
  ref: z.nullable(z.string()).optional(),
  programId: z.nullable(z.string()).optional(),
  webhookIds: z.nullable(z.array(z.string())).optional(),
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
export type RequestBody$Outbound = {
  url: string;
  domain?: string | undefined;
  key?: string | undefined;
  externalId?: string | null | undefined;
  tenantId?: string | null | undefined;
  prefix?: string | undefined;
  trackConversion: boolean;
  archived: boolean;
  publicStats: boolean;
  tagId?: string | null | undefined;
  tagIds?: string | Array<string> | undefined;
  tagNames?: string | Array<string> | undefined;
  comments?: string | null | undefined;
  expiresAt?: string | null | undefined;
  expiredUrl?: string | null | undefined;
  password?: string | null | undefined;
  proxy: boolean;
  title?: string | null | undefined;
  description?: string | null | undefined;
  image?: string | null | undefined;
  video?: string | null | undefined;
  rewrite: boolean;
  ios?: string | null | undefined;
  android?: string | null | undefined;
  geo?: components.LinkGeoTargeting$Outbound | null | undefined;
  doIndex: boolean;
  utm_source?: string | null | undefined;
  utm_medium?: string | null | undefined;
  utm_campaign?: string | null | undefined;
  utm_term?: string | null | undefined;
  utm_content?: string | null | undefined;
  ref?: string | null | undefined;
  programId?: string | null | undefined;
  webhookIds?: Array<string> | null | undefined;
};

/** @internal */
export const RequestBody$outboundSchema: z.ZodType<
  RequestBody$Outbound,
  z.ZodTypeDef,
  RequestBody
> = z.object({
  url: z.string(),
  domain: z.string().optional(),
  key: z.string().optional(),
  externalId: z.nullable(z.string()).optional(),
  tenantId: z.nullable(z.string()).optional(),
  prefix: z.string().optional(),
  trackConversion: z.boolean().default(false),
  archived: z.boolean().default(false),
  publicStats: z.boolean().default(false),
  tagId: z.nullable(z.string()).optional(),
  tagIds: z.union([z.string(), z.array(z.string())]).optional(),
  tagNames: z.union([z.string(), z.array(z.string())]).optional(),
  comments: z.nullable(z.string()).optional(),
  expiresAt: z.nullable(z.string()).optional(),
  expiredUrl: z.nullable(z.string()).optional(),
  password: z.nullable(z.string()).optional(),
  proxy: z.boolean().default(false),
  title: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  image: z.nullable(z.string()).optional(),
  video: z.nullable(z.string()).optional(),
  rewrite: z.boolean().default(false),
  ios: z.nullable(z.string()).optional(),
  android: z.nullable(z.string()).optional(),
  geo: z.nullable(components.LinkGeoTargeting$outboundSchema).optional(),
  doIndex: z.boolean().default(false),
  utmSource: z.nullable(z.string()).optional(),
  utmMedium: z.nullable(z.string()).optional(),
  utmCampaign: z.nullable(z.string()).optional(),
  utmTerm: z.nullable(z.string()).optional(),
  utmContent: z.nullable(z.string()).optional(),
  ref: z.nullable(z.string()).optional(),
  programId: z.nullable(z.string()).optional(),
  webhookIds: z.nullable(z.array(z.string())).optional(),
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
export namespace RequestBody$ {
  /** @deprecated use `RequestBody$inboundSchema` instead. */
  export const inboundSchema = RequestBody$inboundSchema;
  /** @deprecated use `RequestBody$outboundSchema` instead. */
  export const outboundSchema = RequestBody$outboundSchema;
  /** @deprecated use `RequestBody$Outbound` instead. */
  export type Outbound = RequestBody$Outbound;
}

export function requestBodyToJSON(requestBody: RequestBody): string {
  return JSON.stringify(RequestBody$outboundSchema.parse(requestBody));
}

export function requestBodyFromJSON(
  jsonString: string,
): SafeParseResult<RequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RequestBody' from JSON`,
  );
}

/** @internal */
export const ResponseBody$inboundSchema: z.ZodType<
  ResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.LinkErrorSchema$inboundSchema,
  components.LinkSchema$inboundSchema,
]);

/** @internal */
export type ResponseBody$Outbound =
  | components.LinkErrorSchema$Outbound
  | components.LinkSchema$Outbound;

/** @internal */
export const ResponseBody$outboundSchema: z.ZodType<
  ResponseBody$Outbound,
  z.ZodTypeDef,
  ResponseBody
> = z.union([
  components.LinkErrorSchema$outboundSchema,
  components.LinkSchema$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResponseBody$ {
  /** @deprecated use `ResponseBody$inboundSchema` instead. */
  export const inboundSchema = ResponseBody$inboundSchema;
  /** @deprecated use `ResponseBody$outboundSchema` instead. */
  export const outboundSchema = ResponseBody$outboundSchema;
  /** @deprecated use `ResponseBody$Outbound` instead. */
  export type Outbound = ResponseBody$Outbound;
}

export function responseBodyToJSON(responseBody: ResponseBody): string {
  return JSON.stringify(ResponseBody$outboundSchema.parse(responseBody));
}

export function responseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ResponseBody' from JSON`,
  );
}
