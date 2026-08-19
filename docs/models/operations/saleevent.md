# SaleEvent

## Example Usage

```typescript
import { SaleEvent } from "dub/models/operations";

let value: SaleEvent = {
  event: "sale",
  timestamp: "<value>",
  eventId: "<id>",
  eventName: "<value>",
  sale: {
    amount: 601642,
    currency: "Tenge",
  },
  link: {
    id: "<id>",
    domain: "charming-pneumonia.biz",
    key: "<key>",
    url: "https://stable-exasperation.com/",
    trackConversion: true,
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    archived: true,
    expiresAt: "1765194261081",
    expiredUrl: "https://handsome-disconnection.biz/",
    disabledAt: "<value>",
    password: "_ogUDEsqyKbQPVO",
    proxy: true,
    title: "<value>",
    description: "because oh repentant than poppy lasting uselessly",
    image: "https://loremflickr.com/1143/1970?lock=8791610930200737",
    video: "https://picsum.videos/seed/kezl0cNJ/3557/3505",
    rewrite: true,
    doIndex: true,
    ios: null,
    android: null,
    geo: {
      "key": "https://blind-vanadyl.com/",
      "key1": "https://secondary-disposer.net/",
    },
    publicStats: false,
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "blue",
      },
    ],
    folderId: "<id>",
    comments: "barring snarling castanet via what outnumber cod",
    shortLink: "https://internal-pick.org/",
    qrCode: "https://live-presume.com/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: null,
    testStartedAt: "<value>",
    testCompletedAt: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1723528402249",
    updatedAt: "1735667356528",
    tagId: "<id>",
    projectId: "<id>",
    webhookIds: [],
  },
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://puzzled-goodwill.org/",
    country: "Bosnia and Herzegovina",
    city: "South Jazlynland",
    region: "<value>",
    continent: "Asia",
    device: "Mobile",
    browser: "Firefox",
    os: "Windows",
    referer: "repentant-fen.biz",
    refererUrl: "https://miserable-gray.com/",
    qr: false,
    ip: "155.161.221.106",
  },
  customer: {
    id: "<id>",
    externalId: "<id>",
    createdAt: "1708765194876",
  },
  saleAmount: 2197.02,
  invoiceId: "<id>",
  paymentProcessor: "<value>",
  clickId: "<id>",
  linkId: "<id>",
  domain: "shabby-wheel.name",
  key: "<key>",
  url: "https://posh-kinase.biz",
  continent: "Antarctica",
  country: "Anguilla",
  city: "Whitechester",
  device: "Desktop",
  browser: "Firefox",
  os: "WebOS",
  qr: 9569.94,
  ip: "96.230.133.21",
};
```

## Fields

| Field                                                                                                                                                                     | Type                                                                                                                                                                      | Required                                                                                                                                                                  | Description                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `event`                                                                                                                                                                   | *"sale"*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `timestamp`                                                                                                                                                               | *string*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `eventId`                                                                                                                                                                 | *string*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `eventName`                                                                                                                                                               | *string*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `sale`                                                                                                                                                                    | [operations.ResponseBodySale](../../models/operations/responsebodysale.md)                                                                                                | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `metadata`                                                                                                                                                                | *any*                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `link`                                                                                                                                                                    | [operations.ListEventsResponseBodyLink](../../models/operations/listeventsresponsebodylink.md)                                                                            | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `click`                                                                                                                                                                   | [operations.ListEventsResponseBodyClick](../../models/operations/listeventsresponsebodyclick.md)                                                                          | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `customer`                                                                                                                                                                | [operations.ResponseBodyCustomer](../../models/operations/responsebodycustomer.md)                                                                                        | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| ~~`saleAmount`~~                                                                                                                                                          | *number*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `sale.amount` instead.   |
| ~~`invoiceId`~~                                                                                                                                                           | *string*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `sale.invoiceId` instead. |
| ~~`paymentProcessor`~~                                                                                                                                                    | *string*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `sale.paymentProcessor` instead. |
| ~~`clickId`~~                                                                                                                                                             | *string*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `click.id` instead.      |
| ~~`linkId`~~                                                                                                                                                              | *string*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `link.id` instead.       |
| ~~`domain`~~                                                                                                                                                              | *string*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `link.domain` instead.   |
| ~~`key`~~                                                                                                                                                                 | *string*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `link.key` instead.      |
| ~~`url`~~                                                                                                                                                                 | *string*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `click.url` instead.     |
| ~~`continent`~~                                                                                                                                                           | *string*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `click.continent` instead. |
| ~~`country`~~                                                                                                                                                             | *string*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `click.country` instead. |
| ~~`city`~~                                                                                                                                                                | *string*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `click.city` instead.    |
| ~~`device`~~                                                                                                                                                              | *string*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `click.device` instead.  |
| ~~`browser`~~                                                                                                                                                             | *string*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `click.browser` instead. |
| ~~`os`~~                                                                                                                                                                  | *string*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `click.os` instead.      |
| ~~`qr`~~                                                                                                                                                                  | *number*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `click.qr` instead.      |
| ~~`ip`~~                                                                                                                                                                  | *string*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `click.ip` instead.      |