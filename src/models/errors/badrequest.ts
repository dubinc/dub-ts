/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { DubError } from "./duberror.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

/**
 * A short code indicating the error code returned.
 */
export const Code = {
  BadRequest: "bad_request",
} as const;
/**
 * A short code indicating the error code returned.
 */
export type Code = ClosedEnum<typeof Code>;

export type ErrorT = {
  /**
   * A short code indicating the error code returned.
   */
  code: Code;
  /**
   * A human readable explanation of what went wrong.
   */
  message: string;
  /**
   * A link to our documentation with more details about this error code
   */
  docUrl?: string | undefined;
};

/**
 * The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
 */
export type BadRequestData = {
  error: ErrorT;
};

/**
 * The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
 */
export class BadRequest extends DubError {
  error: ErrorT;

  /** The original data that was passed to this error instance. */
  data$: BadRequestData;

  constructor(
    err: BadRequestData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.error?.message
      || `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.error = err.error;

    this.name = "BadRequest";
  }
}

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
export const ErrorT$inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, unknown> = z
  .object({
    code: Code$inboundSchema,
    message: z.string(),
    doc_url: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "doc_url": "docUrl",
    });
  });

/** @internal */
export type ErrorT$Outbound = {
  code: string;
  message: string;
  doc_url?: string | undefined;
};

/** @internal */
export const ErrorT$outboundSchema: z.ZodType<
  ErrorT$Outbound,
  z.ZodTypeDef,
  ErrorT
> = z.object({
  code: Code$outboundSchema,
  message: z.string(),
  docUrl: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    docUrl: "doc_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorT$ {
  /** @deprecated use `ErrorT$inboundSchema` instead. */
  export const inboundSchema = ErrorT$inboundSchema;
  /** @deprecated use `ErrorT$outboundSchema` instead. */
  export const outboundSchema = ErrorT$outboundSchema;
  /** @deprecated use `ErrorT$Outbound` instead. */
  export type Outbound = ErrorT$Outbound;
}

export function errorToJSON(errorT: ErrorT): string {
  return JSON.stringify(ErrorT$outboundSchema.parse(errorT));
}

export function errorFromJSON(
  jsonString: string,
): SafeParseResult<ErrorT, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ErrorT$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ErrorT' from JSON`,
  );
}

/** @internal */
export const BadRequest$inboundSchema: z.ZodType<
  BadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.lazy(() => ErrorT$inboundSchema),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new BadRequest(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type BadRequest$Outbound = {
  error: ErrorT$Outbound;
};

/** @internal */
export const BadRequest$outboundSchema: z.ZodType<
  BadRequest$Outbound,
  z.ZodTypeDef,
  BadRequest
> = z.instanceof(BadRequest)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.lazy(() => ErrorT$outboundSchema),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequest$ {
  /** @deprecated use `BadRequest$inboundSchema` instead. */
  export const inboundSchema = BadRequest$inboundSchema;
  /** @deprecated use `BadRequest$outboundSchema` instead. */
  export const outboundSchema = BadRequest$outboundSchema;
  /** @deprecated use `BadRequest$Outbound` instead. */
  export type Outbound = BadRequest$Outbound;
}
