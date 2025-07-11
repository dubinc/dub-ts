/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const PartnerEnrolledEventEvent = {
  PartnerEnrolled: "partner.enrolled",
} as const;
export type PartnerEnrolledEventEvent = ClosedEnum<
  typeof PartnerEnrolledEventEvent
>;

/**
 * The status of the partner's enrollment in the program.
 */
export const Status = {
  Pending: "pending",
  Approved: "approved",
  Rejected: "rejected",
  Invited: "invited",
  Declined: "declined",
  Banned: "banned",
  Archived: "archived",
} as const;
/**
 * The status of the partner's enrollment in the program.
 */
export type Status = ClosedEnum<typeof Status>;

export type PartnerEnrolledEventLink = {
  /**
   * The unique ID of the short link.
   */
  id: string;
  /**
   * The domain of the short link. If not provided, the primary domain for the workspace will be used (or `dub.sh` if the workspace has no domains).
   */
  domain: string;
  /**
   * The short link slug. If not provided, a random 7-character slug will be generated.
   */
  key: string;
  /**
   * The full URL of the short link, including the https protocol (e.g. `https://dub.sh/try`).
   */
  shortLink: string;
  /**
   * The destination URL of the short link.
   */
  url: string;
  /**
   * The number of clicks on the short link.
   */
  clicks?: number | undefined;
  /**
   * The number of leads the short links has generated.
   */
  leads?: number | undefined;
  /**
   * The number of sales the short links has generated.
   */
  sales?: number | undefined;
  /**
   * The total dollar amount of sales the short links has generated (in cents).
   */
  saleAmount?: number | undefined;
};

export type PartnerEnrolledEventData = {
  /**
   * The partner's unique ID on Dub.
   */
  id: string;
  /**
   * The partner's full legal name.
   */
  name: string;
  /**
   * The partner's email address. Should be a unique value across Dub.
   */
  email: string | null;
  /**
   * The partner's avatar image.
   */
  image: string | null;
  /**
   * A brief description of the partner and their background.
   */
  description?: string | null | undefined;
  /**
   * The partner's country (required for tax purposes).
   */
  country: string | null;
  /**
   * The partner's website URL (including the https protocol).
   */
  website: string | null;
  /**
   * The partner's YouTube channel username (e.g. `johndoe`).
   */
  youtube: string | null;
  /**
   * The partner's Twitter username (e.g. `johndoe`).
   */
  twitter: string | null;
  /**
   * The partner's LinkedIn username (e.g. `johndoe`).
   */
  linkedin: string | null;
  /**
   * The partner's Instagram username (e.g. `johndoe`).
   */
  instagram: string | null;
  /**
   * The partner's TikTok username (e.g. `johndoe`).
   */
  tiktok: string | null;
  /**
   * The partner's PayPal email (for receiving payouts via PayPal).
   */
  paypalEmail: string | null;
  /**
   * The partner's Stripe Connect ID (for receiving payouts via Stripe).
   */
  stripeConnectId: string | null;
  /**
   * The date when the partner enabled payouts.
   */
  payoutsEnabledAt: string | null;
  /**
   * The date when the partner was created on Dub.
   */
  createdAt: string;
  /**
   * The status of the partner's enrollment in the program.
   */
  status: Status;
  /**
   * The program's unique ID on Dub.
   */
  programId: string;
  /**
   * The partner's unique ID within your database. Can be useful for associating the partner with a user in your database and retrieving/update their data in the future.
   */
  tenantId: string | null;
  /**
   * The partner's referral links in this program.
   */
  links: Array<PartnerEnrolledEventLink> | null;
  /**
   * The total number of clicks on the partner's links.
   */
  clicks?: number | undefined;
  /**
   * The total number of leads generated by the partner's links.
   */
  leads?: number | undefined;
  /**
   * The total number of sales generated by the partner's links.
   */
  sales?: number | undefined;
  /**
   * The total amount of sales (in cents) generated by the partner's links.
   */
  saleAmount?: number | undefined;
  /**
   * The total commissions paid to the partner for their referrals.
   */
  totalCommissions?: number | undefined;
  /**
   * The total net revenue generated by the partner.
   */
  netRevenue?: number | undefined;
  /**
   * DEPRECATED: The total earnings/commissions accrued by the partner's links.
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  earnings?: number | undefined;
};

/**
 * Triggered when a partner is enrolled.
 */
export type PartnerEnrolledEvent = {
  id: string;
  event: PartnerEnrolledEventEvent;
  createdAt: string;
  data: PartnerEnrolledEventData;
};

/** @internal */
export const PartnerEnrolledEventEvent$inboundSchema: z.ZodNativeEnum<
  typeof PartnerEnrolledEventEvent
> = z.nativeEnum(PartnerEnrolledEventEvent);

/** @internal */
export const PartnerEnrolledEventEvent$outboundSchema: z.ZodNativeEnum<
  typeof PartnerEnrolledEventEvent
> = PartnerEnrolledEventEvent$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PartnerEnrolledEventEvent$ {
  /** @deprecated use `PartnerEnrolledEventEvent$inboundSchema` instead. */
  export const inboundSchema = PartnerEnrolledEventEvent$inboundSchema;
  /** @deprecated use `PartnerEnrolledEventEvent$outboundSchema` instead. */
  export const outboundSchema = PartnerEnrolledEventEvent$outboundSchema;
}

/** @internal */
export const Status$inboundSchema: z.ZodNativeEnum<typeof Status> = z
  .nativeEnum(Status);

/** @internal */
export const Status$outboundSchema: z.ZodNativeEnum<typeof Status> =
  Status$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Status$ {
  /** @deprecated use `Status$inboundSchema` instead. */
  export const inboundSchema = Status$inboundSchema;
  /** @deprecated use `Status$outboundSchema` instead. */
  export const outboundSchema = Status$outboundSchema;
}

/** @internal */
export const PartnerEnrolledEventLink$inboundSchema: z.ZodType<
  PartnerEnrolledEventLink,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  domain: z.string(),
  key: z.string(),
  shortLink: z.string(),
  url: z.string(),
  clicks: z.number().default(0),
  leads: z.number().default(0),
  sales: z.number().default(0),
  saleAmount: z.number().default(0),
});

/** @internal */
export type PartnerEnrolledEventLink$Outbound = {
  id: string;
  domain: string;
  key: string;
  shortLink: string;
  url: string;
  clicks: number;
  leads: number;
  sales: number;
  saleAmount: number;
};

/** @internal */
export const PartnerEnrolledEventLink$outboundSchema: z.ZodType<
  PartnerEnrolledEventLink$Outbound,
  z.ZodTypeDef,
  PartnerEnrolledEventLink
> = z.object({
  id: z.string(),
  domain: z.string(),
  key: z.string(),
  shortLink: z.string(),
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
export namespace PartnerEnrolledEventLink$ {
  /** @deprecated use `PartnerEnrolledEventLink$inboundSchema` instead. */
  export const inboundSchema = PartnerEnrolledEventLink$inboundSchema;
  /** @deprecated use `PartnerEnrolledEventLink$outboundSchema` instead. */
  export const outboundSchema = PartnerEnrolledEventLink$outboundSchema;
  /** @deprecated use `PartnerEnrolledEventLink$Outbound` instead. */
  export type Outbound = PartnerEnrolledEventLink$Outbound;
}

export function partnerEnrolledEventLinkToJSON(
  partnerEnrolledEventLink: PartnerEnrolledEventLink,
): string {
  return JSON.stringify(
    PartnerEnrolledEventLink$outboundSchema.parse(partnerEnrolledEventLink),
  );
}

export function partnerEnrolledEventLinkFromJSON(
  jsonString: string,
): SafeParseResult<PartnerEnrolledEventLink, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PartnerEnrolledEventLink$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PartnerEnrolledEventLink' from JSON`,
  );
}

/** @internal */
export const PartnerEnrolledEventData$inboundSchema: z.ZodType<
  PartnerEnrolledEventData,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.nullable(z.string()),
  image: z.nullable(z.string()),
  description: z.nullable(z.string()).optional(),
  country: z.nullable(z.string()),
  website: z.nullable(z.string()),
  youtube: z.nullable(z.string()),
  twitter: z.nullable(z.string()),
  linkedin: z.nullable(z.string()),
  instagram: z.nullable(z.string()),
  tiktok: z.nullable(z.string()),
  paypalEmail: z.nullable(z.string()),
  stripeConnectId: z.nullable(z.string()),
  payoutsEnabledAt: z.nullable(z.string()),
  createdAt: z.string(),
  status: Status$inboundSchema,
  programId: z.string(),
  tenantId: z.nullable(z.string()),
  links: z.nullable(
    z.array(z.lazy(() => PartnerEnrolledEventLink$inboundSchema)),
  ),
  clicks: z.number().default(0),
  leads: z.number().default(0),
  sales: z.number().default(0),
  saleAmount: z.number().default(0),
  totalCommissions: z.number().default(0),
  netRevenue: z.number().default(0),
  earnings: z.number().default(0),
});

/** @internal */
export type PartnerEnrolledEventData$Outbound = {
  id: string;
  name: string;
  email: string | null;
  image: string | null;
  description?: string | null | undefined;
  country: string | null;
  website: string | null;
  youtube: string | null;
  twitter: string | null;
  linkedin: string | null;
  instagram: string | null;
  tiktok: string | null;
  paypalEmail: string | null;
  stripeConnectId: string | null;
  payoutsEnabledAt: string | null;
  createdAt: string;
  status: string;
  programId: string;
  tenantId: string | null;
  links: Array<PartnerEnrolledEventLink$Outbound> | null;
  clicks: number;
  leads: number;
  sales: number;
  saleAmount: number;
  totalCommissions: number;
  netRevenue: number;
  earnings: number;
};

/** @internal */
export const PartnerEnrolledEventData$outboundSchema: z.ZodType<
  PartnerEnrolledEventData$Outbound,
  z.ZodTypeDef,
  PartnerEnrolledEventData
> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.nullable(z.string()),
  image: z.nullable(z.string()),
  description: z.nullable(z.string()).optional(),
  country: z.nullable(z.string()),
  website: z.nullable(z.string()),
  youtube: z.nullable(z.string()),
  twitter: z.nullable(z.string()),
  linkedin: z.nullable(z.string()),
  instagram: z.nullable(z.string()),
  tiktok: z.nullable(z.string()),
  paypalEmail: z.nullable(z.string()),
  stripeConnectId: z.nullable(z.string()),
  payoutsEnabledAt: z.nullable(z.string()),
  createdAt: z.string(),
  status: Status$outboundSchema,
  programId: z.string(),
  tenantId: z.nullable(z.string()),
  links: z.nullable(
    z.array(z.lazy(() => PartnerEnrolledEventLink$outboundSchema)),
  ),
  clicks: z.number().default(0),
  leads: z.number().default(0),
  sales: z.number().default(0),
  saleAmount: z.number().default(0),
  totalCommissions: z.number().default(0),
  netRevenue: z.number().default(0),
  earnings: z.number().default(0),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PartnerEnrolledEventData$ {
  /** @deprecated use `PartnerEnrolledEventData$inboundSchema` instead. */
  export const inboundSchema = PartnerEnrolledEventData$inboundSchema;
  /** @deprecated use `PartnerEnrolledEventData$outboundSchema` instead. */
  export const outboundSchema = PartnerEnrolledEventData$outboundSchema;
  /** @deprecated use `PartnerEnrolledEventData$Outbound` instead. */
  export type Outbound = PartnerEnrolledEventData$Outbound;
}

export function partnerEnrolledEventDataToJSON(
  partnerEnrolledEventData: PartnerEnrolledEventData,
): string {
  return JSON.stringify(
    PartnerEnrolledEventData$outboundSchema.parse(partnerEnrolledEventData),
  );
}

export function partnerEnrolledEventDataFromJSON(
  jsonString: string,
): SafeParseResult<PartnerEnrolledEventData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PartnerEnrolledEventData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PartnerEnrolledEventData' from JSON`,
  );
}

/** @internal */
export const PartnerEnrolledEvent$inboundSchema: z.ZodType<
  PartnerEnrolledEvent,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  event: PartnerEnrolledEventEvent$inboundSchema,
  createdAt: z.string(),
  data: z.lazy(() => PartnerEnrolledEventData$inboundSchema),
});

/** @internal */
export type PartnerEnrolledEvent$Outbound = {
  id: string;
  event: string;
  createdAt: string;
  data: PartnerEnrolledEventData$Outbound;
};

/** @internal */
export const PartnerEnrolledEvent$outboundSchema: z.ZodType<
  PartnerEnrolledEvent$Outbound,
  z.ZodTypeDef,
  PartnerEnrolledEvent
> = z.object({
  id: z.string(),
  event: PartnerEnrolledEventEvent$outboundSchema,
  createdAt: z.string(),
  data: z.lazy(() => PartnerEnrolledEventData$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PartnerEnrolledEvent$ {
  /** @deprecated use `PartnerEnrolledEvent$inboundSchema` instead. */
  export const inboundSchema = PartnerEnrolledEvent$inboundSchema;
  /** @deprecated use `PartnerEnrolledEvent$outboundSchema` instead. */
  export const outboundSchema = PartnerEnrolledEvent$outboundSchema;
  /** @deprecated use `PartnerEnrolledEvent$Outbound` instead. */
  export type Outbound = PartnerEnrolledEvent$Outbound;
}

export function partnerEnrolledEventToJSON(
  partnerEnrolledEvent: PartnerEnrolledEvent,
): string {
  return JSON.stringify(
    PartnerEnrolledEvent$outboundSchema.parse(partnerEnrolledEvent),
  );
}

export function partnerEnrolledEventFromJSON(
  jsonString: string,
): SafeParseResult<PartnerEnrolledEvent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PartnerEnrolledEvent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PartnerEnrolledEvent' from JSON`,
  );
}
