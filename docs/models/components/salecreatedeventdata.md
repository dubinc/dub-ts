# SaleCreatedEventData

## Example Usage

```typescript
import { SaleCreatedEventData } from "dub/models/components";

let value: SaleCreatedEventData = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    externalId: "<id>",
    name: "<value>",
    createdAt: "1721620996072",
  },
  click: {
    id: "<id>",
    url: "https://exhausted-substitution.net/",
    country: "Switzerland",
    city: "North Maximilian",
    region: "<value>",
    continent: "South America",
    device: "Mobile",
    browser: "Firefox",
    os: "Blackberry",
    referer: "chubby-duffel.name",
    refererUrl: "https://lovable-mozzarella.com",
    ip: "a37b:34ed:26d5:0f47:6323:ffec:73aa:bb4b",
  },
  link: {
    id: "<id>",
    domain: "crazy-litter.com",
    key: "<key>",
    url: "https://reckless-chap.name/",
    externalId: "<id>",
    tenantId: "<id>",
    expiresAt: "1753519875010",
    expiredUrl: "https://lighthearted-bidet.com",
    password: "l9Z4dKt3x8zYNZj",
    title: "<value>",
    description: "why rarely splurge electrify fooey now punctually",
    image: "https://loremflickr.com/1698/2623?lock=7810687478150885",
    video: "https://loremflickr.com/311/1151?lock=106407783926604",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "red",
      },
    ],
    webhookIds: [
      "<value>",
    ],
    comments:
      "blindly and foolishly horn immediately putrefy boo feather sans impressionable stable warp devoted obedient shush while gentle worth",
    shortLink: "https://smart-skeleton.biz/",
    qrCode: "https://jubilant-granny.name/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1711663561704",
    updatedAt: "1736483306403",
    projectId: "<id>",
    programId: "<id>",
  },
  sale: {
    amount: 8127.52,
    currency: "Hryvnia",
    paymentProcessor: "<value>",
    invoiceId: "<id>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `eventName`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `customer`                                                                                 | [components.SaleCreatedEventCustomer](../../models/components/salecreatedeventcustomer.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `click`                                                                                    | [components.SaleCreatedEventClick](../../models/components/salecreatedeventclick.md)       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `link`                                                                                     | [components.SaleCreatedEventLink](../../models/components/salecreatedeventlink.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `sale`                                                                                     | [components.SaleCreatedEventSale](../../models/components/salecreatedeventsale.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |