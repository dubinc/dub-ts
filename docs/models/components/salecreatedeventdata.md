# SaleCreatedEventData

## Example Usage

```typescript
import { SaleCreatedEventData } from "dub/models/components";

let value: SaleCreatedEventData = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    name: "<value>",
    email: "Julien79@hotmail.com",
    avatar: "https://picsum.photos/seed/UwD6hxSuA3/904/392",
  },
  click: {
    id: "<id>",
    url: "https://made-up-coast.info",
    continent: "Australia",
    country: "Bulgaria",
    city: "Fort Savionland",
    device: "Desktop",
    browser: "Firefox",
    os: "Linux",
    referer: "acceptable-premise.biz",
    refererUrl: "https://focused-circumference.com/",
    ip: "247.186.240.146",
  },
  link: {
    id: "<id>",
    domain: "grandiose-coin.info",
    key: "<key>",
    url: "https://sour-litter.biz/",
    externalId: "<id>",
    identifier: "<value>",
    expiresAt: "<value>",
    expiredUrl: "https://crazy-litter.com",
    password: "DRTwMl9Z4dKt3x8",
    title: "<value>",
    description:
      "masterpiece why rarely splurge electrify fooey now punctually gladly after",
    image: "https://loremflickr.com/1195/27?lock=341261124564857",
    video: "https://loremflickr.com/796/226?lock=2205995788152822",
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
    comments: "foolishly horn immediately putrefy boo",
    shortLink: "https://ultimate-bidet.biz/",
    qrCode: "https://tepid-feather.name",
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
  sale: {
    amount: 4721.31,
    currency: "Australian Dollar",
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