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
    domain: "steep-experience.info",
    key: "<key>",
    url: "https://content-corporation.info",
    externalId: "<id>",
    identifier: "<value>",
    expiresAt: "<value>",
    expiredUrl: "https://tough-morbidity.info/",
    password: "qmqHpBxbQTA6CJY",
    title: "<value>",
    description:
      "prejudge outrageous yahoo amongst peony despite energetically quixotic",
    image: "https://loremflickr.com/3381/3112?lock=7887534763842446",
    video: "https://loremflickr.com/172/2?lock=4162204524478020",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "purple",
      },
    ],
    webhookIds: [
      "<value>",
    ],
    comments: "where daintily role infatuated ew lazily",
    shortLink: "https://surprised-sticker.com",
    qrCode: "https://gripping-coordination.net/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "<value>",
    updatedAt: "<value>",
    projectId: "<id>",
  },
  click: {
    id: "<id>",
    url: "https://mindless-whack.com",
    continent: "South America",
    country: "Bosnia and Herzegovina",
    city: "Lake Bernhardstead",
    device: "Desktop",
    browser: "Safari",
    os: "BeOS",
    referer: "soggy-steeple.com",
    refererUrl: "https://milky-heartache.biz/",
    ip: "242.75.90.0",
  },
  customer: {
    id: "<id>",
    name: "<value>",
    email: "Carissa20@hotmail.com",
    avatar: "https://loremflickr.com/3232/3708?lock=1957074997712203",
  },
  sale: {
    amount: 742899,
    paymentProcessor: "stripe",
  },
  saleAmount: 2863.30,
  invoiceId: "<id>",
  paymentProcessor: "<value>",
  clickId: "<id>",
  linkId: "<id>",
  domain: "dazzling-community.info",
  key: "<key>",
  url: "https://gloomy-hoof.com/",
  continent: "Asia",
  country: "Benin",
  city: "Reyfield",
  device: "Desktop",
  browser: "Firefox",
  os: "BeOS",
  qr: 2379.73,
  ip: "db20:45d8:f736:df4b:6d3e:1ffc:cadb:aa33",
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