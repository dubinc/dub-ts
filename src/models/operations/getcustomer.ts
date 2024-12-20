/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetCustomerRequest = {
  /**
   * The unique identifier of the customer in Dub.
   */
  id: string;
};

export type GetCustomerLink = {
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
   * The ID of the program the short link is associated with.
   */
  programId: string | null;
};

/**
 * The customer object.
 */
export type GetCustomerResponseBody = {
  /**
   * The unique identifier of the customer in Dub.
   */
  id: string;
  /**
   * Unique identifier for the customer in the client's app.
   */
  externalId: string;
  /**
   * Name of the customer.
   */
  name: string;
  /**
   * Email of the customer.
   */
  email?: string | null | undefined;
  /**
   * Avatar URL of the customer.
   */
  avatar?: string | null | undefined;
  /**
   * Country of the customer.
   */
  country?: string | null | undefined;
  /**
   * The date the customer was created.
   */
  createdAt: string;
  link?: GetCustomerLink | null | undefined;
};

/** @internal */
export const GetCustomerRequest$inboundSchema: z.ZodType<
  GetCustomerRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type GetCustomerRequest$Outbound = {
  id: string;
};

/** @internal */
export const GetCustomerRequest$outboundSchema: z.ZodType<
  GetCustomerRequest$Outbound,
  z.ZodTypeDef,
  GetCustomerRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCustomerRequest$ {
  /** @deprecated use `GetCustomerRequest$inboundSchema` instead. */
  export const inboundSchema = GetCustomerRequest$inboundSchema;
  /** @deprecated use `GetCustomerRequest$outboundSchema` instead. */
  export const outboundSchema = GetCustomerRequest$outboundSchema;
  /** @deprecated use `GetCustomerRequest$Outbound` instead. */
  export type Outbound = GetCustomerRequest$Outbound;
}

export function getCustomerRequestToJSON(
  getCustomerRequest: GetCustomerRequest,
): string {
  return JSON.stringify(
    GetCustomerRequest$outboundSchema.parse(getCustomerRequest),
  );
}

export function getCustomerRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetCustomerRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCustomerRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCustomerRequest' from JSON`,
  );
}

/** @internal */
export const GetCustomerLink$inboundSchema: z.ZodType<
  GetCustomerLink,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  domain: z.string(),
  key: z.string(),
  shortLink: z.string(),
  programId: z.nullable(z.string()),
});

/** @internal */
export type GetCustomerLink$Outbound = {
  id: string;
  domain: string;
  key: string;
  shortLink: string;
  programId: string | null;
};

/** @internal */
export const GetCustomerLink$outboundSchema: z.ZodType<
  GetCustomerLink$Outbound,
  z.ZodTypeDef,
  GetCustomerLink
> = z.object({
  id: z.string(),
  domain: z.string(),
  key: z.string(),
  shortLink: z.string(),
  programId: z.nullable(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCustomerLink$ {
  /** @deprecated use `GetCustomerLink$inboundSchema` instead. */
  export const inboundSchema = GetCustomerLink$inboundSchema;
  /** @deprecated use `GetCustomerLink$outboundSchema` instead. */
  export const outboundSchema = GetCustomerLink$outboundSchema;
  /** @deprecated use `GetCustomerLink$Outbound` instead. */
  export type Outbound = GetCustomerLink$Outbound;
}

export function getCustomerLinkToJSON(
  getCustomerLink: GetCustomerLink,
): string {
  return JSON.stringify(GetCustomerLink$outboundSchema.parse(getCustomerLink));
}

export function getCustomerLinkFromJSON(
  jsonString: string,
): SafeParseResult<GetCustomerLink, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCustomerLink$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCustomerLink' from JSON`,
  );
}

/** @internal */
export const GetCustomerResponseBody$inboundSchema: z.ZodType<
  GetCustomerResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  externalId: z.string(),
  name: z.string(),
  email: z.nullable(z.string()).optional(),
  avatar: z.nullable(z.string()).optional(),
  country: z.nullable(z.string()).optional(),
  createdAt: z.string(),
  link: z.nullable(z.lazy(() => GetCustomerLink$inboundSchema)).optional(),
});

/** @internal */
export type GetCustomerResponseBody$Outbound = {
  id: string;
  externalId: string;
  name: string;
  email?: string | null | undefined;
  avatar?: string | null | undefined;
  country?: string | null | undefined;
  createdAt: string;
  link?: GetCustomerLink$Outbound | null | undefined;
};

/** @internal */
export const GetCustomerResponseBody$outboundSchema: z.ZodType<
  GetCustomerResponseBody$Outbound,
  z.ZodTypeDef,
  GetCustomerResponseBody
> = z.object({
  id: z.string(),
  externalId: z.string(),
  name: z.string(),
  email: z.nullable(z.string()).optional(),
  avatar: z.nullable(z.string()).optional(),
  country: z.nullable(z.string()).optional(),
  createdAt: z.string(),
  link: z.nullable(z.lazy(() => GetCustomerLink$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCustomerResponseBody$ {
  /** @deprecated use `GetCustomerResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetCustomerResponseBody$inboundSchema;
  /** @deprecated use `GetCustomerResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetCustomerResponseBody$outboundSchema;
  /** @deprecated use `GetCustomerResponseBody$Outbound` instead. */
  export type Outbound = GetCustomerResponseBody$Outbound;
}

export function getCustomerResponseBodyToJSON(
  getCustomerResponseBody: GetCustomerResponseBody,
): string {
  return JSON.stringify(
    GetCustomerResponseBody$outboundSchema.parse(getCustomerResponseBody),
  );
}

export function getCustomerResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetCustomerResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCustomerResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCustomerResponseBody' from JSON`,
  );
}
