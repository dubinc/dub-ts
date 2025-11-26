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
  },
  link: {
    id: "<id>",
    domain: "lovable-cafe.net",
    key: "<key>",
    url: "https://innocent-seafood.biz/",
    trackConversion: true,
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    archived: false,
    expiresAt: "1742513943659",
    expiredUrl: "https://great-agreement.info",
    disabledAt: "<value>",
    password: "3_ogUDEsqyKbQPV",
    proxy: true,
    title: null,
    description:
      "shoulder instead yearn warmly distinct towards amidst incidentally",
    image: "https://picsum.photos/seed/ezl0cNJ/3505/2637",
    video: "https://loremflickr.com/1494/213?lock=6640284800623208",
    rewrite: false,
    doIndex: true,
    ios: null,
    android: "<id>",
    geo: null,
    publicStats: true,
    tags: [],
    folderId: "<id>",
    webhookIds: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    comments:
      "transcend via helplessly usefully statement concrete icy strait earth obesity wherever gadzooks legging towards via via goose",
    shortLink: "https://mixed-blight.com",
    qrCode: "https://back-cook.net/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    testStartedAt: "<value>",
    testCompletedAt: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1719342915987",
    updatedAt: "1735617183845",
    tagId: "<id>",
    projectId: "<id>",
  },
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://honored-pasta.info",
    country: "Haiti",
    city: "Richmond",
    region: "<value>",
    continent: "Asia",
    device: "Mobile",
    browser: "Chrome",
    os: "Symbian",
    referer: "kosher-heroine.org",
    refererUrl: "https://productive-minister.org/",
    qr: true,
    ip: "6f21:8cca:282e:8e9e:d874:ed23:f9e1:8a1d",
  },
  customer: {
    id: "<id>",
    externalId: "<id>",
    name: "<value>",
    createdAt: "1712670252584",
  },
  saleAmount: 7727.75,
  invoiceId: "<id>",
  paymentProcessor: "<value>",
  clickId: "<id>",
  linkId: "<id>",
  domain: "pastel-silk.org",
  key: "<key>",
  url: "https://admired-spring.com/",
  continent: "Europe",
  country: "Gabon",
  city: "Kimberlybury",
  device: "Mobile",
  browser: "Firefox",
  os: "Linux",
  qr: 1761.13,
  ip: "179.25.67.39",
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