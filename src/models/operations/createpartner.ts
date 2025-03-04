/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Country where the partner is based.
 */
export const Country = {
  Af: "AF",
  Al: "AL",
  Dz: "DZ",
  As: "AS",
  Ad: "AD",
  Ao: "AO",
  Ai: "AI",
  Aq: "AQ",
  Ag: "AG",
  Ar: "AR",
  Am: "AM",
  Aw: "AW",
  Au: "AU",
  At: "AT",
  Az: "AZ",
  Bs: "BS",
  Bh: "BH",
  Bd: "BD",
  Bb: "BB",
  By: "BY",
  Be: "BE",
  Bz: "BZ",
  Bj: "BJ",
  Bm: "BM",
  Bt: "BT",
  Bo: "BO",
  Ba: "BA",
  Bw: "BW",
  Bv: "BV",
  Br: "BR",
  Io: "IO",
  Bn: "BN",
  Bg: "BG",
  Bf: "BF",
  Bi: "BI",
  Kh: "KH",
  Cm: "CM",
  Ca: "CA",
  Cv: "CV",
  Ky: "KY",
  Cf: "CF",
  Td: "TD",
  Cl: "CL",
  Cn: "CN",
  Cx: "CX",
  Cc: "CC",
  Co: "CO",
  Km: "KM",
  Cg: "CG",
  Cd: "CD",
  Ck: "CK",
  Cr: "CR",
  Ci: "CI",
  Hr: "HR",
  Cu: "CU",
  Cy: "CY",
  Cz: "CZ",
  Dk: "DK",
  Dj: "DJ",
  Dm: "DM",
  Do: "DO",
  Ec: "EC",
  Eg: "EG",
  Sv: "SV",
  Gq: "GQ",
  Er: "ER",
  Ee: "EE",
  Et: "ET",
  Fk: "FK",
  Fo: "FO",
  Fj: "FJ",
  Fi: "FI",
  Fr: "FR",
  Gf: "GF",
  Pf: "PF",
  Tf: "TF",
  Ga: "GA",
  Gm: "GM",
  Ge: "GE",
  De: "DE",
  Gh: "GH",
  Gi: "GI",
  Gr: "GR",
  Gl: "GL",
  Gd: "GD",
  Gp: "GP",
  Gu: "GU",
  Gt: "GT",
  Gn: "GN",
  Gw: "GW",
  Gy: "GY",
  Ht: "HT",
  Hm: "HM",
  Va: "VA",
  Hn: "HN",
  Hk: "HK",
  Hu: "HU",
  Is: "IS",
  In: "IN",
  Id: "ID",
  Ir: "IR",
  Iq: "IQ",
  Ie: "IE",
  Il: "IL",
  It: "IT",
  Jm: "JM",
  Jp: "JP",
  Jo: "JO",
  Kz: "KZ",
  Ke: "KE",
  Ki: "KI",
  Kp: "KP",
  Kr: "KR",
  Kw: "KW",
  Kg: "KG",
  La: "LA",
  Lv: "LV",
  Lb: "LB",
  Ls: "LS",
  Lr: "LR",
  Ly: "LY",
  Li: "LI",
  Lt: "LT",
  Lu: "LU",
  Mo: "MO",
  Mg: "MG",
  Mw: "MW",
  My: "MY",
  Mv: "MV",
  Ml: "ML",
  Mt: "MT",
  Mh: "MH",
  Mq: "MQ",
  Mr: "MR",
  Mu: "MU",
  Yt: "YT",
  Mx: "MX",
  Fm: "FM",
  Md: "MD",
  Mc: "MC",
  Mn: "MN",
  Ms: "MS",
  Ma: "MA",
  Mz: "MZ",
  Mm: "MM",
  Na: "NA",
  Nr: "NR",
  Np: "NP",
  Nl: "NL",
  Nc: "NC",
  Nz: "NZ",
  Ni: "NI",
  Ne: "NE",
  Ng: "NG",
  Nu: "NU",
  Nf: "NF",
  Mk: "MK",
  Mp: "MP",
  No: "NO",
  Om: "OM",
  Pk: "PK",
  Pw: "PW",
  Ps: "PS",
  Pa: "PA",
  Pg: "PG",
  Py: "PY",
  Pe: "PE",
  Ph: "PH",
  Pn: "PN",
  Pl: "PL",
  Pt: "PT",
  Pr: "PR",
  Qa: "QA",
  Re: "RE",
  Ro: "RO",
  Ru: "RU",
  Rw: "RW",
  Sh: "SH",
  Kn: "KN",
  Lc: "LC",
  Pm: "PM",
  Vc: "VC",
  Ws: "WS",
  Sm: "SM",
  St: "ST",
  Sa: "SA",
  Sn: "SN",
  Sc: "SC",
  Sl: "SL",
  Sg: "SG",
  Sk: "SK",
  Si: "SI",
  Sb: "SB",
  So: "SO",
  Za: "ZA",
  Gs: "GS",
  Es: "ES",
  Lk: "LK",
  Sd: "SD",
  Sr: "SR",
  Sj: "SJ",
  Sz: "SZ",
  Se: "SE",
  Ch: "CH",
  Sy: "SY",
  Tw: "TW",
  Tj: "TJ",
  Tz: "TZ",
  Th: "TH",
  Tl: "TL",
  Tg: "TG",
  Tk: "TK",
  To: "TO",
  Tt: "TT",
  Tn: "TN",
  Tr: "TR",
  Tm: "TM",
  Tc: "TC",
  Tv: "TV",
  Ug: "UG",
  Ua: "UA",
  Ae: "AE",
  Gb: "GB",
  Us: "US",
  Um: "UM",
  Uy: "UY",
  Uz: "UZ",
  Vu: "VU",
  Ve: "VE",
  Vn: "VN",
  Vg: "VG",
  Vi: "VI",
  Wf: "WF",
  Eh: "EH",
  Ye: "YE",
  Zm: "ZM",
  Zw: "ZW",
  Ax: "AX",
  Bq: "BQ",
  Cw: "CW",
  Gg: "GG",
  Im: "IM",
  Je: "JE",
  Me: "ME",
  Bl: "BL",
  Mf: "MF",
  Rs: "RS",
  Sx: "SX",
  Ss: "SS",
  Xk: "XK",
} as const;
/**
 * Country where the partner is based.
 */
export type Country = ClosedEnum<typeof Country>;

/**
 * The unique IDs of the tags assigned to the short link.
 */
export type CreatePartnerTagIds = string | Array<string>;

/**
 * The unique name of the tags assigned to the short link (case insensitive).
 */
export type CreatePartnerTagNames = string | Array<string>;

/**
 * Additional properties that you can pass to the partner's short link. Will be used to override the default link properties for this partner.
 */
export type LinkProps = {
  /**
   * The ID of the link in your database. If set, it can be used to identify the link in future API requests (must be prefixed with 'ext_' when passed as a query parameter). This key is unique across your workspace.
   */
  externalId?: string | null | undefined;
  /**
   * The ID of the tenant that created the link inside your system. If set, it can be used to fetch all links for a tenant.
   */
  tenantId?: string | null | undefined;
  /**
   * The prefix of the short link slug for randomly-generated keys (e.g. if prefix is `/c/`, generated keys will be in the `/c/:key` format). Will be ignored if `key` is provided.
   */
  prefix?: string | undefined;
  /**
   * Whether the short link is archived. Defaults to `false` if not provided.
   */
  archived?: boolean | undefined;
  /**
   * The unique IDs of the tags assigned to the short link.
   */
  tagIds?: string | Array<string> | undefined;
  /**
   * The unique name of the tags assigned to the short link (case insensitive).
   */
  tagNames?: string | Array<string> | undefined;
  /**
   * The unique ID existing folder to assign the short link to.
   */
  folderId?: string | null | undefined;
  /**
   * The comments for the short link.
   */
  comments?: string | null | undefined;
  /**
   * The date and time when the short link will expire at.
   */
  expiresAt?: string | null | undefined;
  /**
   * The URL to redirect to when the short link has expired.
   */
  expiredUrl?: string | null | undefined;
  /**
   * The password required to access the destination URL of the short link.
   */
  password?: string | null | undefined;
  /**
   * Whether the short link uses Custom Social Media Cards feature. Defaults to `false` if not provided.
   */
  proxy?: boolean | undefined;
  /**
   * The custom link preview title (og:title). Will be used for Custom Social Media Cards if `proxy` is true. Learn more: https://d.to/og
   */
  title?: string | null | undefined;
  /**
   * The custom link preview description (og:description). Will be used for Custom Social Media Cards if `proxy` is true. Learn more: https://d.to/og
   */
  description?: string | null | undefined;
  /**
   * The custom link preview image (og:image). Will be used for Custom Social Media Cards if `proxy` is true. Learn more: https://d.to/og
   */
  image?: string | null | undefined;
  /**
   * The custom link preview video (og:video). Will be used for Custom Social Media Cards if `proxy` is true. Learn more: https://d.to/og
   */
  video?: string | null | undefined;
  /**
   * Whether the short link uses link cloaking. Defaults to `false` if not provided.
   */
  rewrite?: boolean | undefined;
  /**
   * The iOS destination URL for the short link for iOS device targeting.
   */
  ios?: string | null | undefined;
  /**
   * The Android destination URL for the short link for Android device targeting.
   */
  android?: string | null | undefined;
  /**
   * Allow search engines to index your short link. Defaults to `false` if not provided. Learn more: https://d.to/noindex
   */
  doIndex?: boolean | undefined;
  /**
   * The UTM source of the short link. If set, this will populate or override the UTM source in the destination URL.
   */
  utmSource?: string | null | undefined;
  /**
   * The UTM medium of the short link. If set, this will populate or override the UTM medium in the destination URL.
   */
  utmMedium?: string | null | undefined;
  /**
   * The UTM campaign of the short link. If set, this will populate or override the UTM campaign in the destination URL.
   */
  utmCampaign?: string | null | undefined;
  /**
   * The UTM term of the short link. If set, this will populate or override the UTM term in the destination URL.
   */
  utmTerm?: string | null | undefined;
  /**
   * The UTM content of the short link. If set, this will populate or override the UTM content in the destination URL.
   */
  utmContent?: string | null | undefined;
  /**
   * The referral tag of the short link. If set, this will populate or override the `ref` query parameter in the destination URL.
   */
  ref?: string | null | undefined;
};

export type CreatePartnerRequestBody = {
  /**
   * The ID of the program to create a partner for.
   */
  programId: string;
  /**
   * Full legal name of the partner.
   */
  name: string;
  /**
   * Email for the partner in your system. Partners will be able to claim their profile by signing up to Dub Partners with this email.
   */
  email: string;
  /**
   * A unique username for the partner in your system (max 100 characters). This will be used to create a short link for the partner using your program's default domain. If not provided, Dub will try to generate a username from the partner's name or email.
   */
  username?: string | null | undefined;
  /**
   * Avatar image for the partner – if not provided, a default avatar will be used.
   */
  image?: string | null | undefined;
  /**
   * Country where the partner is based.
   */
  country?: Country | null | undefined;
  /**
   * A brief description of the partner and their background.
   */
  description?: string | null | undefined;
  /**
   * The ID of the partner in your system.
   */
  tenantId?: string | undefined;
  /**
   * Additional properties that you can pass to the partner's short link. Will be used to override the default link properties for this partner.
   */
  linkProps?: LinkProps | undefined;
};

export const Status = {
  Approved: "approved",
  Pending: "pending",
  Rejected: "rejected",
} as const;
export type Status = ClosedEnum<typeof Status>;

export type Links = {
  /**
   * The unique ID of the short link.
   */
  id: string;
  /**
   * The domain of the short link. If not provided, the primary domain for the workspace will be used (or `dub.sh` if the workspace has no domains).
   */
  domain: string;
  /**
   * The short link slug. If not provided, a random 7-character slug will be generated.
   */
  key: string;
  /**
   * The full URL of the short link, including the https protocol (e.g. `https://dub.sh/try`).
   */
  shortLink: string;
  /**
   * The destination URL of the short link.
   */
  url: string;
  /**
   * The number of clicks on the short link.
   */
  clicks?: number | undefined;
  /**
   * The number of leads the short links has generated.
   */
  leads?: number | undefined;
  /**
   * The number of sales the short links has generated.
   */
  sales?: number | undefined;
  /**
   * The total dollar amount of sales the short links has generated (in cents).
   */
  saleAmount?: number | undefined;
};

/**
 * The created partner
 */
export type CreatePartnerResponseBody = {
  id: string;
  name: string;
  email: string | null;
  image: string | null;
  description?: string | null | undefined;
  country: string | null;
  payoutsEnabled: boolean;
  createdAt: string;
  status: Status;
  programId: string;
  tenantId: string | null;
  links: Array<Links> | null;
  clicks?: number | undefined;
  leads?: number | undefined;
  sales?: number | undefined;
  saleAmount?: number | undefined;
  earnings?: number | undefined;
  applicationId?: string | null | undefined;
};

/** @internal */
export const Country$inboundSchema: z.ZodNativeEnum<typeof Country> = z
  .nativeEnum(Country);

/** @internal */
export const Country$outboundSchema: z.ZodNativeEnum<typeof Country> =
  Country$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Country$ {
  /** @deprecated use `Country$inboundSchema` instead. */
  export const inboundSchema = Country$inboundSchema;
  /** @deprecated use `Country$outboundSchema` instead. */
  export const outboundSchema = Country$outboundSchema;
}

/** @internal */
export const CreatePartnerTagIds$inboundSchema: z.ZodType<
  CreatePartnerTagIds,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type CreatePartnerTagIds$Outbound = string | Array<string>;

/** @internal */
export const CreatePartnerTagIds$outboundSchema: z.ZodType<
  CreatePartnerTagIds$Outbound,
  z.ZodTypeDef,
  CreatePartnerTagIds
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreatePartnerTagIds$ {
  /** @deprecated use `CreatePartnerTagIds$inboundSchema` instead. */
  export const inboundSchema = CreatePartnerTagIds$inboundSchema;
  /** @deprecated use `CreatePartnerTagIds$outboundSchema` instead. */
  export const outboundSchema = CreatePartnerTagIds$outboundSchema;
  /** @deprecated use `CreatePartnerTagIds$Outbound` instead. */
  export type Outbound = CreatePartnerTagIds$Outbound;
}

export function createPartnerTagIdsToJSON(
  createPartnerTagIds: CreatePartnerTagIds,
): string {
  return JSON.stringify(
    CreatePartnerTagIds$outboundSchema.parse(createPartnerTagIds),
  );
}

export function createPartnerTagIdsFromJSON(
  jsonString: string,
): SafeParseResult<CreatePartnerTagIds, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreatePartnerTagIds$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreatePartnerTagIds' from JSON`,
  );
}

/** @internal */
export const CreatePartnerTagNames$inboundSchema: z.ZodType<
  CreatePartnerTagNames,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type CreatePartnerTagNames$Outbound = string | Array<string>;

/** @internal */
export const CreatePartnerTagNames$outboundSchema: z.ZodType<
  CreatePartnerTagNames$Outbound,
  z.ZodTypeDef,
  CreatePartnerTagNames
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreatePartnerTagNames$ {
  /** @deprecated use `CreatePartnerTagNames$inboundSchema` instead. */
  export const inboundSchema = CreatePartnerTagNames$inboundSchema;
  /** @deprecated use `CreatePartnerTagNames$outboundSchema` instead. */
  export const outboundSchema = CreatePartnerTagNames$outboundSchema;
  /** @deprecated use `CreatePartnerTagNames$Outbound` instead. */
  export type Outbound = CreatePartnerTagNames$Outbound;
}

export function createPartnerTagNamesToJSON(
  createPartnerTagNames: CreatePartnerTagNames,
): string {
  return JSON.stringify(
    CreatePartnerTagNames$outboundSchema.parse(createPartnerTagNames),
  );
}

export function createPartnerTagNamesFromJSON(
  jsonString: string,
): SafeParseResult<CreatePartnerTagNames, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreatePartnerTagNames$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreatePartnerTagNames' from JSON`,
  );
}

/** @internal */
export const LinkProps$inboundSchema: z.ZodType<
  LinkProps,
  z.ZodTypeDef,
  unknown
> = z.object({
  externalId: z.nullable(z.string()).optional(),
  tenantId: z.nullable(z.string()).optional(),
  prefix: z.string().optional(),
  archived: z.boolean().optional(),
  tagIds: z.union([z.string(), z.array(z.string())]).optional(),
  tagNames: z.union([z.string(), z.array(z.string())]).optional(),
  folderId: z.nullable(z.string()).optional(),
  comments: z.nullable(z.string()).optional(),
  expiresAt: z.nullable(z.string()).optional(),
  expiredUrl: z.nullable(z.string()).optional(),
  password: z.nullable(z.string()).optional(),
  proxy: z.boolean().optional(),
  title: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  image: z.nullable(z.string()).optional(),
  video: z.nullable(z.string()).optional(),
  rewrite: z.boolean().optional(),
  ios: z.nullable(z.string()).optional(),
  android: z.nullable(z.string()).optional(),
  doIndex: z.boolean().optional(),
  utm_source: z.nullable(z.string()).optional(),
  utm_medium: z.nullable(z.string()).optional(),
  utm_campaign: z.nullable(z.string()).optional(),
  utm_term: z.nullable(z.string()).optional(),
  utm_content: z.nullable(z.string()).optional(),
  ref: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "utm_source": "utmSource",
    "utm_medium": "utmMedium",
    "utm_campaign": "utmCampaign",
    "utm_term": "utmTerm",
    "utm_content": "utmContent",
  });
});

/** @internal */
export type LinkProps$Outbound = {
  externalId?: string | null | undefined;
  tenantId?: string | null | undefined;
  prefix?: string | undefined;
  archived?: boolean | undefined;
  tagIds?: string | Array<string> | undefined;
  tagNames?: string | Array<string> | undefined;
  folderId?: string | null | undefined;
  comments?: string | null | undefined;
  expiresAt?: string | null | undefined;
  expiredUrl?: string | null | undefined;
  password?: string | null | undefined;
  proxy?: boolean | undefined;
  title?: string | null | undefined;
  description?: string | null | undefined;
  image?: string | null | undefined;
  video?: string | null | undefined;
  rewrite?: boolean | undefined;
  ios?: string | null | undefined;
  android?: string | null | undefined;
  doIndex?: boolean | undefined;
  utm_source?: string | null | undefined;
  utm_medium?: string | null | undefined;
  utm_campaign?: string | null | undefined;
  utm_term?: string | null | undefined;
  utm_content?: string | null | undefined;
  ref?: string | null | undefined;
};

/** @internal */
export const LinkProps$outboundSchema: z.ZodType<
  LinkProps$Outbound,
  z.ZodTypeDef,
  LinkProps
> = z.object({
  externalId: z.nullable(z.string()).optional(),
  tenantId: z.nullable(z.string()).optional(),
  prefix: z.string().optional(),
  archived: z.boolean().optional(),
  tagIds: z.union([z.string(), z.array(z.string())]).optional(),
  tagNames: z.union([z.string(), z.array(z.string())]).optional(),
  folderId: z.nullable(z.string()).optional(),
  comments: z.nullable(z.string()).optional(),
  expiresAt: z.nullable(z.string()).optional(),
  expiredUrl: z.nullable(z.string()).optional(),
  password: z.nullable(z.string()).optional(),
  proxy: z.boolean().optional(),
  title: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  image: z.nullable(z.string()).optional(),
  video: z.nullable(z.string()).optional(),
  rewrite: z.boolean().optional(),
  ios: z.nullable(z.string()).optional(),
  android: z.nullable(z.string()).optional(),
  doIndex: z.boolean().optional(),
  utmSource: z.nullable(z.string()).optional(),
  utmMedium: z.nullable(z.string()).optional(),
  utmCampaign: z.nullable(z.string()).optional(),
  utmTerm: z.nullable(z.string()).optional(),
  utmContent: z.nullable(z.string()).optional(),
  ref: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    utmSource: "utm_source",
    utmMedium: "utm_medium",
    utmCampaign: "utm_campaign",
    utmTerm: "utm_term",
    utmContent: "utm_content",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LinkProps$ {
  /** @deprecated use `LinkProps$inboundSchema` instead. */
  export const inboundSchema = LinkProps$inboundSchema;
  /** @deprecated use `LinkProps$outboundSchema` instead. */
  export const outboundSchema = LinkProps$outboundSchema;
  /** @deprecated use `LinkProps$Outbound` instead. */
  export type Outbound = LinkProps$Outbound;
}

export function linkPropsToJSON(linkProps: LinkProps): string {
  return JSON.stringify(LinkProps$outboundSchema.parse(linkProps));
}

export function linkPropsFromJSON(
  jsonString: string,
): SafeParseResult<LinkProps, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LinkProps$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LinkProps' from JSON`,
  );
}

/** @internal */
export const CreatePartnerRequestBody$inboundSchema: z.ZodType<
  CreatePartnerRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  programId: z.string(),
  name: z.string(),
  email: z.string(),
  username: z.nullable(z.string()).optional(),
  image: z.nullable(z.string()).optional(),
  country: z.nullable(Country$inboundSchema).optional(),
  description: z.nullable(z.string()).optional(),
  tenantId: z.string().optional(),
  linkProps: z.lazy(() => LinkProps$inboundSchema).optional(),
});

/** @internal */
export type CreatePartnerRequestBody$Outbound = {
  programId: string;
  name: string;
  email: string;
  username?: string | null | undefined;
  image?: string | null | undefined;
  country?: string | null | undefined;
  description?: string | null | undefined;
  tenantId?: string | undefined;
  linkProps?: LinkProps$Outbound | undefined;
};

/** @internal */
export const CreatePartnerRequestBody$outboundSchema: z.ZodType<
  CreatePartnerRequestBody$Outbound,
  z.ZodTypeDef,
  CreatePartnerRequestBody
> = z.object({
  programId: z.string(),
  name: z.string(),
  email: z.string(),
  username: z.nullable(z.string()).optional(),
  image: z.nullable(z.string()).optional(),
  country: z.nullable(Country$outboundSchema).optional(),
  description: z.nullable(z.string()).optional(),
  tenantId: z.string().optional(),
  linkProps: z.lazy(() => LinkProps$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreatePartnerRequestBody$ {
  /** @deprecated use `CreatePartnerRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreatePartnerRequestBody$inboundSchema;
  /** @deprecated use `CreatePartnerRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreatePartnerRequestBody$outboundSchema;
  /** @deprecated use `CreatePartnerRequestBody$Outbound` instead. */
  export type Outbound = CreatePartnerRequestBody$Outbound;
}

export function createPartnerRequestBodyToJSON(
  createPartnerRequestBody: CreatePartnerRequestBody,
): string {
  return JSON.stringify(
    CreatePartnerRequestBody$outboundSchema.parse(createPartnerRequestBody),
  );
}

export function createPartnerRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreatePartnerRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreatePartnerRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreatePartnerRequestBody' from JSON`,
  );
}

/** @internal */
export const Status$inboundSchema: z.ZodNativeEnum<typeof Status> = z
  .nativeEnum(Status);

/** @internal */
export const Status$outboundSchema: z.ZodNativeEnum<typeof Status> =
  Status$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Status$ {
  /** @deprecated use `Status$inboundSchema` instead. */
  export const inboundSchema = Status$inboundSchema;
  /** @deprecated use `Status$outboundSchema` instead. */
  export const outboundSchema = Status$outboundSchema;
}

/** @internal */
export const Links$inboundSchema: z.ZodType<Links, z.ZodTypeDef, unknown> = z
  .object({
    id: z.string(),
    domain: z.string(),
    key: z.string(),
    shortLink: z.string(),
    url: z.string(),
    clicks: z.number().default(0),
    leads: z.number().default(0),
    sales: z.number().default(0),
    saleAmount: z.number().default(0),
  });

/** @internal */
export type Links$Outbound = {
  id: string;
  domain: string;
  key: string;
  shortLink: string;
  url: string;
  clicks: number;
  leads: number;
  sales: number;
  saleAmount: number;
};

/** @internal */
export const Links$outboundSchema: z.ZodType<
  Links$Outbound,
  z.ZodTypeDef,
  Links
> = z.object({
  id: z.string(),
  domain: z.string(),
  key: z.string(),
  shortLink: z.string(),
  url: z.string(),
  clicks: z.number().default(0),
  leads: z.number().default(0),
  sales: z.number().default(0),
  saleAmount: z.number().default(0),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Links$ {
  /** @deprecated use `Links$inboundSchema` instead. */
  export const inboundSchema = Links$inboundSchema;
  /** @deprecated use `Links$outboundSchema` instead. */
  export const outboundSchema = Links$outboundSchema;
  /** @deprecated use `Links$Outbound` instead. */
  export type Outbound = Links$Outbound;
}

export function linksToJSON(links: Links): string {
  return JSON.stringify(Links$outboundSchema.parse(links));
}

export function linksFromJSON(
  jsonString: string,
): SafeParseResult<Links, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Links$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Links' from JSON`,
  );
}

/** @internal */
export const CreatePartnerResponseBody$inboundSchema: z.ZodType<
  CreatePartnerResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.nullable(z.string()),
  image: z.nullable(z.string()),
  description: z.nullable(z.string()).optional(),
  country: z.nullable(z.string()),
  payoutsEnabled: z.boolean(),
  createdAt: z.string(),
  status: Status$inboundSchema,
  programId: z.string(),
  tenantId: z.nullable(z.string()),
  links: z.nullable(z.array(z.lazy(() => Links$inboundSchema))),
  clicks: z.number().default(0),
  leads: z.number().default(0),
  sales: z.number().default(0),
  saleAmount: z.number().default(0),
  earnings: z.number().default(0),
  applicationId: z.nullable(z.string()).optional(),
});

/** @internal */
export type CreatePartnerResponseBody$Outbound = {
  id: string;
  name: string;
  email: string | null;
  image: string | null;
  description?: string | null | undefined;
  country: string | null;
  payoutsEnabled: boolean;
  createdAt: string;
  status: string;
  programId: string;
  tenantId: string | null;
  links: Array<Links$Outbound> | null;
  clicks: number;
  leads: number;
  sales: number;
  saleAmount: number;
  earnings: number;
  applicationId?: string | null | undefined;
};

/** @internal */
export const CreatePartnerResponseBody$outboundSchema: z.ZodType<
  CreatePartnerResponseBody$Outbound,
  z.ZodTypeDef,
  CreatePartnerResponseBody
> = z.object({
  id: z.string(),
  name: z.string(),
  email: z.nullable(z.string()),
  image: z.nullable(z.string()),
  description: z.nullable(z.string()).optional(),
  country: z.nullable(z.string()),
  payoutsEnabled: z.boolean(),
  createdAt: z.string(),
  status: Status$outboundSchema,
  programId: z.string(),
  tenantId: z.nullable(z.string()),
  links: z.nullable(z.array(z.lazy(() => Links$outboundSchema))),
  clicks: z.number().default(0),
  leads: z.number().default(0),
  sales: z.number().default(0),
  saleAmount: z.number().default(0),
  earnings: z.number().default(0),
  applicationId: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreatePartnerResponseBody$ {
  /** @deprecated use `CreatePartnerResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreatePartnerResponseBody$inboundSchema;
  /** @deprecated use `CreatePartnerResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreatePartnerResponseBody$outboundSchema;
  /** @deprecated use `CreatePartnerResponseBody$Outbound` instead. */
  export type Outbound = CreatePartnerResponseBody$Outbound;
}

export function createPartnerResponseBodyToJSON(
  createPartnerResponseBody: CreatePartnerResponseBody,
): string {
  return JSON.stringify(
    CreatePartnerResponseBody$outboundSchema.parse(createPartnerResponseBody),
  );
}

export function createPartnerResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreatePartnerResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreatePartnerResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreatePartnerResponseBody' from JSON`,
  );
}
