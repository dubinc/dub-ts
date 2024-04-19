/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

/**
 * The interval to retrieve analytics for.
 */
export const GetCityAnalyticsQueryParamInterval = {
    Oneh: "1h",
    TwentyFourh: "24h",
    Sevend: "7d",
    Thirtyd: "30d",
    Ninetyd: "90d",
    All: "all",
} as const;
/**
 * The interval to retrieve analytics for.
 */
export type GetCityAnalyticsQueryParamInterval =
    (typeof GetCityAnalyticsQueryParamInterval)[keyof typeof GetCityAnalyticsQueryParamInterval];

/**
 * The country to retrieve analytics for.
 */
export const GetCityAnalyticsQueryParamCountry = {
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
 * The country to retrieve analytics for.
 */
export type GetCityAnalyticsQueryParamCountry =
    (typeof GetCityAnalyticsQueryParamCountry)[keyof typeof GetCityAnalyticsQueryParamCountry];

export type GetCityAnalyticsRequest = {
    /**
     * The domain of the short link.
     */
    domain?: string | undefined;
    /**
     * The short link slug.
     */
    key?: string | undefined;
    /**
     * The interval to retrieve analytics for.
     */
    interval?: GetCityAnalyticsQueryParamInterval | undefined;
    /**
     * The country to retrieve analytics for.
     */
    country?: GetCityAnalyticsQueryParamCountry | undefined;
    /**
     * The city to retrieve analytics for.
     */
    city?: string | undefined;
    /**
     * The device to retrieve analytics for.
     */
    device?: string | undefined;
    /**
     * The browser to retrieve analytics for.
     */
    browser?: string | undefined;
    /**
     * The OS to retrieve analytics for.
     */
    os?: string | undefined;
    /**
     * The referer to retrieve analytics for.
     */
    referer?: string | undefined;
    /**
     * The URL to retrieve analytics for.
     */
    url?: string | undefined;
    /**
     * The tag ID to retrieve analytics for.
     */
    tagId?: string | undefined;
    /**
     * Filter for QR code scans. If true, filter for QR codes only. If false, filter for links only. If undefined, return both.
     */
    qr?: boolean | undefined;
    /**
     * Filter for root domains. If true, filter for domains only. If false, filter for links only. If undefined, return both.
     */
    root?: boolean | undefined;
};

/**
 * The 2-letter country code of the city: https://d.to/geo
 */
export const GetCityAnalyticsCountry = {
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
 * The 2-letter country code of the city: https://d.to/geo
 */
export type GetCityAnalyticsCountry =
    (typeof GetCityAnalyticsCountry)[keyof typeof GetCityAnalyticsCountry];

export type GetCityAnalyticsResponseBody = {
    /**
     * The name of the city
     */
    city: string;
    /**
     * The 2-letter country code of the city: https://d.to/geo
     */
    country: GetCityAnalyticsCountry;
    /**
     * The number of clicks from this city
     */
    clicks: number;
};

export type GetCityAnalyticsResponse =
    | components.BadRequest
    | components.Unauthorized
    | components.Forbidden
    | components.NotFound
    | components.Conflict
    | components.InviteExpired
    | components.UnprocessableEntity
    | components.RateLimitExceeded
    | components.InternalServerError
    | Array<GetCityAnalyticsResponseBody>;

/** @internal */
export const GetCityAnalyticsQueryParamInterval$: z.ZodNativeEnum<
    typeof GetCityAnalyticsQueryParamInterval
> = z.nativeEnum(GetCityAnalyticsQueryParamInterval);

/** @internal */
export const GetCityAnalyticsQueryParamCountry$: z.ZodNativeEnum<
    typeof GetCityAnalyticsQueryParamCountry
> = z.nativeEnum(GetCityAnalyticsQueryParamCountry);

/** @internal */
export namespace GetCityAnalyticsRequest$ {
    export type Inbound = {
        domain?: string | undefined;
        key?: string | undefined;
        interval?: GetCityAnalyticsQueryParamInterval | undefined;
        country?: GetCityAnalyticsQueryParamCountry | undefined;
        city?: string | undefined;
        device?: string | undefined;
        browser?: string | undefined;
        os?: string | undefined;
        referer?: string | undefined;
        url?: string | undefined;
        tagId?: string | undefined;
        qr?: boolean | undefined;
        root?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<GetCityAnalyticsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            domain: z.string().optional(),
            key: z.string().optional(),
            interval: GetCityAnalyticsQueryParamInterval$.optional(),
            country: GetCityAnalyticsQueryParamCountry$.optional(),
            city: z.string().optional(),
            device: z.string().optional(),
            browser: z.string().optional(),
            os: z.string().optional(),
            referer: z.string().optional(),
            url: z.string().optional(),
            tagId: z.string().optional(),
            qr: z.boolean().optional(),
            root: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.domain === undefined ? null : { domain: v.domain }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.interval === undefined ? null : { interval: v.interval }),
                ...(v.country === undefined ? null : { country: v.country }),
                ...(v.city === undefined ? null : { city: v.city }),
                ...(v.device === undefined ? null : { device: v.device }),
                ...(v.browser === undefined ? null : { browser: v.browser }),
                ...(v.os === undefined ? null : { os: v.os }),
                ...(v.referer === undefined ? null : { referer: v.referer }),
                ...(v.url === undefined ? null : { url: v.url }),
                ...(v.tagId === undefined ? null : { tagId: v.tagId }),
                ...(v.qr === undefined ? null : { qr: v.qr }),
                ...(v.root === undefined ? null : { root: v.root }),
            };
        });

    export type Outbound = {
        domain?: string | undefined;
        key?: string | undefined;
        interval?: GetCityAnalyticsQueryParamInterval | undefined;
        country?: GetCityAnalyticsQueryParamCountry | undefined;
        city?: string | undefined;
        device?: string | undefined;
        browser?: string | undefined;
        os?: string | undefined;
        referer?: string | undefined;
        url?: string | undefined;
        tagId?: string | undefined;
        qr?: boolean | undefined;
        root?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCityAnalyticsRequest> = z
        .object({
            domain: z.string().optional(),
            key: z.string().optional(),
            interval: GetCityAnalyticsQueryParamInterval$.optional(),
            country: GetCityAnalyticsQueryParamCountry$.optional(),
            city: z.string().optional(),
            device: z.string().optional(),
            browser: z.string().optional(),
            os: z.string().optional(),
            referer: z.string().optional(),
            url: z.string().optional(),
            tagId: z.string().optional(),
            qr: z.boolean().optional(),
            root: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.domain === undefined ? null : { domain: v.domain }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.interval === undefined ? null : { interval: v.interval }),
                ...(v.country === undefined ? null : { country: v.country }),
                ...(v.city === undefined ? null : { city: v.city }),
                ...(v.device === undefined ? null : { device: v.device }),
                ...(v.browser === undefined ? null : { browser: v.browser }),
                ...(v.os === undefined ? null : { os: v.os }),
                ...(v.referer === undefined ? null : { referer: v.referer }),
                ...(v.url === undefined ? null : { url: v.url }),
                ...(v.tagId === undefined ? null : { tagId: v.tagId }),
                ...(v.qr === undefined ? null : { qr: v.qr }),
                ...(v.root === undefined ? null : { root: v.root }),
            };
        });
}

/** @internal */
export const GetCityAnalyticsCountry$: z.ZodNativeEnum<typeof GetCityAnalyticsCountry> =
    z.nativeEnum(GetCityAnalyticsCountry);

/** @internal */
export namespace GetCityAnalyticsResponseBody$ {
    export type Inbound = {
        city: string;
        country: GetCityAnalyticsCountry;
        clicks: number;
    };

    export const inboundSchema: z.ZodType<GetCityAnalyticsResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            city: z.string(),
            country: GetCityAnalyticsCountry$,
            clicks: z.number(),
        })
        .transform((v) => {
            return {
                city: v.city,
                country: v.country,
                clicks: v.clicks,
            };
        });

    export type Outbound = {
        city: string;
        country: GetCityAnalyticsCountry;
        clicks: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCityAnalyticsResponseBody> = z
        .object({
            city: z.string(),
            country: GetCityAnalyticsCountry$,
            clicks: z.number(),
        })
        .transform((v) => {
            return {
                city: v.city,
                country: v.country,
                clicks: v.clicks,
            };
        });
}

/** @internal */
export namespace GetCityAnalyticsResponse$ {
    export type Inbound =
        | components.BadRequest$.Inbound
        | components.Unauthorized$.Inbound
        | components.Forbidden$.Inbound
        | components.NotFound$.Inbound
        | components.Conflict$.Inbound
        | components.InviteExpired$.Inbound
        | components.UnprocessableEntity$.Inbound
        | components.RateLimitExceeded$.Inbound
        | components.InternalServerError$.Inbound
        | Array<GetCityAnalyticsResponseBody$.Inbound>;

    export type Outbound =
        | components.BadRequest$.Outbound
        | components.Unauthorized$.Outbound
        | components.Forbidden$.Outbound
        | components.NotFound$.Outbound
        | components.Conflict$.Outbound
        | components.InviteExpired$.Outbound
        | components.UnprocessableEntity$.Outbound
        | components.RateLimitExceeded$.Outbound
        | components.InternalServerError$.Outbound
        | Array<GetCityAnalyticsResponseBody$.Outbound>;
    export const inboundSchema: z.ZodType<GetCityAnalyticsResponse, z.ZodTypeDef, Inbound> =
        z.union([
            components.BadRequest$.inboundSchema,
            components.Unauthorized$.inboundSchema,
            components.Forbidden$.inboundSchema,
            components.NotFound$.inboundSchema,
            components.Conflict$.inboundSchema,
            components.InviteExpired$.inboundSchema,
            components.UnprocessableEntity$.inboundSchema,
            components.RateLimitExceeded$.inboundSchema,
            components.InternalServerError$.inboundSchema,
            z.array(z.lazy(() => GetCityAnalyticsResponseBody$.inboundSchema)),
        ]);
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCityAnalyticsResponse> =
        z.union([
            components.BadRequest$.outboundSchema,
            components.Unauthorized$.outboundSchema,
            components.Forbidden$.outboundSchema,
            components.NotFound$.outboundSchema,
            components.Conflict$.outboundSchema,
            components.InviteExpired$.outboundSchema,
            components.UnprocessableEntity$.outboundSchema,
            components.RateLimitExceeded$.outboundSchema,
            components.InternalServerError$.outboundSchema,
            z.array(z.lazy(() => GetCityAnalyticsResponseBody$.outboundSchema)),
        ]);
}
