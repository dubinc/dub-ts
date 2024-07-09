/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * The color of the tag. If not provided, a random color will be used from the list: red, yellow, green, blue, purple, pink, brown.
 */
export const Color = {
    Red: "red",
    Yellow: "yellow",
    Green: "green",
    Blue: "blue",
    Purple: "purple",
    Pink: "pink",
    Brown: "brown",
} as const;
/**
 * The color of the tag. If not provided, a random color will be used from the list: red, yellow, green, blue, purple, pink, brown.
 */
export type Color = ClosedEnum<typeof Color>;

export type CreateTagRequestBody = {
    /**
     * The name of the tag to create.
     */
    name?: string | undefined;
    /**
     * The color of the tag. If not provided, a random color will be used from the list: red, yellow, green, blue, purple, pink, brown.
     */
    color?: Color | undefined;
    /**
     * The name of the tag to create.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    tag?: string | undefined;
};

/** @internal */
export const Color$inboundSchema: z.ZodNativeEnum<typeof Color> = z.nativeEnum(Color);

/** @internal */
export const Color$outboundSchema: z.ZodNativeEnum<typeof Color> = Color$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Color$ {
    /** @deprecated use `Color$inboundSchema` instead. */
    export const inboundSchema = Color$inboundSchema;
    /** @deprecated use `Color$outboundSchema` instead. */
    export const outboundSchema = Color$outboundSchema;
}

/** @internal */
export const CreateTagRequestBody$inboundSchema: z.ZodType<
    CreateTagRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string().optional(),
    color: Color$inboundSchema.optional(),
    tag: z.string().optional(),
});

/** @internal */
export type CreateTagRequestBody$Outbound = {
    name?: string | undefined;
    color?: string | undefined;
    tag?: string | undefined;
};

/** @internal */
export const CreateTagRequestBody$outboundSchema: z.ZodType<
    CreateTagRequestBody$Outbound,
    z.ZodTypeDef,
    CreateTagRequestBody
> = z.object({
    name: z.string().optional(),
    color: Color$outboundSchema.optional(),
    tag: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTagRequestBody$ {
    /** @deprecated use `CreateTagRequestBody$inboundSchema` instead. */
    export const inboundSchema = CreateTagRequestBody$inboundSchema;
    /** @deprecated use `CreateTagRequestBody$outboundSchema` instead. */
    export const outboundSchema = CreateTagRequestBody$outboundSchema;
    /** @deprecated use `CreateTagRequestBody$Outbound` instead. */
    export type Outbound = CreateTagRequestBody$Outbound;
}
