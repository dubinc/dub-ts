/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The error code.
 */
export const Code = {
  BadRequest: "bad_request",
  NotFound: "not_found",
  InternalServerError: "internal_server_error",
  Unauthorized: "unauthorized",
  Forbidden: "forbidden",
  RateLimitExceeded: "rate_limit_exceeded",
  InviteExpired: "invite_expired",
  InvitePending: "invite_pending",
  ExceededLimit: "exceeded_limit",
  Conflict: "conflict",
  UnprocessableEntity: "unprocessable_entity",
} as const;
/**
 * The error code.
 */
export type Code = ClosedEnum<typeof Code>;

export type LinkErrorSchema = {
  /**
   * The link that caused the error.
   */
  link?: any | undefined;
  /**
   * The error message.
   */
  error: string;
  /**
   * The error code.
   */
  code: Code;
};

/** @internal */
export const Code$inboundSchema: z.ZodNativeEnum<typeof Code> = z.nativeEnum(
  Code,
);

/** @internal */
export const Code$outboundSchema: z.ZodNativeEnum<typeof Code> =
  Code$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Code$ {
  /** @deprecated use `Code$inboundSchema` instead. */
  export const inboundSchema = Code$inboundSchema;
  /** @deprecated use `Code$outboundSchema` instead. */
  export const outboundSchema = Code$outboundSchema;
}

/** @internal */
export const LinkErrorSchema$inboundSchema: z.ZodType<
  LinkErrorSchema,
  z.ZodTypeDef,
  unknown
> = z.object({
  link: z.any().optional(),
  error: z.string(),
  code: Code$inboundSchema,
});

/** @internal */
export type LinkErrorSchema$Outbound = {
  link?: any | undefined;
  error: string;
  code: string;
};

/** @internal */
export const LinkErrorSchema$outboundSchema: z.ZodType<
  LinkErrorSchema$Outbound,
  z.ZodTypeDef,
  LinkErrorSchema
> = z.object({
  link: z.any().optional(),
  error: z.string(),
  code: Code$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LinkErrorSchema$ {
  /** @deprecated use `LinkErrorSchema$inboundSchema` instead. */
  export const inboundSchema = LinkErrorSchema$inboundSchema;
  /** @deprecated use `LinkErrorSchema$outboundSchema` instead. */
  export const outboundSchema = LinkErrorSchema$outboundSchema;
  /** @deprecated use `LinkErrorSchema$Outbound` instead. */
  export type Outbound = LinkErrorSchema$Outbound;
}

export function linkErrorSchemaToJSON(
  linkErrorSchema: LinkErrorSchema,
): string {
  return JSON.stringify(LinkErrorSchema$outboundSchema.parse(linkErrorSchema));
}

export function linkErrorSchemaFromJSON(
  jsonString: string,
): SafeParseResult<LinkErrorSchema, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LinkErrorSchema$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LinkErrorSchema' from JSON`,
  );
}
