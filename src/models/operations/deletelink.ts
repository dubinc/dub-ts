/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteLinkRequest = {
  /**
   * The id of the link to delete. You may use either `linkId` (obtained via `/links/info` endpoint) or `externalId` prefixed with `ext_`.
   */
  linkId: string;
};

/**
 * The deleted link ID.
 */
export type DeleteLinkResponseBody = {
  /**
   * The ID of the link.
   */
  id: string;
};

/** @internal */
export const DeleteLinkRequest$inboundSchema: z.ZodType<
  DeleteLinkRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  linkId: z.string(),
});

/** @internal */
export type DeleteLinkRequest$Outbound = {
  linkId: string;
};

/** @internal */
export const DeleteLinkRequest$outboundSchema: z.ZodType<
  DeleteLinkRequest$Outbound,
  z.ZodTypeDef,
  DeleteLinkRequest
> = z.object({
  linkId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteLinkRequest$ {
  /** @deprecated use `DeleteLinkRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteLinkRequest$inboundSchema;
  /** @deprecated use `DeleteLinkRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteLinkRequest$outboundSchema;
  /** @deprecated use `DeleteLinkRequest$Outbound` instead. */
  export type Outbound = DeleteLinkRequest$Outbound;
}

export function deleteLinkRequestToJSON(
  deleteLinkRequest: DeleteLinkRequest,
): string {
  return JSON.stringify(
    DeleteLinkRequest$outboundSchema.parse(deleteLinkRequest),
  );
}

export function deleteLinkRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteLinkRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteLinkRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteLinkRequest' from JSON`,
  );
}

/** @internal */
export const DeleteLinkResponseBody$inboundSchema: z.ZodType<
  DeleteLinkResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type DeleteLinkResponseBody$Outbound = {
  id: string;
};

/** @internal */
export const DeleteLinkResponseBody$outboundSchema: z.ZodType<
  DeleteLinkResponseBody$Outbound,
  z.ZodTypeDef,
  DeleteLinkResponseBody
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteLinkResponseBody$ {
  /** @deprecated use `DeleteLinkResponseBody$inboundSchema` instead. */
  export const inboundSchema = DeleteLinkResponseBody$inboundSchema;
  /** @deprecated use `DeleteLinkResponseBody$outboundSchema` instead. */
  export const outboundSchema = DeleteLinkResponseBody$outboundSchema;
  /** @deprecated use `DeleteLinkResponseBody$Outbound` instead. */
  export type Outbound = DeleteLinkResponseBody$Outbound;
}

export function deleteLinkResponseBodyToJSON(
  deleteLinkResponseBody: DeleteLinkResponseBody,
): string {
  return JSON.stringify(
    DeleteLinkResponseBody$outboundSchema.parse(deleteLinkResponseBody),
  );
}

export function deleteLinkResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<DeleteLinkResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteLinkResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteLinkResponseBody' from JSON`,
  );
}
