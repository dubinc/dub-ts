# SaleEvent

## Example Usage

```typescript
import { SaleEvent } from "dub/models/components";

let value: SaleEvent = {
  event: "sale",
  eventId: "<id>",
  eventName: "<value>",
  link: {
    id: "<id>",
    domain: "discrete-habit.name",
    key: "<key>",
    url: "https://indolent-programme.net",
    externalId: "<id>",
    tenantId: "<id>",
    expiresAt: "1747063616717",
    expiredUrl: "https://pushy-swim.name",
    password: "gjwVIxtOegwlPc3",
    title: "<value>",
    description: "zealous vastly fledgling facilitate runway oval",
    image: "https://loremflickr.com/138/3994?lock=6668454717749658",
    video: "https://loremflickr.com/3284/1492?lock=889549978698192",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "pink",
      },
    ],
    webhookIds: [
      "<value>",
    ],
    comments:
      "whose plumber awesome reach upliftingly till whirlwind enthusiastically towards guidance jealously restfully",
    shortLink: "https://those-allocation.biz",
    qrCode: "https://determined-sesame.net/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1721821344716",
    updatedAt: "1737057022336",
    projectId: "<id>",
    programId: "<id>",
  },
  click: {
    id: "<id>",
    url: "https://unripe-caption.com/",
    country: "Paraguay",
    city: "New Heidicester",
    region: "<value>",
    continent: "South America",
    device: "Mobile",
    browser: "Safari",
    os: "Windows",
    referer: "gaseous-lay.info",
    refererUrl: "https://funny-underneath.biz/",
    ip: "0.216.39.52",
  },
  customer: {
    id: "<id>",
    externalId: "<id>",
    name: "<value>",
    createdAt: "1713572520032",
  },
  sale: {
    amount: 884622,
    paymentProcessor: "stripe",
  },
  saleAmount: 7975.27,
  invoiceId: "<id>",
  paymentProcessor: "<value>",
  clickId: "<id>",
  linkId: "<id>",
  domain: "striking-transparency.com",
  key: "<key>",
  url: "https://sick-costume.biz/",
  continent: "Antarctica",
  country: "Chad",
  city: "Bernhardborough",
  device: "Desktop",
  browser: "Chrome",
  os: "iOS",
  qr: 941.22,
  ip: "211.209.20.153",
};
```

## Fields

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `event`                                                                                                                                                             | [components.SaleEventEvent](../../models/components/saleeventevent.md)                                                                                              | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `timestamp`                                                                                                                                                         | *string*                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                  | N/A                                                                                                                                                                 |
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