# SaleEvent

## Example Usage

```typescript
import { SaleEvent } from "dub/models/components";

let value: SaleEvent = {
  event: "sale",
  timestamp: "<value>",
  eventId: "<id>",
  eventName: "<value>",
  link: {
    id: "<id>",
    domain: "perfumed-jellyfish.com",
    key: "<key>",
    url: "https://fearless-hepatitis.net",
    trackConversion: true,
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    archived: true,
    expiresAt: "1765521027554",
    expiredUrl: "https://voluminous-fisherman.com",
    password: "93_ogUDEsqyKbQP",
    proxy: false,
    title: "<value>",
    description: null,
    image: "https://picsum.photos/seed/YqjO5XP8/2961/2137",
    video: "https://loremflickr.com/3586/1496?lock=2211413934205566",
    rewrite: true,
    doIndex: false,
    ios: "<value>",
    android: "<id>",
    geo: {},
    publicStats: false,
    tagId: "<id>",
    tags: [],
    folderId: "<id>",
    webhookIds: [],
    comments:
      "poppy lasting uselessly surge incidentally availability above sophisticated transcend via helplessly usefully statement concrete icy strait earth",
    shortLink: "https://brilliant-jogging.net",
    qrCode: "https://firm-obesity.net/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    testStartedAt: "<value>",
    testCompletedAt: "<value>",
    userId: null,
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1719126575754",
    updatedAt: "1735645024779",
    projectId: "<id>",
  },
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://great-petticoat.info/",
    country: "Barbados",
    city: "Haneville",
    region: "<value>",
    continent: "Australia",
    device: "Mobile",
    browser: "Firefox",
    os: "Windows",
    referer: "muted-jet.name",
    refererUrl: "https://tricky-hawk.com",
    qr: true,
    ip: "fded:a440:aee8:8af5:8db1:1a14:bf2e:ca6a",
  },
  customer: {
    id: "<id>",
    externalId: "<id>",
    name: "<value>",
    createdAt: "1709257762353",
  },
  sale: {
    amount: 825388,
    paymentProcessor: "paddle",
  },
  saleAmount: 3721.85,
  invoiceId: "<id>",
  paymentProcessor: "<value>",
  clickId: "<id>",
  linkId: "<id>",
  domain: "purple-flame.info",
  key: "<key>",
  url: "https://silver-goat.name",
  continent: "Asia",
  country: "Uganda",
  city: "Heleneshire",
  device: "Desktop",
  browser: "Firefox",
  os: "Windows Phone",
  qr: 9774.46,
  ip: "187.78.255.32",
};
```

## Fields

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `event`                                                                                                                                                             | [components.SaleEventEvent](../../models/components/saleeventevent.md)                                                                                              | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `timestamp`                                                                                                                                                         | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `eventId`                                                                                                                                                           | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `eventName`                                                                                                                                                         | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `link`                                                                                                                                                              | [components.SaleEventLink](../../models/components/saleeventlink.md)                                                                                                | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `click`                                                                                                                                                             | [components.SaleEventClick](../../models/components/saleeventclick.md)                                                                                              | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `customer`                                                                                                                                                          | [components.SaleEventCustomer](../../models/components/saleeventcustomer.md)                                                                                        | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `sale`                                                                                                                                                              | [components.Sale](../../models/components/sale.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| ~~`saleAmount`~~                                                                                                                                                    | *number*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use `sale.amount` instead. |
| ~~`invoiceId`~~                                                                                                                                                     | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use `sale.invoiceId` instead. |
| `paymentProcessor`                                                                                                                                                  | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | Deprecated. Use `sale.paymentProcessor` instead.                                                                                                                    |
| ~~`clickId`~~                                                                                                                                                       | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use `click.id` instead. |
| ~~`linkId`~~                                                                                                                                                        | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use `link.id` instead. |
| ~~`domain`~~                                                                                                                                                        | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use `link.domain` instead. |
| ~~`key`~~                                                                                                                                                           | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use `link.key` instead. |
| ~~`url`~~                                                                                                                                                           | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use `click.url` instead. |
| ~~`continent`~~                                                                                                                                                     | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use `click.continent` instead. |
| ~~`country`~~                                                                                                                                                       | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use `click.country` instead. |
| ~~`city`~~                                                                                                                                                          | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use `click.city` instead. |
| ~~`device`~~                                                                                                                                                        | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use `click.device` instead. |
| ~~`browser`~~                                                                                                                                                       | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use `click.browser` instead. |
| ~~`os`~~                                                                                                                                                            | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use `click.os` instead. |
| ~~`qr`~~                                                                                                                                                            | *number*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use `click.qr` instead. |
| ~~`ip`~~                                                                                                                                                            | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use `click.ip` instead. |