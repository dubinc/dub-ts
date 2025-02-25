/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteDomainRequest = {
  /**
   * The domain name.
   */
  slug: string;
};

/**
 * The domain was deleted.
 */
export type DeleteDomainResponseBody = {
  /**
   * The domain name.
   */
  slug: string;
};

/** @internal */
export const DeleteDomainRequest$inboundSchema: z.ZodType<
  DeleteDomainRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  slug: z.string(),
});

/** @internal */
export type DeleteDomainRequest$Outbound = {
  slug: string;
};

/** @internal */
export const DeleteDomainRequest$outboundSchema: z.ZodType<
  DeleteDomainRequest$Outbound,
  z.ZodTypeDef,
  DeleteDomainRequest
> = z.object({
  slug: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteDomainRequest$ {
  /** @deprecated use `DeleteDomainRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteDomainRequest$inboundSchema;
  /** @deprecated use `DeleteDomainRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteDomainRequest$outboundSchema;
  /** @deprecated use `DeleteDomainRequest$Outbound` instead. */
  export type Outbound = DeleteDomainRequest$Outbound;
}

export function deleteDomainRequestToJSON(
  deleteDomainRequest: DeleteDomainRequest,
): string {
  return JSON.stringify(
    DeleteDomainRequest$outboundSchema.parse(deleteDomainRequest),
  );
}

export function deleteDomainRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteDomainRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteDomainRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteDomainRequest' from JSON`,
  );
}

/** @internal */
export const DeleteDomainResponseBody$inboundSchema: z.ZodType<
  DeleteDomainResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  slug: z.string(),
});

/** @internal */
export type DeleteDomainResponseBody$Outbound = {
  slug: string;
};

/** @internal */
export const DeleteDomainResponseBody$outboundSchema: z.ZodType<
  DeleteDomainResponseBody$Outbound,
  z.ZodTypeDef,
  DeleteDomainResponseBody
> = z.object({
  slug: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteDomainResponseBody$ {
  /** @deprecated use `DeleteDomainResponseBody$inboundSchema` instead. */
  export const inboundSchema = DeleteDomainResponseBody$inboundSchema;
  /** @deprecated use `DeleteDomainResponseBody$outboundSchema` instead. */
  export const outboundSchema = DeleteDomainResponseBody$outboundSchema;
  /** @deprecated use `DeleteDomainResponseBody$Outbound` instead. */
  export type Outbound = DeleteDomainResponseBody$Outbound;
}

export function deleteDomainResponseBodyToJSON(
  deleteDomainResponseBody: DeleteDomainResponseBody,
): string {
  return JSON.stringify(
    DeleteDomainResponseBody$outboundSchema.parse(deleteDomainResponseBody),
  );
}

export function deleteDomainResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<DeleteDomainResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteDomainResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteDomainResponseBody' from JSON`,
  );
}
