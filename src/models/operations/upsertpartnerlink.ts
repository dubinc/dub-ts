/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The unique IDs of the tags assigned to the short link.
 */
export type UpsertPartnerLinkTagIds = string | Array<string>;

/**
 * The unique name of the tags assigned to the short link (case insensitive).
 */
export type UpsertPartnerLinkTagNames = string | Array<string>;

/**
 * Additional properties that you can pass to the partner's short link. Will be used to override the default link properties for this partner.
 */
export type UpsertPartnerLinkLinkProps = {
  /**
   * The ID of the link in your database. If set, it can be used to identify the link in future API requests (must be prefixed with 'ext_' when passed as a query parameter). This key is unique across your workspace.
   */
  externalId?: string | null | undefined;
  /**
   * The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant.
   */
  tenantId?: string | null | undefined;
  /**
   * The ID of the partner the short link is associated with.
   */
  partnerId?: string | null | undefined;
  /**
   * The prefix of the short link slug for randomly-generated keys (e.g. if prefix is `/c/`, generated keys will be in the `/c/:key` format). Will be ignored if `key` is provided.
   */
  prefix?: string | undefined;
  /**
   * Whether the short link is archived. Defaults to `false` if not provided.
   */
  archived?: boolean | undefined;
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
   * Whether the short link uses Custom Social Media Cards feature. Defaults to `false` if not provided.
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
};

export type UpsertPartnerLinkRequestBody = {
  /**
   * The ID of the program that the partner is enrolled in.
   */
  programId: string;
  /**
   * The ID of the partner to create a link for. Will take precedence over `tenantId` if provided.
   */
  partnerId?: string | null | undefined;
  /**
   * The ID of the partner in your system. If both `partnerId` and `tenantId` are not provided, an error will be thrown.
   */
  tenantId?: string | null | undefined;
  /**
   * The URL to shorten (if not provided, the program's default URL will be used). Will throw an error if the domain doesn't match the program's default URL domain.
   */
  url?: string | null | undefined;
  /**
   * The short link slug. If not provided, a random 7-character slug will be generated.
   */
  key?: string | undefined;
  /**
   * Additional properties that you can pass to the partner's short link. Will be used to override the default link properties for this partner.
   */
  linkProps?: UpsertPartnerLinkLinkProps | undefined;
};

/** @internal */
export const UpsertPartnerLinkTagIds$inboundSchema: z.ZodType<
  UpsertPartnerLinkTagIds,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type UpsertPartnerLinkTagIds$Outbound = string | Array<string>;

/** @internal */
export const UpsertPartnerLinkTagIds$outboundSchema: z.ZodType<
  UpsertPartnerLinkTagIds$Outbound,
  z.ZodTypeDef,
  UpsertPartnerLinkTagIds
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpsertPartnerLinkTagIds$ {
  /** @deprecated use `UpsertPartnerLinkTagIds$inboundSchema` instead. */
  export const inboundSchema = UpsertPartnerLinkTagIds$inboundSchema;
  /** @deprecated use `UpsertPartnerLinkTagIds$outboundSchema` instead. */
  export const outboundSchema = UpsertPartnerLinkTagIds$outboundSchema;
  /** @deprecated use `UpsertPartnerLinkTagIds$Outbound` instead. */
  export type Outbound = UpsertPartnerLinkTagIds$Outbound;
}

export function upsertPartnerLinkTagIdsToJSON(
  upsertPartnerLinkTagIds: UpsertPartnerLinkTagIds,
): string {
  return JSON.stringify(
    UpsertPartnerLinkTagIds$outboundSchema.parse(upsertPartnerLinkTagIds),
  );
}

export function upsertPartnerLinkTagIdsFromJSON(
  jsonString: string,
): SafeParseResult<UpsertPartnerLinkTagIds, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpsertPartnerLinkTagIds$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpsertPartnerLinkTagIds' from JSON`,
  );
}

/** @internal */
export const UpsertPartnerLinkTagNames$inboundSchema: z.ZodType<
  UpsertPartnerLinkTagNames,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type UpsertPartnerLinkTagNames$Outbound = string | Array<string>;

/** @internal */
export const UpsertPartnerLinkTagNames$outboundSchema: z.ZodType<
  UpsertPartnerLinkTagNames$Outbound,
  z.ZodTypeDef,
  UpsertPartnerLinkTagNames
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpsertPartnerLinkTagNames$ {
  /** @deprecated use `UpsertPartnerLinkTagNames$inboundSchema` instead. */
  export const inboundSchema = UpsertPartnerLinkTagNames$inboundSchema;
  /** @deprecated use `UpsertPartnerLinkTagNames$outboundSchema` instead. */
  export const outboundSchema = UpsertPartnerLinkTagNames$outboundSchema;
  /** @deprecated use `UpsertPartnerLinkTagNames$Outbound` instead. */
  export type Outbound = UpsertPartnerLinkTagNames$Outbound;
}

export function upsertPartnerLinkTagNamesToJSON(
  upsertPartnerLinkTagNames: UpsertPartnerLinkTagNames,
): string {
  return JSON.stringify(
    UpsertPartnerLinkTagNames$outboundSchema.parse(upsertPartnerLinkTagNames),
  );
}

export function upsertPartnerLinkTagNamesFromJSON(
  jsonString: string,
): SafeParseResult<UpsertPartnerLinkTagNames, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpsertPartnerLinkTagNames$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpsertPartnerLinkTagNames' from JSON`,
  );
}

/** @internal */
export const UpsertPartnerLinkLinkProps$inboundSchema: z.ZodType<
  UpsertPartnerLinkLinkProps,
  z.ZodTypeDef,
  unknown
> = z.object({
  externalId: z.nullable(z.string()).optional(),
  tenantId: z.nullable(z.string()).optional(),
  partnerId: z.nullable(z.string()).optional(),
  prefix: z.string().optional(),
  archived: z.boolean().optional(),
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
  doIndex: z.boolean().optional(),
  utm_source: z.nullable(z.string()).optional(),
  utm_medium: z.nullable(z.string()).optional(),
  utm_campaign: z.nullable(z.string()).optional(),
  utm_term: z.nullable(z.string()).optional(),
  utm_content: z.nullable(z.string()).optional(),
  ref: z.nullable(z.string()).optional(),
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
export type UpsertPartnerLinkLinkProps$Outbound = {
  externalId?: string | null | undefined;
  tenantId?: string | null | undefined;
  partnerId?: string | null | undefined;
  prefix?: string | undefined;
  archived?: boolean | undefined;
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
  doIndex?: boolean | undefined;
  utm_source?: string | null | undefined;
  utm_medium?: string | null | undefined;
  utm_campaign?: string | null | undefined;
  utm_term?: string | null | undefined;
  utm_content?: string | null | undefined;
  ref?: string | null | undefined;
};

/** @internal */
export const UpsertPartnerLinkLinkProps$outboundSchema: z.ZodType<
  UpsertPartnerLinkLinkProps$Outbound,
  z.ZodTypeDef,
  UpsertPartnerLinkLinkProps
> = z.object({
  externalId: z.nullable(z.string()).optional(),
  tenantId: z.nullable(z.string()).optional(),
  partnerId: z.nullable(z.string()).optional(),
  prefix: z.string().optional(),
  archived: z.boolean().optional(),
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
  doIndex: z.boolean().optional(),
  utmSource: z.nullable(z.string()).optional(),
  utmMedium: z.nullable(z.string()).optional(),
  utmCampaign: z.nullable(z.string()).optional(),
  utmTerm: z.nullable(z.string()).optional(),
  utmContent: z.nullable(z.string()).optional(),
  ref: z.nullable(z.string()).optional(),
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
export namespace UpsertPartnerLinkLinkProps$ {
  /** @deprecated use `UpsertPartnerLinkLinkProps$inboundSchema` instead. */
  export const inboundSchema = UpsertPartnerLinkLinkProps$inboundSchema;
  /** @deprecated use `UpsertPartnerLinkLinkProps$outboundSchema` instead. */
  export const outboundSchema = UpsertPartnerLinkLinkProps$outboundSchema;
  /** @deprecated use `UpsertPartnerLinkLinkProps$Outbound` instead. */
  export type Outbound = UpsertPartnerLinkLinkProps$Outbound;
}

export function upsertPartnerLinkLinkPropsToJSON(
  upsertPartnerLinkLinkProps: UpsertPartnerLinkLinkProps,
): string {
  return JSON.stringify(
    UpsertPartnerLinkLinkProps$outboundSchema.parse(upsertPartnerLinkLinkProps),
  );
}

export function upsertPartnerLinkLinkPropsFromJSON(
  jsonString: string,
): SafeParseResult<UpsertPartnerLinkLinkProps, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpsertPartnerLinkLinkProps$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpsertPartnerLinkLinkProps' from JSON`,
  );
}

/** @internal */
export const UpsertPartnerLinkRequestBody$inboundSchema: z.ZodType<
  UpsertPartnerLinkRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  programId: z.string(),
  partnerId: z.nullable(z.string()).optional(),
  tenantId: z.nullable(z.string()).optional(),
  url: z.nullable(z.string()).optional(),
  key: z.string().optional(),
  linkProps: z.lazy(() => UpsertPartnerLinkLinkProps$inboundSchema).optional(),
});

/** @internal */
export type UpsertPartnerLinkRequestBody$Outbound = {
  programId: string;
  partnerId?: string | null | undefined;
  tenantId?: string | null | undefined;
  url?: string | null | undefined;
  key?: string | undefined;
  linkProps?: UpsertPartnerLinkLinkProps$Outbound | undefined;
};

/** @internal */
export const UpsertPartnerLinkRequestBody$outboundSchema: z.ZodType<
  UpsertPartnerLinkRequestBody$Outbound,
  z.ZodTypeDef,
  UpsertPartnerLinkRequestBody
> = z.object({
  programId: z.string(),
  partnerId: z.nullable(z.string()).optional(),
  tenantId: z.nullable(z.string()).optional(),
  url: z.nullable(z.string()).optional(),
  key: z.string().optional(),
  linkProps: z.lazy(() => UpsertPartnerLinkLinkProps$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpsertPartnerLinkRequestBody$ {
  /** @deprecated use `UpsertPartnerLinkRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpsertPartnerLinkRequestBody$inboundSchema;
  /** @deprecated use `UpsertPartnerLinkRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpsertPartnerLinkRequestBody$outboundSchema;
  /** @deprecated use `UpsertPartnerLinkRequestBody$Outbound` instead. */
  export type Outbound = UpsertPartnerLinkRequestBody$Outbound;
}

export function upsertPartnerLinkRequestBodyToJSON(
  upsertPartnerLinkRequestBody: UpsertPartnerLinkRequestBody,
): string {
  return JSON.stringify(
    UpsertPartnerLinkRequestBody$outboundSchema.parse(
      upsertPartnerLinkRequestBody,
    ),
  );
}

export function upsertPartnerLinkRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpsertPartnerLinkRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpsertPartnerLinkRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpsertPartnerLinkRequestBody' from JSON`,
  );
}
