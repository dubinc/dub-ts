/*
 * Code generated by Speakeasy (https://speakeasyapi.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

/**
 * The unique IDs of the tags assigned to the short link.
 */
export type UpsertLinkTagIds = string | Array<string>;

/**
 * The unique name of the tags assigned to the short link (case insensitive).
 */
export type UpsertLinkTagNames = string | Array<string>;

export type UpsertLinkRequestBody = {
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
     * This is the ID of the link in your database. If set, it can be used to identify the link in the future. Must be prefixed with `ext_` when passed as a query parameter.
     */
    externalId?: string | null | undefined;
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
     * Whether the short link's stats are publicly accessible.
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
};

/** @internal */
export const UpsertLinkTagIds$inboundSchema: z.ZodType<UpsertLinkTagIds, z.ZodTypeDef, unknown> =
    z.union([z.string(), z.array(z.string())]);

/** @internal */
export type UpsertLinkTagIds$Outbound = string | Array<string>;

/** @internal */
export const UpsertLinkTagIds$outboundSchema: z.ZodType<
    UpsertLinkTagIds$Outbound,
    z.ZodTypeDef,
    UpsertLinkTagIds
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpsertLinkTagIds$ {
    /** @deprecated use `UpsertLinkTagIds$inboundSchema` instead. */
    export const inboundSchema = UpsertLinkTagIds$inboundSchema;
    /** @deprecated use `UpsertLinkTagIds$outboundSchema` instead. */
    export const outboundSchema = UpsertLinkTagIds$outboundSchema;
    /** @deprecated use `UpsertLinkTagIds$Outbound` instead. */
    export type Outbound = UpsertLinkTagIds$Outbound;
}

/** @internal */
export const UpsertLinkTagNames$inboundSchema: z.ZodType<
    UpsertLinkTagNames,
    z.ZodTypeDef,
    unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type UpsertLinkTagNames$Outbound = string | Array<string>;

/** @internal */
export const UpsertLinkTagNames$outboundSchema: z.ZodType<
    UpsertLinkTagNames$Outbound,
    z.ZodTypeDef,
    UpsertLinkTagNames
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpsertLinkTagNames$ {
    /** @deprecated use `UpsertLinkTagNames$inboundSchema` instead. */
    export const inboundSchema = UpsertLinkTagNames$inboundSchema;
    /** @deprecated use `UpsertLinkTagNames$outboundSchema` instead. */
    export const outboundSchema = UpsertLinkTagNames$outboundSchema;
    /** @deprecated use `UpsertLinkTagNames$Outbound` instead. */
    export type Outbound = UpsertLinkTagNames$Outbound;
}

/** @internal */
export const UpsertLinkRequestBody$inboundSchema: z.ZodType<
    UpsertLinkRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    url: z.string(),
    domain: z.string().optional(),
    key: z.string().optional(),
    externalId: z.nullable(z.string()).optional(),
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
});

/** @internal */
export type UpsertLinkRequestBody$Outbound = {
    url: string;
    domain?: string | undefined;
    key?: string | undefined;
    externalId?: string | null | undefined;
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
};

/** @internal */
export const UpsertLinkRequestBody$outboundSchema: z.ZodType<
    UpsertLinkRequestBody$Outbound,
    z.ZodTypeDef,
    UpsertLinkRequestBody
> = z.object({
    url: z.string(),
    domain: z.string().optional(),
    key: z.string().optional(),
    externalId: z.nullable(z.string()).optional(),
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
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpsertLinkRequestBody$ {
    /** @deprecated use `UpsertLinkRequestBody$inboundSchema` instead. */
    export const inboundSchema = UpsertLinkRequestBody$inboundSchema;
    /** @deprecated use `UpsertLinkRequestBody$outboundSchema` instead. */
    export const outboundSchema = UpsertLinkRequestBody$outboundSchema;
    /** @deprecated use `UpsertLinkRequestBody$Outbound` instead. */
    export type Outbound = UpsertLinkRequestBody$Outbound;
}
