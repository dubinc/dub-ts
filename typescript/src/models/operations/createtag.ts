/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

/**
 * The color of the tag. If not provided, a random color will be used from the list: red, yellow, green, blue, purple, pink, brown.
 */
export enum Color {
    Red = "red",
    Yellow = "yellow",
    Green = "green",
    Blue = "blue",
    Purple = "purple",
    Pink = "pink",
    Brown = "brown",
}

export type CreateTagRequestBody = {
    /**
     * The name of the tag to create.
     */
    tag: string;
    /**
     * The color of the tag. If not provided, a random color will be used from the list: red, yellow, green, blue, purple, pink, brown.
     */
    color?: Color | undefined;
};

export type CreateTagRequest = {
    /**
     * The ID of the workspace to create the tag for.
     */
    workspaceId: string;
    requestBody?: CreateTagRequestBody | undefined;
};

export type CreateTagResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * The created tag
     */
    tagSchema?: components.TagSchema | undefined;
};

/** @internal */
export const Color$ = z.nativeEnum(Color);

/** @internal */
export namespace CreateTagRequestBody$ {
    export type Inbound = {
        tag: string;
        color?: Color | undefined;
    };

    export const inboundSchema: z.ZodType<CreateTagRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            tag: z.string(),
            color: Color$.optional(),
        })
        .transform((v) => {
            return {
                tag: v.tag,
                ...(v.color === undefined ? null : { color: v.color }),
            };
        });

    export type Outbound = {
        tag: string;
        color?: Color | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateTagRequestBody> = z
        .object({
            tag: z.string(),
            color: Color$.optional(),
        })
        .transform((v) => {
            return {
                tag: v.tag,
                ...(v.color === undefined ? null : { color: v.color }),
            };
        });
}

/** @internal */
export namespace CreateTagRequest$ {
    export type Inbound = {
        workspaceId: string;
        RequestBody?: CreateTagRequestBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<CreateTagRequest, z.ZodTypeDef, Inbound> = z
        .object({
            workspaceId: z.string(),
            RequestBody: z.lazy(() => CreateTagRequestBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                workspaceId: v.workspaceId,
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        workspaceId: string;
        RequestBody?: CreateTagRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateTagRequest> = z
        .object({
            workspaceId: z.string(),
            requestBody: z.lazy(() => CreateTagRequestBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                workspaceId: v.workspaceId,
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}

/** @internal */
export namespace CreateTagResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        TagSchema?: components.TagSchema$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<CreateTagResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            TagSchema: components.TagSchema$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.TagSchema === undefined ? null : { tagSchema: v.TagSchema }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        TagSchema?: components.TagSchema$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateTagResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            tagSchema: components.TagSchema$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.tagSchema === undefined ? null : { TagSchema: v.tagSchema }),
            };
        });
}
