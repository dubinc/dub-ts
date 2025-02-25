/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateEmbedTokenRequestBody = {
  programId: string;
  partnerId?: string | null | undefined;
  tenantId?: string | null | undefined;
};

/**
 * The created public embed token.
 */
export type CreateEmbedTokenResponseBody = {
  publicToken: string;
  expires: string;
};

/** @internal */
export const CreateEmbedTokenRequestBody$inboundSchema: z.ZodType<
  CreateEmbedTokenRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  programId: z.string(),
  partnerId: z.nullable(z.string()).optional(),
  tenantId: z.nullable(z.string()).optional(),
});

/** @internal */
export type CreateEmbedTokenRequestBody$Outbound = {
  programId: string;
  partnerId?: string | null | undefined;
  tenantId?: string | null | undefined;
};

/** @internal */
export const CreateEmbedTokenRequestBody$outboundSchema: z.ZodType<
  CreateEmbedTokenRequestBody$Outbound,
  z.ZodTypeDef,
  CreateEmbedTokenRequestBody
> = z.object({
  programId: z.string(),
  partnerId: z.nullable(z.string()).optional(),
  tenantId: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEmbedTokenRequestBody$ {
  /** @deprecated use `CreateEmbedTokenRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateEmbedTokenRequestBody$inboundSchema;
  /** @deprecated use `CreateEmbedTokenRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateEmbedTokenRequestBody$outboundSchema;
  /** @deprecated use `CreateEmbedTokenRequestBody$Outbound` instead. */
  export type Outbound = CreateEmbedTokenRequestBody$Outbound;
}

export function createEmbedTokenRequestBodyToJSON(
  createEmbedTokenRequestBody: CreateEmbedTokenRequestBody,
): string {
  return JSON.stringify(
    CreateEmbedTokenRequestBody$outboundSchema.parse(
      createEmbedTokenRequestBody,
    ),
  );
}

export function createEmbedTokenRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateEmbedTokenRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateEmbedTokenRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateEmbedTokenRequestBody' from JSON`,
  );
}

/** @internal */
export const CreateEmbedTokenResponseBody$inboundSchema: z.ZodType<
  CreateEmbedTokenResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  publicToken: z.string(),
  expires: z.string(),
});

/** @internal */
export type CreateEmbedTokenResponseBody$Outbound = {
  publicToken: string;
  expires: string;
};

/** @internal */
export const CreateEmbedTokenResponseBody$outboundSchema: z.ZodType<
  CreateEmbedTokenResponseBody$Outbound,
  z.ZodTypeDef,
  CreateEmbedTokenResponseBody
> = z.object({
  publicToken: z.string(),
  expires: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEmbedTokenResponseBody$ {
  /** @deprecated use `CreateEmbedTokenResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateEmbedTokenResponseBody$inboundSchema;
  /** @deprecated use `CreateEmbedTokenResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateEmbedTokenResponseBody$outboundSchema;
  /** @deprecated use `CreateEmbedTokenResponseBody$Outbound` instead. */
  export type Outbound = CreateEmbedTokenResponseBody$Outbound;
}

export function createEmbedTokenResponseBodyToJSON(
  createEmbedTokenResponseBody: CreateEmbedTokenResponseBody,
): string {
  return JSON.stringify(
    CreateEmbedTokenResponseBody$outboundSchema.parse(
      createEmbedTokenResponseBody,
    ),
  );
}

export function createEmbedTokenResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateEmbedTokenResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateEmbedTokenResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateEmbedTokenResponseBody' from JSON`,
  );
}
