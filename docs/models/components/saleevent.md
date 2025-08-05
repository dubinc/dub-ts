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
    geo: {},
    publicStats: false,
    tags: [],
    folderId: "<id>",
    webhookIds: [],
    comments:
      "illustrious honorable normal quicker up solemnly happily manage forenenst boo spiffy affiliate after because curiously male",
    shortLink: "https://empty-alligator.net/",
    qrCode: "https://regular-gradient.info",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    testStartedAt: "<value>",
    testCompletedAt: null,
    userId: null,
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1719034654693",
    updatedAt: "1735608060519",
    tagId: "<id>",
    projectId: "<id>",
  },
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://whimsical-cappelletti.org",
    country: "Spain",
    city: "Elliottmouth",
    region: "<value>",
    continent: "Antarctica",
    device: "Mobile",
    browser: "Firefox",
    os: "iOS",
    referer: "purple-flame.info",
    refererUrl: "https://silver-goat.name",
    qr: true,
    ip: "99f5:ecf8:a6f2:18cc:a282:e8e9:ed87:4ed2",
  },
  customer: {
    id: "<id>",
    externalId: "<id>",
    name: "<value>",
    createdAt: "1708569470387",
  },
  saleAmount: 7267.01,
  invoiceId: "<id>",
  paymentProcessor: "<value>",
  clickId: "<id>",
  linkId: "<id>",
  domain: "kosher-typeface.com",
  key: "<key>",
  url: "https://sophisticated-atrium.org/",
  continent: "Antarctica",
  country: "Samoa",
  city: "Raquelshire",
  device: "Desktop",
  browser: "Chrome",
  os: "BeOS",
  qr: 725.26,
  ip: "7bc8:cc43:9f25:35bb:fbdc:c8dd:f3c9:965d",
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