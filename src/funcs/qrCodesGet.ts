/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { DubCore } from "../core.js";
import { encodeFormQuery } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
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
import { Result } from "../types/fp.js";

/**
 * Retrieve a QR code
 *
 * @remarks
 * Retrieve a QR code for a link.
 */
export async function qrCodesGet(
  client: DubCore,
  request: operations.GetQRCodeRequest,
  options?: RequestOptions,
): Promise<
  Result<
    string,
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
  const parsed = safeParse(
    request,
    (value) => operations.GetQRCodeRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const path = pathToFunc("/qr")();

  const query = encodeFormQuery({
    "bgColor": payload.bgColor,
    "fgColor": payload.fgColor,
    "hideLogo": payload.hideLogo,
    "includeMargin": payload.includeMargin,
    "level": payload.level,
    "logo": payload.logo,
    "margin": payload.margin,
    "size": payload.size,
    "url": payload.url,
  });

  const headers = new Headers(compactMap({
    Accept: "image/png",
  }));

  const secConfig = await extractSecurity(client._options.token);
  const securityInput = secConfig == null ? {} : { token: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "getQRCode",
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
    method: "GET",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    query: query,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
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
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    string,
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
    M.text(200, z.string(), { ctype: "image/png" }),
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
    return result;
  }

  return result;
}
