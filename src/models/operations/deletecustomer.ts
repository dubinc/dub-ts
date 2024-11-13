/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

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
