/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteCustomerRequest = {
  /**
   * The unique identifier of the customer in Dub.
   */
  id: string;
};

/**
 * The customer was deleted.
 */
export type DeleteCustomerResponseBody = {
  /**
   * The unique identifier of the customer in Dub.
   */
  id: string;
};

/** @internal */
export const DeleteCustomerRequest$inboundSchema: z.ZodType<
  DeleteCustomerRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type DeleteCustomerRequest$Outbound = {
  id: string;
};

/** @internal */
export const DeleteCustomerRequest$outboundSchema: z.ZodType<
  DeleteCustomerRequest$Outbound,
  z.ZodTypeDef,
  DeleteCustomerRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteCustomerRequest$ {
  /** @deprecated use `DeleteCustomerRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteCustomerRequest$inboundSchema;
  /** @deprecated use `DeleteCustomerRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteCustomerRequest$outboundSchema;
  /** @deprecated use `DeleteCustomerRequest$Outbound` instead. */
  export type Outbound = DeleteCustomerRequest$Outbound;
}

export function deleteCustomerRequestToJSON(
  deleteCustomerRequest: DeleteCustomerRequest,
): string {
  return JSON.stringify(
    DeleteCustomerRequest$outboundSchema.parse(deleteCustomerRequest),
  );
}

export function deleteCustomerRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteCustomerRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteCustomerRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteCustomerRequest' from JSON`,
  );
}

/** @internal */
export const DeleteCustomerResponseBody$inboundSchema: z.ZodType<
  DeleteCustomerResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type DeleteCustomerResponseBody$Outbound = {
  id: string;
};

/** @internal */
export const DeleteCustomerResponseBody$outboundSchema: z.ZodType<
  DeleteCustomerResponseBody$Outbound,
  z.ZodTypeDef,
  DeleteCustomerResponseBody
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteCustomerResponseBody$ {
  /** @deprecated use `DeleteCustomerResponseBody$inboundSchema` instead. */
  export const inboundSchema = DeleteCustomerResponseBody$inboundSchema;
  /** @deprecated use `DeleteCustomerResponseBody$outboundSchema` instead. */
  export const outboundSchema = DeleteCustomerResponseBody$outboundSchema;
  /** @deprecated use `DeleteCustomerResponseBody$Outbound` instead. */
  export type Outbound = DeleteCustomerResponseBody$Outbound;
}

export function deleteCustomerResponseBodyToJSON(
  deleteCustomerResponseBody: DeleteCustomerResponseBody,
): string {
  return JSON.stringify(
    DeleteCustomerResponseBody$outboundSchema.parse(deleteCustomerResponseBody),
  );
}

export function deleteCustomerResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<DeleteCustomerResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteCustomerResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteCustomerResponseBody' from JSON`,
  );
}