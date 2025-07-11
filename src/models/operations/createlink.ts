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
export type TagIds = string | Array<string>;

/**
 * The unique name of the tags assigned to the short link (case insensitive).
 */
export type TagNames = string | Array<string>;

export type TestVariants = {
  url: string;
  percentage: number;
};

export type CreateLinkRequestBody = {
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
   * The length of the short link slug. Defaults to 7 if not provided. When used with `prefix`, the total length of the key will be `prefix.length + keyLength`.
   */
  keyLength?: number | undefined;
  /**
   * The ID of the link in your database. If set, it can be used to identify the link in future API requests (must be prefixed with 'ext_' when passed as a query parameter). This key is unique across your workspace.
   */
  externalId?: string | null | undefined;
  /**
   * The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant.
   */
  tenantId?: string | null | undefined;
  /**
   * The ID of the program the short link is associated with.
   */
  programId?: string | null | undefined;
  /**
   * The ID of the partner the short link is associated with.
   */
  partnerId?: string | null | undefined;
  /**
   * The prefix of the short link slug for randomly-generated keys (e.g. if prefix is `/c/`, generated keys will be in the `/c/:key` format). Will be ignored if `key` is provided.
   */
  prefix?: string | undefined;
  /**
   * Whether to track conversions for the short link. Defaults to `false` if not provided.
   */
  trackConversion?: boolean | undefined;
  /**
   * Whether the short link is archived. Defaults to `false` if not provided.
   */
  archived?: boolean | undefined;
  /**
   * Deprecated: Use `dashboard` instead. Whether the short link's stats are publicly accessible. Defaults to `false` if not provided.
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
   * The unique ID existing folder to assign the short link to.
   */
  folderId?: string | null | undefined;
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
   * Whether the short link uses Custom Link Previews feature. Defaults to `false` if not provided.
   */
  proxy?: boolean | undefined;
  /**
   * The custom link preview title (og:title). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og
   */
  title?: string | null | undefined;
  /**
   * The custom link preview description (og:description). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og
   */
  description?: string | null | undefined;
  /**
   * The custom link preview image (og:image). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og
   */
  image?: string | null | undefined;
  /**
   * The custom link preview video (og:video). Will be used for Custom Link Previews if `proxy` is true. Learn more: https://d.to/og
   */
  video?: string | null | undefined;
  /**
   * Whether the short link uses link cloaking. Defaults to `false` if not provided.
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
   * An array of webhook IDs to trigger when the link is clicked. These webhooks will receive click event data.
   */
  webhookIds?: Array<string> | null | undefined;
  /**
   * An array of A/B test URLs and the percentage of traffic to send to each URL.
   */
  testVariants?: Array<TestVariants> | null | undefined;
  /**
   * The date and time when the tests started.
   */
  testStartedAt?: string | null | undefined;
  /**
   * The date and time when the tests were or will be completed.
   */
  testCompletedAt?: string | null | undefined;
};

/** @internal */
export const TagIds$inboundSchema: z.ZodType<TagIds, z.ZodTypeDef, unknown> = z
  .union([z.string(), z.array(z.string())]);

/** @internal */
export type TagIds$Outbound = string | Array<string>;

/** @internal */
export const TagIds$outboundSchema: z.ZodType<
  TagIds$Outbound,
  z.ZodTypeDef,
  TagIds
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TagIds$ {
  /** @deprecated use `TagIds$inboundSchema` instead. */
  export const inboundSchema = TagIds$inboundSchema;
  /** @deprecated use `TagIds$outboundSchema` instead. */
  export const outboundSchema = TagIds$outboundSchema;
  /** @deprecated use `TagIds$Outbound` instead. */
  export type Outbound = TagIds$Outbound;
}

export function tagIdsToJSON(tagIds: TagIds): string {
  return JSON.stringify(TagIds$outboundSchema.parse(tagIds));
}

export function tagIdsFromJSON(
  jsonString: string,
): SafeParseResult<TagIds, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TagIds$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TagIds' from JSON`,
  );
}

/** @internal */
export const TagNames$inboundSchema: z.ZodType<
  TagNames,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type TagNames$Outbound = string | Array<string>;

/** @internal */
export const TagNames$outboundSchema: z.ZodType<
  TagNames$Outbound,
  z.ZodTypeDef,
  TagNames
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TagNames$ {
  /** @deprecated use `TagNames$inboundSchema` instead. */
  export const inboundSchema = TagNames$inboundSchema;
  /** @deprecated use `TagNames$outboundSchema` instead. */
  export const outboundSchema = TagNames$outboundSchema;
  /** @deprecated use `TagNames$Outbound` instead. */
  export type Outbound = TagNames$Outbound;
}

export function tagNamesToJSON(tagNames: TagNames): string {
  return JSON.stringify(TagNames$outboundSchema.parse(tagNames));
}

export function tagNamesFromJSON(
  jsonString: string,
): SafeParseResult<TagNames, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TagNames$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TagNames' from JSON`,
  );
}

/** @internal */
export const TestVariants$inboundSchema: z.ZodType<
  TestVariants,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string(),
  percentage: z.number(),
});

/** @internal */
export type TestVariants$Outbound = {
  url: string;
  percentage: number;
};

/** @internal */
export const TestVariants$outboundSchema: z.ZodType<
  TestVariants$Outbound,
  z.ZodTypeDef,
  TestVariants
> = z.object({
  url: z.string(),
  percentage: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TestVariants$ {
  /** @deprecated use `TestVariants$inboundSchema` instead. */
  export const inboundSchema = TestVariants$inboundSchema;
  /** @deprecated use `TestVariants$outboundSchema` instead. */
  export const outboundSchema = TestVariants$outboundSchema;
  /** @deprecated use `TestVariants$Outbound` instead. */
  export type Outbound = TestVariants$Outbound;
}

export function testVariantsToJSON(testVariants: TestVariants): string {
  return JSON.stringify(TestVariants$outboundSchema.parse(testVariants));
}

export function testVariantsFromJSON(
  jsonString: string,
): SafeParseResult<TestVariants, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TestVariants$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TestVariants' from JSON`,
  );
}

/** @internal */
export const CreateLinkRequestBody$inboundSchema: z.ZodType<
  CreateLinkRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string(),
  domain: z.string().optional(),
  key: z.string().optional(),
  keyLength: z.number().optional(),
  externalId: z.nullable(z.string()).optional(),
  tenantId: z.nullable(z.string()).optional(),
  programId: z.nullable(z.string()).optional(),
  partnerId: z.nullable(z.string()).optional(),
  prefix: z.string().optional(),
  trackConversion: z.boolean().optional(),
  archived: z.boolean().optional(),
  publicStats: z.boolean().optional(),
  tagId: z.nullable(z.string()).optional(),
  tagIds: z.union([z.string(), z.array(z.string())]).optional(),
  tagNames: z.union([z.string(), z.array(z.string())]).optional(),
  folderId: z.nullable(z.string()).optional(),
  comments: z.nullable(z.string()).optional(),
  expiresAt: z.nullable(z.string()).optional(),
  expiredUrl: z.nullable(z.string()).optional(),
  password: z.nullable(z.string()).optional(),
  proxy: z.boolean().optional(),
  title: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  image: z.nullable(z.string()).optional(),
  video: z.nullable(z.string()).optional(),
  rewrite: z.boolean().optional(),
  ios: z.nullable(z.string()).optional(),
  android: z.nullable(z.string()).optional(),
  geo: z.nullable(components.LinkGeoTargeting$inboundSchema).optional(),
  doIndex: z.boolean().optional(),
  utm_source: z.nullable(z.string()).optional(),
  utm_medium: z.nullable(z.string()).optional(),
  utm_campaign: z.nullable(z.string()).optional(),
  utm_term: z.nullable(z.string()).optional(),
  utm_content: z.nullable(z.string()).optional(),
  ref: z.nullable(z.string()).optional(),
  webhookIds: z.nullable(z.array(z.string())).optional(),
  testVariants: z.nullable(z.array(z.lazy(() => TestVariants$inboundSchema)))
    .optional(),
  testStartedAt: z.nullable(z.string()).optional(),
  testCompletedAt: z.nullable(z.string()).optional(),
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
export type CreateLinkRequestBody$Outbound = {
  url: string;
  domain?: string | undefined;
  key?: string | undefined;
  keyLength?: number | undefined;
  externalId?: string | null | undefined;
  tenantId?: string | null | undefined;
  programId?: string | null | undefined;
  partnerId?: string | null | undefined;
  prefix?: string | undefined;
  trackConversion?: boolean | undefined;
  archived?: boolean | undefined;
  publicStats?: boolean | undefined;
  tagId?: string | null | undefined;
  tagIds?: string | Array<string> | undefined;
  tagNames?: string | Array<string> | undefined;
  folderId?: string | null | undefined;
  comments?: string | null | undefined;
  expiresAt?: string | null | undefined;
  expiredUrl?: string | null | undefined;
  password?: string | null | undefined;
  proxy?: boolean | undefined;
  title?: string | null | undefined;
  description?: string | null | undefined;
  image?: string | null | undefined;
  video?: string | null | undefined;
  rewrite?: boolean | undefined;
  ios?: string | null | undefined;
  android?: string | null | undefined;
  geo?: components.LinkGeoTargeting$Outbound | null | undefined;
  doIndex?: boolean | undefined;
  utm_source?: string | null | undefined;
  utm_medium?: string | null | undefined;
  utm_campaign?: string | null | undefined;
  utm_term?: string | null | undefined;
  utm_content?: string | null | undefined;
  ref?: string | null | undefined;
  webhookIds?: Array<string> | null | undefined;
  testVariants?: Array<TestVariants$Outbound> | null | undefined;
  testStartedAt?: string | null | undefined;
  testCompletedAt?: string | null | undefined;
};

/** @internal */
export const CreateLinkRequestBody$outboundSchema: z.ZodType<
  CreateLinkRequestBody$Outbound,
  z.ZodTypeDef,
  CreateLinkRequestBody
> = z.object({
  url: z.string(),
  domain: z.string().optional(),
  key: z.string().optional(),
  keyLength: z.number().optional(),
  externalId: z.nullable(z.string()).optional(),
  tenantId: z.nullable(z.string()).optional(),
  programId: z.nullable(z.string()).optional(),
  partnerId: z.nullable(z.string()).optional(),
  prefix: z.string().optional(),
  trackConversion: z.boolean().optional(),
  archived: z.boolean().optional(),
  publicStats: z.boolean().optional(),
  tagId: z.nullable(z.string()).optional(),
  tagIds: z.union([z.string(), z.array(z.string())]).optional(),
  tagNames: z.union([z.string(), z.array(z.string())]).optional(),
  folderId: z.nullable(z.string()).optional(),
  comments: z.nullable(z.string()).optional(),
  expiresAt: z.nullable(z.string()).optional(),
  expiredUrl: z.nullable(z.string()).optional(),
  password: z.nullable(z.string()).optional(),
  proxy: z.boolean().optional(),
  title: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  image: z.nullable(z.string()).optional(),
  video: z.nullable(z.string()).optional(),
  rewrite: z.boolean().optional(),
  ios: z.nullable(z.string()).optional(),
  android: z.nullable(z.string()).optional(),
  geo: z.nullable(components.LinkGeoTargeting$outboundSchema).optional(),
  doIndex: z.boolean().optional(),
  utmSource: z.nullable(z.string()).optional(),
  utmMedium: z.nullable(z.string()).optional(),
  utmCampaign: z.nullable(z.string()).optional(),
  utmTerm: z.nullable(z.string()).optional(),
  utmContent: z.nullable(z.string()).optional(),
  ref: z.nullable(z.string()).optional(),
  webhookIds: z.nullable(z.array(z.string())).optional(),
  testVariants: z.nullable(z.array(z.lazy(() => TestVariants$outboundSchema)))
    .optional(),
  testStartedAt: z.nullable(z.string()).optional(),
  testCompletedAt: z.nullable(z.string()).optional(),
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
export namespace CreateLinkRequestBody$ {
  /** @deprecated use `CreateLinkRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateLinkRequestBody$inboundSchema;
  /** @deprecated use `CreateLinkRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateLinkRequestBody$outboundSchema;
  /** @deprecated use `CreateLinkRequestBody$Outbound` instead. */
  export type Outbound = CreateLinkRequestBody$Outbound;
}

export function createLinkRequestBodyToJSON(
  createLinkRequestBody: CreateLinkRequestBody,
): string {
  return JSON.stringify(
    CreateLinkRequestBody$outboundSchema.parse(createLinkRequestBody),
  );
}

export function createLinkRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateLinkRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateLinkRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateLinkRequestBody' from JSON`,
  );
}
