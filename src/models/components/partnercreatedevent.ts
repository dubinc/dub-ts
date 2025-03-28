/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const PartnerCreatedEventEvent = {
  PartnerCreated: "partner.created",
} as const;
export type PartnerCreatedEventEvent = ClosedEnum<
  typeof PartnerCreatedEventEvent
>;

export const Status = {
  Pending: "pending",
  Approved: "approved",
  Rejected: "rejected",
  Invited: "invited",
  Declined: "declined",
  Banned: "banned",
} as const;
export type Status = ClosedEnum<typeof Status>;

export type Links = {
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

export type PartnerCreatedEventData = {
  id: string;
  name: string;
  email: string | null;
  image: string | null;
  description?: string | null | undefined;
  country: string | null;
  payoutsEnabledAt: string | null;
  createdAt: string;
  status: Status;
  programId: string;
  tenantId: string | null;
  links: Array<Links> | null;
  clicks?: number | undefined;
  leads?: number | undefined;
  sales?: number | undefined;
  saleAmount?: number | undefined;
  earnings?: number | undefined;
  applicationId?: string | null | undefined;
};

/**
 * Triggered when a partner is created.
 */
export type PartnerCreatedEvent = {
  id: string;
  event: PartnerCreatedEventEvent;
  createdAt: string;
  data: PartnerCreatedEventData;
};

/** @internal */
export const PartnerCreatedEventEvent$inboundSchema: z.ZodNativeEnum<
  typeof PartnerCreatedEventEvent
> = z.nativeEnum(PartnerCreatedEventEvent);

/** @internal */
export const PartnerCreatedEventEvent$outboundSchema: z.ZodNativeEnum<
  typeof PartnerCreatedEventEvent
> = PartnerCreatedEventEvent$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PartnerCreatedEventEvent$ {
  /** @deprecated use `PartnerCreatedEventEvent$inboundSchema` instead. */
  export const inboundSchema = PartnerCreatedEventEvent$inboundSchema;
  /** @deprecated use `PartnerCreatedEventEvent$outboundSchema` instead. */
  export const outboundSchema = PartnerCreatedEventEvent$outboundSchema;
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
export const Links$inboundSchema: z.ZodType<Links, z.ZodTypeDef, unknown> = z
  .object({
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
export type Links$Outbound = {
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
export const Links$outboundSchema: z.ZodType<
  Links$Outbound,
  z.ZodTypeDef,
  Links
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
export namespace Links$ {
  /** @deprecated use `Links$inboundSchema` instead. */
  export const inboundSchema = Links$inboundSchema;
  /** @deprecated use `Links$outboundSchema` instead. */
  export const outboundSchema = Links$outboundSchema;
  /** @deprecated use `Links$Outbound` instead. */
  export type Outbound = Links$Outbound;
}

export function linksToJSON(links: Links): string {
  return JSON.stringify(Links$outboundSchema.parse(links));
}

export function linksFromJSON(
  jsonString: string,
): SafeParseResult<Links, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Links$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Links' from JSON`,
  );
}

/** @internal */
export const PartnerCreatedEventData$inboundSchema: z.ZodType<
  PartnerCreatedEventData,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.nullable(z.string()),
  image: z.nullable(z.string()),
  description: z.nullable(z.string()).optional(),
  country: z.nullable(z.string()),
  payoutsEnabledAt: z.nullable(z.string()),
  createdAt: z.string(),
  status: Status$inboundSchema,
  programId: z.string(),
  tenantId: z.nullable(z.string()),
  links: z.nullable(z.array(z.lazy(() => Links$inboundSchema))),
  clicks: z.number().default(0),
  leads: z.number().default(0),
  sales: z.number().default(0),
  saleAmount: z.number().default(0),
  earnings: z.number().default(0),
  applicationId: z.nullable(z.string()).optional(),
});

/** @internal */
export type PartnerCreatedEventData$Outbound = {
  id: string;
  name: string;
  email: string | null;
  image: string | null;
  description?: string | null | undefined;
  country: string | null;
  payoutsEnabledAt: string | null;
  createdAt: string;
  status: string;
  programId: string;
  tenantId: string | null;
  links: Array<Links$Outbound> | null;
  clicks: number;
  leads: number;
  sales: number;
  saleAmount: number;
  earnings: number;
  applicationId?: string | null | undefined;
};

/** @internal */
export const PartnerCreatedEventData$outboundSchema: z.ZodType<
  PartnerCreatedEventData$Outbound,
  z.ZodTypeDef,
  PartnerCreatedEventData
> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.nullable(z.string()),
  image: z.nullable(z.string()),
  description: z.nullable(z.string()).optional(),
  country: z.nullable(z.string()),
  payoutsEnabledAt: z.nullable(z.string()),
  createdAt: z.string(),
  status: Status$outboundSchema,
  programId: z.string(),
  tenantId: z.nullable(z.string()),
  links: z.nullable(z.array(z.lazy(() => Links$outboundSchema))),
  clicks: z.number().default(0),
  leads: z.number().default(0),
  sales: z.number().default(0),
  saleAmount: z.number().default(0),
  earnings: z.number().default(0),
  applicationId: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PartnerCreatedEventData$ {
  /** @deprecated use `PartnerCreatedEventData$inboundSchema` instead. */
  export const inboundSchema = PartnerCreatedEventData$inboundSchema;
  /** @deprecated use `PartnerCreatedEventData$outboundSchema` instead. */
  export const outboundSchema = PartnerCreatedEventData$outboundSchema;
  /** @deprecated use `PartnerCreatedEventData$Outbound` instead. */
  export type Outbound = PartnerCreatedEventData$Outbound;
}

export function partnerCreatedEventDataToJSON(
  partnerCreatedEventData: PartnerCreatedEventData,
): string {
  return JSON.stringify(
    PartnerCreatedEventData$outboundSchema.parse(partnerCreatedEventData),
  );
}

export function partnerCreatedEventDataFromJSON(
  jsonString: string,
): SafeParseResult<PartnerCreatedEventData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PartnerCreatedEventData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PartnerCreatedEventData' from JSON`,
  );
}

/** @internal */
export const PartnerCreatedEvent$inboundSchema: z.ZodType<
  PartnerCreatedEvent,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  event: PartnerCreatedEventEvent$inboundSchema,
  createdAt: z.string(),
  data: z.lazy(() => PartnerCreatedEventData$inboundSchema),
});

/** @internal */
export type PartnerCreatedEvent$Outbound = {
  id: string;
  event: string;
  createdAt: string;
  data: PartnerCreatedEventData$Outbound;
};

/** @internal */
export const PartnerCreatedEvent$outboundSchema: z.ZodType<
  PartnerCreatedEvent$Outbound,
  z.ZodTypeDef,
  PartnerCreatedEvent
> = z.object({
  id: z.string(),
  event: PartnerCreatedEventEvent$outboundSchema,
  createdAt: z.string(),
  data: z.lazy(() => PartnerCreatedEventData$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PartnerCreatedEvent$ {
  /** @deprecated use `PartnerCreatedEvent$inboundSchema` instead. */
  export const inboundSchema = PartnerCreatedEvent$inboundSchema;
  /** @deprecated use `PartnerCreatedEvent$outboundSchema` instead. */
  export const outboundSchema = PartnerCreatedEvent$outboundSchema;
  /** @deprecated use `PartnerCreatedEvent$Outbound` instead. */
  export type Outbound = PartnerCreatedEvent$Outbound;
}

export function partnerCreatedEventToJSON(
  partnerCreatedEvent: PartnerCreatedEvent,
): string {
  return JSON.stringify(
    PartnerCreatedEvent$outboundSchema.parse(partnerCreatedEvent),
  );
}

export function partnerCreatedEventFromJSON(
  jsonString: string,
): SafeParseResult<PartnerCreatedEvent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PartnerCreatedEvent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PartnerCreatedEvent' from JSON`,
  );
}
