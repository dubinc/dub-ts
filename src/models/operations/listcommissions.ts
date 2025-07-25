/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const Type = {
  Click: "click",
  Lead: "lead",
  Sale: "sale",
  Custom: "custom",
} as const;
export type Type = ClosedEnum<typeof Type>;

/**
 * Filter the list of commissions by their corresponding status.
 */
export const QueryParamStatus = {
  Pending: "pending",
  Processed: "processed",
  Paid: "paid",
  Refunded: "refunded",
  Duplicate: "duplicate",
  Fraud: "fraud",
  Canceled: "canceled",
} as const;
/**
 * Filter the list of commissions by their corresponding status.
 */
export type QueryParamStatus = ClosedEnum<typeof QueryParamStatus>;

/**
 * The field to sort the list of commissions by.
 */
export const ListCommissionsQueryParamSortBy = {
  CreatedAt: "createdAt",
  Amount: "amount",
} as const;
/**
 * The field to sort the list of commissions by.
 */
export type ListCommissionsQueryParamSortBy = ClosedEnum<
  typeof ListCommissionsQueryParamSortBy
>;

/**
 * The sort order for the list of commissions.
 */
export const ListCommissionsQueryParamSortOrder = {
  Asc: "asc",
  Desc: "desc",
} as const;
/**
 * The sort order for the list of commissions.
 */
export type ListCommissionsQueryParamSortOrder = ClosedEnum<
  typeof ListCommissionsQueryParamSortOrder
>;

/**
 * The interval to retrieve commissions for.
 */
export const ListCommissionsQueryParamInterval = {
  TwentyFourh: "24h",
  Sevend: "7d",
  Thirtyd: "30d",
  Ninetyd: "90d",
  Oney: "1y",
  Mtd: "mtd",
  Qtd: "qtd",
  Ytd: "ytd",
  All: "all",
} as const;
/**
 * The interval to retrieve commissions for.
 */
export type ListCommissionsQueryParamInterval = ClosedEnum<
  typeof ListCommissionsQueryParamInterval
>;

export type ListCommissionsRequest = {
  type?: Type | undefined;
  /**
   * Filter the list of commissions by the associated customer.
   */
  customerId?: string | undefined;
  /**
   * Filter the list of commissions by the associated payout.
   */
  payoutId?: string | undefined;
  /**
   * Filter the list of commissions by the associated partner.
   */
  partnerId?: string | undefined;
  /**
   * Filter the list of commissions by the associated invoice. Since invoiceId is unique on a per-program basis, this will only return one commission per invoice.
   */
  invoiceId?: string | undefined;
  /**
   * Filter the list of commissions by their corresponding status.
   */
  status?: QueryParamStatus | undefined;
  /**
   * The field to sort the list of commissions by.
   */
  sortBy?: ListCommissionsQueryParamSortBy | undefined;
  /**
   * The sort order for the list of commissions.
   */
  sortOrder?: ListCommissionsQueryParamSortOrder | undefined;
  /**
   * The interval to retrieve commissions for.
   */
  interval?: ListCommissionsQueryParamInterval | undefined;
  /**
   * The start date of the date range to filter the commissions by.
   */
  start?: string | undefined;
  /**
   * The end date of the date range to filter the commissions by.
   */
  end?: string | undefined;
  /**
   * The page number for pagination.
   */
  page?: number | undefined;
  /**
   * The number of items per page.
   */
  pageSize?: number | undefined;
};

export const ListCommissionsType = {
  Click: "click",
  Lead: "lead",
  Sale: "sale",
  Custom: "custom",
} as const;
export type ListCommissionsType = ClosedEnum<typeof ListCommissionsType>;

export const ListCommissionsStatus = {
  Pending: "pending",
  Processed: "processed",
  Paid: "paid",
  Refunded: "refunded",
  Duplicate: "duplicate",
  Fraud: "fraud",
  Canceled: "canceled",
} as const;
export type ListCommissionsStatus = ClosedEnum<typeof ListCommissionsStatus>;

export type ListCommissionsPartner = {
  /**
   * The partner's unique ID on Dub.
   */
  id: string;
  /**
   * The partner's full legal name.
   */
  name: string;
  /**
   * The partner's email address. Should be a unique value across Dub.
   */
  email: string | null;
  /**
   * The partner's avatar image.
   */
  image: string | null;
  /**
   * The date when the partner enabled payouts.
   */
  payoutsEnabledAt: string | null;
  /**
   * The partner's country (required for tax purposes).
   */
  country: string | null;
};

export type ListCommissionsCustomer = {
  /**
   * The unique ID of the customer. You may use either the customer's `id` on Dub (obtained via `/customers` endpoint) or their `externalId` (unique ID within your system, prefixed with `ext_`, e.g. `ext_123`).
   */
  id: string;
  /**
   * Unique identifier for the customer in the client's app.
   */
  externalId: string;
  /**
   * Name of the customer.
   */
  name: string;
  /**
   * Email of the customer.
   */
  email?: string | null | undefined;
  /**
   * Avatar URL of the customer.
   */
  avatar?: string | null | undefined;
  /**
   * Country of the customer.
   */
  country?: string | null | undefined;
  /**
   * Total number of sales for the customer.
   */
  sales?: number | null | undefined;
  /**
   * Total amount of sales for the customer.
   */
  saleAmount?: number | null | undefined;
  /**
   * The date the customer was created.
   */
  createdAt: string;
};

export type ListCommissionsResponseBody = {
  /**
   * The commission's unique ID on Dub.
   */
  id: string;
  type?: ListCommissionsType | undefined;
  amount: number;
  earnings: number;
  currency: string;
  status: ListCommissionsStatus;
  invoiceId: string | null;
  description: string | null;
  quantity: number;
  /**
   * The user who created the manual commission.
   */
  userId?: string | null | undefined;
  createdAt: string;
  updatedAt: string;
  partner: ListCommissionsPartner;
  customer?: ListCommissionsCustomer | null | undefined;
};

/** @internal */
export const Type$inboundSchema: z.ZodNativeEnum<typeof Type> = z.nativeEnum(
  Type,
);

/** @internal */
export const Type$outboundSchema: z.ZodNativeEnum<typeof Type> =
  Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Type$ {
  /** @deprecated use `Type$inboundSchema` instead. */
  export const inboundSchema = Type$inboundSchema;
  /** @deprecated use `Type$outboundSchema` instead. */
  export const outboundSchema = Type$outboundSchema;
}

/** @internal */
export const QueryParamStatus$inboundSchema: z.ZodNativeEnum<
  typeof QueryParamStatus
> = z.nativeEnum(QueryParamStatus);

/** @internal */
export const QueryParamStatus$outboundSchema: z.ZodNativeEnum<
  typeof QueryParamStatus
> = QueryParamStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryParamStatus$ {
  /** @deprecated use `QueryParamStatus$inboundSchema` instead. */
  export const inboundSchema = QueryParamStatus$inboundSchema;
  /** @deprecated use `QueryParamStatus$outboundSchema` instead. */
  export const outboundSchema = QueryParamStatus$outboundSchema;
}

/** @internal */
export const ListCommissionsQueryParamSortBy$inboundSchema: z.ZodNativeEnum<
  typeof ListCommissionsQueryParamSortBy
> = z.nativeEnum(ListCommissionsQueryParamSortBy);

/** @internal */
export const ListCommissionsQueryParamSortBy$outboundSchema: z.ZodNativeEnum<
  typeof ListCommissionsQueryParamSortBy
> = ListCommissionsQueryParamSortBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCommissionsQueryParamSortBy$ {
  /** @deprecated use `ListCommissionsQueryParamSortBy$inboundSchema` instead. */
  export const inboundSchema = ListCommissionsQueryParamSortBy$inboundSchema;
  /** @deprecated use `ListCommissionsQueryParamSortBy$outboundSchema` instead. */
  export const outboundSchema = ListCommissionsQueryParamSortBy$outboundSchema;
}

/** @internal */
export const ListCommissionsQueryParamSortOrder$inboundSchema: z.ZodNativeEnum<
  typeof ListCommissionsQueryParamSortOrder
> = z.nativeEnum(ListCommissionsQueryParamSortOrder);

/** @internal */
export const ListCommissionsQueryParamSortOrder$outboundSchema: z.ZodNativeEnum<
  typeof ListCommissionsQueryParamSortOrder
> = ListCommissionsQueryParamSortOrder$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCommissionsQueryParamSortOrder$ {
  /** @deprecated use `ListCommissionsQueryParamSortOrder$inboundSchema` instead. */
  export const inboundSchema = ListCommissionsQueryParamSortOrder$inboundSchema;
  /** @deprecated use `ListCommissionsQueryParamSortOrder$outboundSchema` instead. */
  export const outboundSchema =
    ListCommissionsQueryParamSortOrder$outboundSchema;
}

/** @internal */
export const ListCommissionsQueryParamInterval$inboundSchema: z.ZodNativeEnum<
  typeof ListCommissionsQueryParamInterval
> = z.nativeEnum(ListCommissionsQueryParamInterval);

/** @internal */
export const ListCommissionsQueryParamInterval$outboundSchema: z.ZodNativeEnum<
  typeof ListCommissionsQueryParamInterval
> = ListCommissionsQueryParamInterval$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCommissionsQueryParamInterval$ {
  /** @deprecated use `ListCommissionsQueryParamInterval$inboundSchema` instead. */
  export const inboundSchema = ListCommissionsQueryParamInterval$inboundSchema;
  /** @deprecated use `ListCommissionsQueryParamInterval$outboundSchema` instead. */
  export const outboundSchema =
    ListCommissionsQueryParamInterval$outboundSchema;
}

/** @internal */
export const ListCommissionsRequest$inboundSchema: z.ZodType<
  ListCommissionsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: Type$inboundSchema.optional(),
  customerId: z.string().optional(),
  payoutId: z.string().optional(),
  partnerId: z.string().optional(),
  invoiceId: z.string().optional(),
  status: QueryParamStatus$inboundSchema.optional(),
  sortBy: ListCommissionsQueryParamSortBy$inboundSchema.default("createdAt"),
  sortOrder: ListCommissionsQueryParamSortOrder$inboundSchema.default("desc"),
  interval: ListCommissionsQueryParamInterval$inboundSchema.default("all"),
  start: z.string().optional(),
  end: z.string().optional(),
  page: z.number().default(1),
  pageSize: z.number().default(100),
});

/** @internal */
export type ListCommissionsRequest$Outbound = {
  type?: string | undefined;
  customerId?: string | undefined;
  payoutId?: string | undefined;
  partnerId?: string | undefined;
  invoiceId?: string | undefined;
  status?: string | undefined;
  sortBy: string;
  sortOrder: string;
  interval: string;
  start?: string | undefined;
  end?: string | undefined;
  page: number;
  pageSize: number;
};

/** @internal */
export const ListCommissionsRequest$outboundSchema: z.ZodType<
  ListCommissionsRequest$Outbound,
  z.ZodTypeDef,
  ListCommissionsRequest
> = z.object({
  type: Type$outboundSchema.optional(),
  customerId: z.string().optional(),
  payoutId: z.string().optional(),
  partnerId: z.string().optional(),
  invoiceId: z.string().optional(),
  status: QueryParamStatus$outboundSchema.optional(),
  sortBy: ListCommissionsQueryParamSortBy$outboundSchema.default("createdAt"),
  sortOrder: ListCommissionsQueryParamSortOrder$outboundSchema.default("desc"),
  interval: ListCommissionsQueryParamInterval$outboundSchema.default("all"),
  start: z.string().optional(),
  end: z.string().optional(),
  page: z.number().default(1),
  pageSize: z.number().default(100),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCommissionsRequest$ {
  /** @deprecated use `ListCommissionsRequest$inboundSchema` instead. */
  export const inboundSchema = ListCommissionsRequest$inboundSchema;
  /** @deprecated use `ListCommissionsRequest$outboundSchema` instead. */
  export const outboundSchema = ListCommissionsRequest$outboundSchema;
  /** @deprecated use `ListCommissionsRequest$Outbound` instead. */
  export type Outbound = ListCommissionsRequest$Outbound;
}

export function listCommissionsRequestToJSON(
  listCommissionsRequest: ListCommissionsRequest,
): string {
  return JSON.stringify(
    ListCommissionsRequest$outboundSchema.parse(listCommissionsRequest),
  );
}

export function listCommissionsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListCommissionsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCommissionsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCommissionsRequest' from JSON`,
  );
}

/** @internal */
export const ListCommissionsType$inboundSchema: z.ZodNativeEnum<
  typeof ListCommissionsType
> = z.nativeEnum(ListCommissionsType);

/** @internal */
export const ListCommissionsType$outboundSchema: z.ZodNativeEnum<
  typeof ListCommissionsType
> = ListCommissionsType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCommissionsType$ {
  /** @deprecated use `ListCommissionsType$inboundSchema` instead. */
  export const inboundSchema = ListCommissionsType$inboundSchema;
  /** @deprecated use `ListCommissionsType$outboundSchema` instead. */
  export const outboundSchema = ListCommissionsType$outboundSchema;
}

/** @internal */
export const ListCommissionsStatus$inboundSchema: z.ZodNativeEnum<
  typeof ListCommissionsStatus
> = z.nativeEnum(ListCommissionsStatus);

/** @internal */
export const ListCommissionsStatus$outboundSchema: z.ZodNativeEnum<
  typeof ListCommissionsStatus
> = ListCommissionsStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCommissionsStatus$ {
  /** @deprecated use `ListCommissionsStatus$inboundSchema` instead. */
  export const inboundSchema = ListCommissionsStatus$inboundSchema;
  /** @deprecated use `ListCommissionsStatus$outboundSchema` instead. */
  export const outboundSchema = ListCommissionsStatus$outboundSchema;
}

/** @internal */
export const ListCommissionsPartner$inboundSchema: z.ZodType<
  ListCommissionsPartner,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.nullable(z.string()),
  image: z.nullable(z.string()),
  payoutsEnabledAt: z.nullable(z.string()),
  country: z.nullable(z.string()),
});

/** @internal */
export type ListCommissionsPartner$Outbound = {
  id: string;
  name: string;
  email: string | null;
  image: string | null;
  payoutsEnabledAt: string | null;
  country: string | null;
};

/** @internal */
export const ListCommissionsPartner$outboundSchema: z.ZodType<
  ListCommissionsPartner$Outbound,
  z.ZodTypeDef,
  ListCommissionsPartner
> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.nullable(z.string()),
  image: z.nullable(z.string()),
  payoutsEnabledAt: z.nullable(z.string()),
  country: z.nullable(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCommissionsPartner$ {
  /** @deprecated use `ListCommissionsPartner$inboundSchema` instead. */
  export const inboundSchema = ListCommissionsPartner$inboundSchema;
  /** @deprecated use `ListCommissionsPartner$outboundSchema` instead. */
  export const outboundSchema = ListCommissionsPartner$outboundSchema;
  /** @deprecated use `ListCommissionsPartner$Outbound` instead. */
  export type Outbound = ListCommissionsPartner$Outbound;
}

export function listCommissionsPartnerToJSON(
  listCommissionsPartner: ListCommissionsPartner,
): string {
  return JSON.stringify(
    ListCommissionsPartner$outboundSchema.parse(listCommissionsPartner),
  );
}

export function listCommissionsPartnerFromJSON(
  jsonString: string,
): SafeParseResult<ListCommissionsPartner, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCommissionsPartner$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCommissionsPartner' from JSON`,
  );
}

/** @internal */
export const ListCommissionsCustomer$inboundSchema: z.ZodType<
  ListCommissionsCustomer,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  externalId: z.string(),
  name: z.string(),
  email: z.nullable(z.string()).optional(),
  avatar: z.nullable(z.string()).optional(),
  country: z.nullable(z.string()).optional(),
  sales: z.nullable(z.number()).optional(),
  saleAmount: z.nullable(z.number()).optional(),
  createdAt: z.string(),
});

/** @internal */
export type ListCommissionsCustomer$Outbound = {
  id: string;
  externalId: string;
  name: string;
  email?: string | null | undefined;
  avatar?: string | null | undefined;
  country?: string | null | undefined;
  sales?: number | null | undefined;
  saleAmount?: number | null | undefined;
  createdAt: string;
};

/** @internal */
export const ListCommissionsCustomer$outboundSchema: z.ZodType<
  ListCommissionsCustomer$Outbound,
  z.ZodTypeDef,
  ListCommissionsCustomer
> = z.object({
  id: z.string(),
  externalId: z.string(),
  name: z.string(),
  email: z.nullable(z.string()).optional(),
  avatar: z.nullable(z.string()).optional(),
  country: z.nullable(z.string()).optional(),
  sales: z.nullable(z.number()).optional(),
  saleAmount: z.nullable(z.number()).optional(),
  createdAt: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCommissionsCustomer$ {
  /** @deprecated use `ListCommissionsCustomer$inboundSchema` instead. */
  export const inboundSchema = ListCommissionsCustomer$inboundSchema;
  /** @deprecated use `ListCommissionsCustomer$outboundSchema` instead. */
  export const outboundSchema = ListCommissionsCustomer$outboundSchema;
  /** @deprecated use `ListCommissionsCustomer$Outbound` instead. */
  export type Outbound = ListCommissionsCustomer$Outbound;
}

export function listCommissionsCustomerToJSON(
  listCommissionsCustomer: ListCommissionsCustomer,
): string {
  return JSON.stringify(
    ListCommissionsCustomer$outboundSchema.parse(listCommissionsCustomer),
  );
}

export function listCommissionsCustomerFromJSON(
  jsonString: string,
): SafeParseResult<ListCommissionsCustomer, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCommissionsCustomer$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCommissionsCustomer' from JSON`,
  );
}

/** @internal */
export const ListCommissionsResponseBody$inboundSchema: z.ZodType<
  ListCommissionsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  type: ListCommissionsType$inboundSchema.optional(),
  amount: z.number(),
  earnings: z.number(),
  currency: z.string(),
  status: ListCommissionsStatus$inboundSchema,
  invoiceId: z.nullable(z.string()),
  description: z.nullable(z.string()),
  quantity: z.number(),
  userId: z.nullable(z.string()).optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
  partner: z.lazy(() => ListCommissionsPartner$inboundSchema),
  customer: z.nullable(z.lazy(() => ListCommissionsCustomer$inboundSchema))
    .optional(),
});

/** @internal */
export type ListCommissionsResponseBody$Outbound = {
  id: string;
  type?: string | undefined;
  amount: number;
  earnings: number;
  currency: string;
  status: string;
  invoiceId: string | null;
  description: string | null;
  quantity: number;
  userId?: string | null | undefined;
  createdAt: string;
  updatedAt: string;
  partner: ListCommissionsPartner$Outbound;
  customer?: ListCommissionsCustomer$Outbound | null | undefined;
};

/** @internal */
export const ListCommissionsResponseBody$outboundSchema: z.ZodType<
  ListCommissionsResponseBody$Outbound,
  z.ZodTypeDef,
  ListCommissionsResponseBody
> = z.object({
  id: z.string(),
  type: ListCommissionsType$outboundSchema.optional(),
  amount: z.number(),
  earnings: z.number(),
  currency: z.string(),
  status: ListCommissionsStatus$outboundSchema,
  invoiceId: z.nullable(z.string()),
  description: z.nullable(z.string()),
  quantity: z.number(),
  userId: z.nullable(z.string()).optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
  partner: z.lazy(() => ListCommissionsPartner$outboundSchema),
  customer: z.nullable(z.lazy(() => ListCommissionsCustomer$outboundSchema))
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCommissionsResponseBody$ {
  /** @deprecated use `ListCommissionsResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListCommissionsResponseBody$inboundSchema;
  /** @deprecated use `ListCommissionsResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListCommissionsResponseBody$outboundSchema;
  /** @deprecated use `ListCommissionsResponseBody$Outbound` instead. */
  export type Outbound = ListCommissionsResponseBody$Outbound;
}

export function listCommissionsResponseBodyToJSON(
  listCommissionsResponseBody: ListCommissionsResponseBody,
): string {
  return JSON.stringify(
    ListCommissionsResponseBody$outboundSchema.parse(
      listCommissionsResponseBody,
    ),
  );
}

export function listCommissionsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ListCommissionsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCommissionsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCommissionsResponseBody' from JSON`,
  );
}
