/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

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
import {
  createPageIterator,
  haltIterator,
  PageIterator,
  Paginator,
} from "../types/operations.js";

/**
 * Retrieve a list of domains
 *
 * @remarks
 * Retrieve a list of domains associated with the authenticated workspace.
 */
export async function domainsList(
  client: DubCore,
  request?: operations.ListDomainsRequest | undefined,
  options?: RequestOptions,
): Promise<
  PageIterator<
    Result<
      operations.ListDomainsResponse,
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
    { page: number }
  >
> {
  const parsed = safeParse(
    request,
    (value) =>
      operations.ListDomainsRequest$outboundSchema.optional().parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return haltIterator(parsed);
  }
  const payload = parsed.value;
  const body = null;

  const path = pathToFunc("/domains")();

  const query = encodeFormQuery({
    "archived": payload?.archived,
    "page": payload?.page,
    "pageSize": payload?.pageSize,
    "search": payload?.search,
  });

  const headers = new Headers(compactMap({
    Accept: "application/json",
  }));

  const secConfig = await extractSecurity(client._options.token);
  const securityInput = secConfig == null ? {} : { token: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "listDomains",
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
    return haltIterator(requestRes);
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
    return haltIterator(doResult);
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result, raw] = await M.match<
    operations.ListDomainsResponse,
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
    M.json(200, operations.ListDomainsResponse$inboundSchema, {
      key: "Result",
    }),
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
    return haltIterator(result);
  }

  const nextFunc = (
    responseData: unknown,
  ): {
    next: Paginator<
      Result<
        operations.ListDomainsResponse,
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
    >;
    "~next"?: { page: number };
  } => {
    const page = request?.page ?? 1;
    const nextPage = page + 1;

    if (!responseData) {
      return { next: () => null };
    }

    const results = responseData;

    if (!Array.isArray(results) || !results.length) {
      return { next: () => null };
    }
    const limit = request?.pageSize ?? 50;
    if (results.length < limit) {
      return { next: () => null };
    }

    const nextVal = () =>
      domainsList(
        client,
        {
          ...request,
          page: nextPage,
        },
        options,
      );

    return { next: nextVal, "~next": { page: nextPage } };
  };

  const page = { ...result, ...nextFunc(raw) };
  return { ...page, ...createPageIterator(page, (v) => !v.ok) };
}
