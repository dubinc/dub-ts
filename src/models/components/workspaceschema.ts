/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The plan of the workspace.
 */
export const Plan = {
  Free: "free",
  Pro: "pro",
  Business: "business",
  BusinessPlus: "business plus",
  BusinessExtra: "business extra",
  BusinessMax: "business max",
  Enterprise: "enterprise",
} as const;
/**
 * The plan of the workspace.
 */
export type Plan = ClosedEnum<typeof Plan>;

/**
 * The role of the authenticated user in the workspace.
 */
export const Role = {
  Owner: "owner",
  Member: "member",
} as const;
/**
 * The role of the authenticated user in the workspace.
 */
export type Role = ClosedEnum<typeof Role>;

export type Users = {
  /**
   * The role of the authenticated user in the workspace.
   */
  role: Role;
};

export type Domains = {
  /**
   * The domain name.
   */
  slug: string;
  /**
   * Whether the domain is the primary domain for the workspace.
   */
  primary?: boolean | undefined;
  /**
   * Whether the domain is verified.
   */
  verified?: boolean | undefined;
};

export type WorkspaceSchema = {
  /**
   * The unique ID of the workspace.
   */
  id: string;
  /**
   * The name of the workspace.
   */
  name: string;
  /**
   * The slug of the workspace.
   */
  slug: string;
  /**
   * The logo of the workspace.
   */
  logo?: string | null | undefined;
  /**
   * The invite code of the workspace.
   */
  inviteCode: string | null;
  /**
   * The plan of the workspace.
   */
  plan: Plan;
  /**
   * The Stripe ID of the workspace.
   */
  stripeId: string | null;
  /**
   * The date and time when the billing cycle starts for the workspace.
   */
  billingCycleStart: number;
  /**
   * The date and time when the payment failed for the workspace.
   */
  paymentFailedAt: string | null;
  /**
   * The Stripe Connect ID of the workspace.
   */
  stripeConnectId: string | null;
  /**
   * The total number of links in the workspace.
   */
  totalLinks: number;
  /**
   * The usage of the workspace.
   */
  usage: number;
  /**
   * The usage limit of the workspace.
   */
  usageLimit: number;
  /**
   * The links usage of the workspace.
   */
  linksUsage: number;
  /**
   * The links limit of the workspace.
   */
  linksLimit: number;
  /**
   * The dollar amount of tracked revenue in the current billing cycle (in cents).
   */
  salesUsage: number;
  /**
   * The limit of tracked revenue in the current billing cycle (in cents).
   */
  salesLimit: number;
  /**
   * The domains limit of the workspace.
   */
  domainsLimit: number;
  /**
   * The tags limit of the workspace.
   */
  tagsLimit: number;
  /**
   * The folders usage of the workspace.
   */
  foldersUsage: number;
  /**
   * The folders limit of the workspace.
   */
  foldersLimit: number;
  /**
   * The users limit of the workspace.
   */
  usersLimit: number;
  /**
   * The AI usage of the workspace.
   */
  aiUsage: number;
  /**
   * The AI limit of the workspace.
   */
  aiLimit: number;
  /**
   * Whether the workspace has conversion tracking enabled automatically for new links (d.to/conversions).
   */
  conversionEnabled: boolean;
  /**
   * Whether the workspace has claimed a free .link domain. (dub.link/free)
   */
  dotLinkClaimed: boolean;
  /**
   * Whether the workspace has Dub Partners enabled.
   */
  partnersEnabled: boolean;
  /**
   * The date and time when the workspace was created.
   */
  createdAt: string;
  /**
   * The role of the authenticated user in the workspace.
   */
  users: Array<Users>;
  /**
   * The domains of the workspace.
   */
  domains: Array<Domains>;
  /**
   * The feature flags of the workspace, indicating which features are enabled.
   */
  flags?: { [k: string]: boolean } | undefined;
  /**
   * The miscellaneous key-value store of the workspace.
   */
  store: { [k: string]: any } | null;
  /**
   * Specifies hostnames permitted for client-side click tracking.
   */
  allowedHostnames: Array<string> | null;
};

/** @internal */
export const Plan$inboundSchema: z.ZodNativeEnum<typeof Plan> = z.nativeEnum(
  Plan,
);

/** @internal */
export const Plan$outboundSchema: z.ZodNativeEnum<typeof Plan> =
  Plan$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Plan$ {
  /** @deprecated use `Plan$inboundSchema` instead. */
  export const inboundSchema = Plan$inboundSchema;
  /** @deprecated use `Plan$outboundSchema` instead. */
  export const outboundSchema = Plan$outboundSchema;
}

/** @internal */
export const Role$inboundSchema: z.ZodNativeEnum<typeof Role> = z.nativeEnum(
  Role,
);

/** @internal */
export const Role$outboundSchema: z.ZodNativeEnum<typeof Role> =
  Role$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Role$ {
  /** @deprecated use `Role$inboundSchema` instead. */
  export const inboundSchema = Role$inboundSchema;
  /** @deprecated use `Role$outboundSchema` instead. */
  export const outboundSchema = Role$outboundSchema;
}

/** @internal */
export const Users$inboundSchema: z.ZodType<Users, z.ZodTypeDef, unknown> = z
  .object({
    role: Role$inboundSchema,
  });

/** @internal */
export type Users$Outbound = {
  role: string;
};

/** @internal */
export const Users$outboundSchema: z.ZodType<
  Users$Outbound,
  z.ZodTypeDef,
  Users
> = z.object({
  role: Role$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Users$ {
  /** @deprecated use `Users$inboundSchema` instead. */
  export const inboundSchema = Users$inboundSchema;
  /** @deprecated use `Users$outboundSchema` instead. */
  export const outboundSchema = Users$outboundSchema;
  /** @deprecated use `Users$Outbound` instead. */
  export type Outbound = Users$Outbound;
}

export function usersToJSON(users: Users): string {
  return JSON.stringify(Users$outboundSchema.parse(users));
}

export function usersFromJSON(
  jsonString: string,
): SafeParseResult<Users, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Users$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Users' from JSON`,
  );
}

/** @internal */
export const Domains$inboundSchema: z.ZodType<Domains, z.ZodTypeDef, unknown> =
  z.object({
    slug: z.string(),
    primary: z.boolean().default(false),
    verified: z.boolean().default(false),
  });

/** @internal */
export type Domains$Outbound = {
  slug: string;
  primary: boolean;
  verified: boolean;
};

/** @internal */
export const Domains$outboundSchema: z.ZodType<
  Domains$Outbound,
  z.ZodTypeDef,
  Domains
> = z.object({
  slug: z.string(),
  primary: z.boolean().default(false),
  verified: z.boolean().default(false),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Domains$ {
  /** @deprecated use `Domains$inboundSchema` instead. */
  export const inboundSchema = Domains$inboundSchema;
  /** @deprecated use `Domains$outboundSchema` instead. */
  export const outboundSchema = Domains$outboundSchema;
  /** @deprecated use `Domains$Outbound` instead. */
  export type Outbound = Domains$Outbound;
}

export function domainsToJSON(domains: Domains): string {
  return JSON.stringify(Domains$outboundSchema.parse(domains));
}

export function domainsFromJSON(
  jsonString: string,
): SafeParseResult<Domains, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Domains$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Domains' from JSON`,
  );
}

/** @internal */
export const WorkspaceSchema$inboundSchema: z.ZodType<
  WorkspaceSchema,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  logo: z.nullable(z.string()).default(null),
  inviteCode: z.nullable(z.string()),
  plan: Plan$inboundSchema,
  stripeId: z.nullable(z.string()),
  billingCycleStart: z.number(),
  paymentFailedAt: z.nullable(z.string()),
  stripeConnectId: z.nullable(z.string()),
  totalLinks: z.number(),
  usage: z.number(),
  usageLimit: z.number(),
  linksUsage: z.number(),
  linksLimit: z.number(),
  salesUsage: z.number(),
  salesLimit: z.number(),
  domainsLimit: z.number(),
  tagsLimit: z.number(),
  foldersUsage: z.number(),
  foldersLimit: z.number(),
  usersLimit: z.number(),
  aiUsage: z.number(),
  aiLimit: z.number(),
  conversionEnabled: z.boolean(),
  dotLinkClaimed: z.boolean(),
  partnersEnabled: z.boolean(),
  createdAt: z.string(),
  users: z.array(z.lazy(() => Users$inboundSchema)),
  domains: z.array(z.lazy(() => Domains$inboundSchema)),
  flags: z.record(z.boolean()).optional(),
  store: z.nullable(z.record(z.any())),
  allowedHostnames: z.nullable(z.array(z.string())),
});

/** @internal */
export type WorkspaceSchema$Outbound = {
  id: string;
  name: string;
  slug: string;
  logo: string | null;
  inviteCode: string | null;
  plan: string;
  stripeId: string | null;
  billingCycleStart: number;
  paymentFailedAt: string | null;
  stripeConnectId: string | null;
  totalLinks: number;
  usage: number;
  usageLimit: number;
  linksUsage: number;
  linksLimit: number;
  salesUsage: number;
  salesLimit: number;
  domainsLimit: number;
  tagsLimit: number;
  foldersUsage: number;
  foldersLimit: number;
  usersLimit: number;
  aiUsage: number;
  aiLimit: number;
  conversionEnabled: boolean;
  dotLinkClaimed: boolean;
  partnersEnabled: boolean;
  createdAt: string;
  users: Array<Users$Outbound>;
  domains: Array<Domains$Outbound>;
  flags?: { [k: string]: boolean } | undefined;
  store: { [k: string]: any } | null;
  allowedHostnames: Array<string> | null;
};

/** @internal */
export const WorkspaceSchema$outboundSchema: z.ZodType<
  WorkspaceSchema$Outbound,
  z.ZodTypeDef,
  WorkspaceSchema
> = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  logo: z.nullable(z.string()).default(null),
  inviteCode: z.nullable(z.string()),
  plan: Plan$outboundSchema,
  stripeId: z.nullable(z.string()),
  billingCycleStart: z.number(),
  paymentFailedAt: z.nullable(z.string()),
  stripeConnectId: z.nullable(z.string()),
  totalLinks: z.number(),
  usage: z.number(),
  usageLimit: z.number(),
  linksUsage: z.number(),
  linksLimit: z.number(),
  salesUsage: z.number(),
  salesLimit: z.number(),
  domainsLimit: z.number(),
  tagsLimit: z.number(),
  foldersUsage: z.number(),
  foldersLimit: z.number(),
  usersLimit: z.number(),
  aiUsage: z.number(),
  aiLimit: z.number(),
  conversionEnabled: z.boolean(),
  dotLinkClaimed: z.boolean(),
  partnersEnabled: z.boolean(),
  createdAt: z.string(),
  users: z.array(z.lazy(() => Users$outboundSchema)),
  domains: z.array(z.lazy(() => Domains$outboundSchema)),
  flags: z.record(z.boolean()).optional(),
  store: z.nullable(z.record(z.any())),
  allowedHostnames: z.nullable(z.array(z.string())),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkspaceSchema$ {
  /** @deprecated use `WorkspaceSchema$inboundSchema` instead. */
  export const inboundSchema = WorkspaceSchema$inboundSchema;
  /** @deprecated use `WorkspaceSchema$outboundSchema` instead. */
  export const outboundSchema = WorkspaceSchema$outboundSchema;
  /** @deprecated use `WorkspaceSchema$Outbound` instead. */
  export type Outbound = WorkspaceSchema$Outbound;
}

export function workspaceSchemaToJSON(
  workspaceSchema: WorkspaceSchema,
): string {
  return JSON.stringify(WorkspaceSchema$outboundSchema.parse(workspaceSchema));
}

export function workspaceSchemaFromJSON(
  jsonString: string,
): SafeParseResult<WorkspaceSchema, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WorkspaceSchema$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WorkspaceSchema' from JSON`,
  );
}
