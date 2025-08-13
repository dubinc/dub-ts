# SaleEvent

## Example Usage

```typescript
import { SaleEvent } from "dub/models/components";

let value: SaleEvent = {
  event: "sale",
  timestamp: "<value>",
  eventId: "<id>",
  eventName: "<value>",
  sale: {
    amount: 601642,
    paymentProcessor: "polar",
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
    expiresAt: "1765247307573",
    expiredUrl: "https://ajar-forage.biz/",
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
        color: "purple",
      },
    ],
    folderId: "<id>",
    webhookIds: [
      "<value 1>",
    ],
    comments:
      "when annual hence tighten gulp if how bitter season athwart miserably",
    shortLink: "https://great-petticoat.info/",
    qrCode: "https://repentant-fen.biz/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: null,
    utmContent: "<value>",
    testStartedAt: "<value>",
    testCompletedAt: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1731492294701",
    updatedAt: "1735639032605",
    tagId: "<id>",
    projectId: "<id>",
  },
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://shabby-wheel.name/",
    country: "United States Minor Outlying Islands",
    city: "Kuphalberg",
    region: "<value>",
    continent: "Antarctica",
    device: "Desktop",
    browser: "Safari",
    os: "Symbian",
    referer: "regular-gradient.info",
    refererUrl: "https://well-to-do-desk.info",
    qr: false,
    ip: "11a1:4bf2:eca6:a3cd:8e78:ca8b:6e99:f5ec",
  },
  customer: {
    id: "<id>",
    externalId: "<id>",
    name: "<value>",
    createdAt: "1734978305482",
  },
  saleAmount: 3820.37,
  invoiceId: "<id>",
  paymentProcessor: "<value>",
  clickId: "<id>",
  linkId: "<id>",
  domain: "shiny-executor.org",
  key: "<key>",
  url: "https://blushing-guacamole.org/",
  continent: "North America",
  country: "Reunion",
  city: "South Brennachester",
  device: "Desktop",
  browser: "Safari",
  os: "iOS",
  qr: 6548.64,
  ip: "874e:d23f:9e18:a1d5:bdbe:60c1:d7bc:8cc4",
};
```

## Fields

| Field                                                                                                                                                                     | Type                                                                                                                                                                      | Required                                                                                                                                                                  | Description                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `event`                                                                                                                                                                   | [components.SaleEventEvent](../../models/components/saleeventevent.md)                                                                                                    | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `timestamp`                                                                                                                                                               | *string*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `eventId`                                                                                                                                                                 | *string*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `eventName`                                                                                                                                                               | *string*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `sale`                                                                                                                                                                    | [components.Sale](../../models/components/sale.md)                                                                                                                        | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `metadata`                                                                                                                                                                | *any*                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `link`                                                                                                                                                                    | [components.SaleEventLink](../../models/components/saleeventlink.md)                                                                                                      | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `click`                                                                                                                                                                   | [components.SaleEventClick](../../models/components/saleeventclick.md)                                                                                                    | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `customer`                                                                                                                                                                | [components.SaleEventCustomer](../../models/components/saleeventcustomer.md)                                                                                              | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
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