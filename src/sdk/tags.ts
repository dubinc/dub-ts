/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { extractSecurity } from "../lib/security.js";
import * as components from "../models/components/index.js";
import * as errors from "../models/errors/index.js";
import * as operations from "../models/operations/index.js";
import * as z from "zod";

export class Tags extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Retrieve a list of tags
     *
     * @remarks
     * Retrieve a list of tags for the authenticated workspace.
     */
    async list(options?: RequestOptions): Promise<Array<components.TagSchema>> {
        const path$ = this.templateURLComponent("/tags")();

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const token$ = await extractSecurity(this.options$.token);
        const security$ = token$ == null ? {} : { token: token$ };
        const context = {
            operationID: "getTags",
            oAuth2Scopes: [],
            securitySource: this.options$.token,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
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
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<Array<components.TagSchema>>()
            .json(200, z.array(components.TagSchema$inboundSchema))
            .json(400, errors.BadRequest$inboundSchema, { err: true })
            .json(401, errors.Unauthorized$inboundSchema, { err: true })
            .json(403, errors.Forbidden$inboundSchema, { err: true })
            .json(404, errors.NotFound$inboundSchema, { err: true })
            .json(409, errors.Conflict$inboundSchema, { err: true })
            .json(410, errors.InviteExpired$inboundSchema, { err: true })
            .json(422, errors.UnprocessableEntity$inboundSchema, { err: true })
            .json(429, errors.RateLimitExceeded$inboundSchema, { err: true })
            .json(500, errors.InternalServerError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Create a new tag
     *
     * @remarks
     * Create a new tag for the authenticated workspace.
     */
    async create(
        request?: operations.CreateTagRequestBody | undefined,
        options?: RequestOptions
    ): Promise<components.TagSchema> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.CreateTagRequestBody$outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const body$ =
            payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/tags")();

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const token$ = await extractSecurity(this.options$.token);
        const security$ = token$ == null ? {} : { token: token$ };
        const context = {
            operationID: "createTag",
            oAuth2Scopes: [],
            securitySource: this.options$.token,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
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
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.TagSchema>()
            .json(201, components.TagSchema$inboundSchema)
            .json(400, errors.BadRequest$inboundSchema, { err: true })
            .json(401, errors.Unauthorized$inboundSchema, { err: true })
            .json(403, errors.Forbidden$inboundSchema, { err: true })
            .json(404, errors.NotFound$inboundSchema, { err: true })
            .json(409, errors.Conflict$inboundSchema, { err: true })
            .json(410, errors.InviteExpired$inboundSchema, { err: true })
            .json(422, errors.UnprocessableEntity$inboundSchema, { err: true })
            .json(429, errors.RateLimitExceeded$inboundSchema, { err: true })
            .json(500, errors.InternalServerError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Update a tag
     *
     * @remarks
     * Update a tag in the workspace.
     */
    async update(
        id: string,
        requestBody?: operations.UpdateTagRequestBody | undefined,
        options?: RequestOptions
    ): Promise<components.TagSchema> {
        const input$: operations.UpdateTagRequest = {
            id: id,
            requestBody: requestBody,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.UpdateTagRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/tags/{id}")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const token$ = await extractSecurity(this.options$.token);
        const security$ = token$ == null ? {} : { token: token$ };
        const context = {
            operationID: "updateTag",
            oAuth2Scopes: [],
            securitySource: this.options$.token,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PATCH",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
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
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.TagSchema>()
            .json(200, components.TagSchema$inboundSchema)
            .json(400, errors.BadRequest$inboundSchema, { err: true })
            .json(401, errors.Unauthorized$inboundSchema, { err: true })
            .json(403, errors.Forbidden$inboundSchema, { err: true })
            .json(404, errors.NotFound$inboundSchema, { err: true })
            .json(409, errors.Conflict$inboundSchema, { err: true })
            .json(410, errors.InviteExpired$inboundSchema, { err: true })
            .json(422, errors.UnprocessableEntity$inboundSchema, { err: true })
            .json(429, errors.RateLimitExceeded$inboundSchema, { err: true })
            .json(500, errors.InternalServerError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
