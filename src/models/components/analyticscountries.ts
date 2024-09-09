/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The 2-letter ISO 3166-1 country code for the country associated with the location of the user. Learn more: https://d.to/geo
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
 * The 2-letter ISO 3166-1 country code for the country associated with the location of the user. Learn more: https://d.to/geo
 */
export type Country = ClosedEnum<typeof Country>;

export const City = {
  Wildcard: "*",
} as const;
export type City = ClosedEnum<typeof City>;

export type AnalyticsCountries = {
  /**
   * The 2-letter ISO 3166-1 country code for the country associated with the location of the user. Learn more: https://d.to/geo
   */
  country: Country;
  city?: City | undefined;
  /**
   * The number of clicks from this country
   */
  clicks?: number | undefined;
  /**
   * The number of leads from this country
   */
  leads?: number | undefined;
  /**
   * The number of sales from this country
   */
  sales?: number | undefined;
  /**
   * The total amount of sales from this country
   */
  saleAmount?: number | undefined;
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
export const City$inboundSchema: z.ZodNativeEnum<typeof City> = z.nativeEnum(
  City,
);

/** @internal */
export const City$outboundSchema: z.ZodNativeEnum<typeof City> =
  City$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace City$ {
  /** @deprecated use `City$inboundSchema` instead. */
  export const inboundSchema = City$inboundSchema;
  /** @deprecated use `City$outboundSchema` instead. */
  export const outboundSchema = City$outboundSchema;
}

/** @internal */
export const AnalyticsCountries$inboundSchema: z.ZodType<
  AnalyticsCountries,
  z.ZodTypeDef,
  unknown
> = z.object({
  country: Country$inboundSchema,
  city: City$inboundSchema.default("*"),
  clicks: z.number().default(0),
  leads: z.number().default(0),
  sales: z.number().default(0),
  saleAmount: z.number().default(0),
});

/** @internal */
export type AnalyticsCountries$Outbound = {
  country: string;
  city: string;
  clicks: number;
  leads: number;
  sales: number;
  saleAmount: number;
};

/** @internal */
export const AnalyticsCountries$outboundSchema: z.ZodType<
  AnalyticsCountries$Outbound,
  z.ZodTypeDef,
  AnalyticsCountries
> = z.object({
  country: Country$outboundSchema,
  city: City$outboundSchema.default("*"),
  clicks: z.number().default(0),
  leads: z.number().default(0),
  sales: z.number().default(0),
  saleAmount: z.number().default(0),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AnalyticsCountries$ {
  /** @deprecated use `AnalyticsCountries$inboundSchema` instead. */
  export const inboundSchema = AnalyticsCountries$inboundSchema;
  /** @deprecated use `AnalyticsCountries$outboundSchema` instead. */
  export const outboundSchema = AnalyticsCountries$outboundSchema;
  /** @deprecated use `AnalyticsCountries$Outbound` instead. */
  export type Outbound = AnalyticsCountries$Outbound;
}
