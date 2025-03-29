/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { DubCore } from "../core.js";
import { encodeJSON } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Upsert a link
 *
 * @remarks
 * Upsert a link for the authenticated workspace by its URL. If a link with the same URL already exists, return it (or update it if there are any changes). Otherwise, a new link will be created.
 */
export function linksUpsert(
  client: DubCore,
  request?: operations.UpsertLinkRequestBody | undefined,
  options?: RequestOptions,
): APIPromise<
  Result<
    components.LinkSchema,
    | errors.BadRequest
    | errors.Unauthorized
    | errors.Forbidden
    | errors.NotFound
    | errors.Conflict
    | errors.InviteExpired
    | errors.UnprocessableEntity
    | errors.RateLimitExceeded
    | errors.InternalServerError
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  return new APIPromise($do(
    client,
    request,
    options,
  ));
}

async function $do(
  client: DubCore,
  request?: operations.UpsertLinkRequestBody | undefined,
  options?: RequestOptions,
): Promise<
  [
    Result<
      components.LinkSchema,
      | errors.BadRequest
      | errors.Unauthorized
      | errors.Forbidden
      | errors.NotFound
      | errors.Conflict
      | errors.InviteExpired
      | errors.UnprocessableEntity
      | errors.RateLimitExceeded
      | errors.InternalServerError
      | SDKError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) =>
      operations.UpsertLinkRequestBody$outboundSchema.optional().parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = payload === undefined
    ? null
    : encodeJSON("body", payload, { explode: true });

  const path = pathToFunc("/links/upsert")();

  const headers = new Headers(compactMap({
    "Content-Type": "application/json",
    Accept: "application/json",
  }));

  const secConfig = await extractSecurity(client._options.token);
  const securityInput = secConfig == null ? {} : { token: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "upsertLink",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.token,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "PUT",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: [
      "400",
      "401",
      "403",
      "404",
      "409",
      "410",
      "422",
      "429",
      "4XX",
      "500",
      "5XX",
    ],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    components.LinkSchema,
    | errors.BadRequest
    | errors.Unauthorized
    | errors.Forbidden
    | errors.NotFound
    | errors.Conflict
    | errors.InviteExpired
    | errors.UnprocessableEntity
    | errors.RateLimitExceeded
    | errors.InternalServerError
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, components.LinkSchema$inboundSchema),
    M.jsonErr(400, errors.BadRequest$inboundSchema),
    M.jsonErr(401, errors.Unauthorized$inboundSchema),
    M.jsonErr(403, errors.Forbidden$inboundSchema),
    M.jsonErr(404, errors.NotFound$inboundSchema),
    M.jsonErr(409, errors.Conflict$inboundSchema),
    M.jsonErr(410, errors.InviteExpired$inboundSchema),
    M.jsonErr(422, errors.UnprocessableEntity$inboundSchema),
    M.jsonErr(429, errors.RateLimitExceeded$inboundSchema),
    M.jsonErr(500, errors.InternalServerError$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
