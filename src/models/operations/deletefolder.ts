/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteFolderRequest = {
  /**
   * The ID of the folder to delete.
   */
  id: string;
};

/**
 * The deleted folder ID.
 */
export type DeleteFolderResponseBody = {
  /**
   * The ID of the deleted folder.
   */
  id: string;
};

/** @internal */
export const DeleteFolderRequest$inboundSchema: z.ZodType<
  DeleteFolderRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type DeleteFolderRequest$Outbound = {
  id: string;
};

/** @internal */
export const DeleteFolderRequest$outboundSchema: z.ZodType<
  DeleteFolderRequest$Outbound,
  z.ZodTypeDef,
  DeleteFolderRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteFolderRequest$ {
  /** @deprecated use `DeleteFolderRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteFolderRequest$inboundSchema;
  /** @deprecated use `DeleteFolderRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteFolderRequest$outboundSchema;
  /** @deprecated use `DeleteFolderRequest$Outbound` instead. */
  export type Outbound = DeleteFolderRequest$Outbound;
}

export function deleteFolderRequestToJSON(
  deleteFolderRequest: DeleteFolderRequest,
): string {
  return JSON.stringify(
    DeleteFolderRequest$outboundSchema.parse(deleteFolderRequest),
  );
}

export function deleteFolderRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteFolderRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteFolderRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteFolderRequest' from JSON`,
  );
}

/** @internal */
export const DeleteFolderResponseBody$inboundSchema: z.ZodType<
  DeleteFolderResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type DeleteFolderResponseBody$Outbound = {
  id: string;
};

/** @internal */
export const DeleteFolderResponseBody$outboundSchema: z.ZodType<
  DeleteFolderResponseBody$Outbound,
  z.ZodTypeDef,
  DeleteFolderResponseBody
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteFolderResponseBody$ {
  /** @deprecated use `DeleteFolderResponseBody$inboundSchema` instead. */
  export const inboundSchema = DeleteFolderResponseBody$inboundSchema;
  /** @deprecated use `DeleteFolderResponseBody$outboundSchema` instead. */
  export const outboundSchema = DeleteFolderResponseBody$outboundSchema;
  /** @deprecated use `DeleteFolderResponseBody$Outbound` instead. */
  export type Outbound = DeleteFolderResponseBody$Outbound;
}

export function deleteFolderResponseBodyToJSON(
  deleteFolderResponseBody: DeleteFolderResponseBody,
): string {
  return JSON.stringify(
    DeleteFolderResponseBody$outboundSchema.parse(deleteFolderResponseBody),
  );
}

export function deleteFolderResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<DeleteFolderResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteFolderResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteFolderResponseBody' from JSON`,
  );
}
