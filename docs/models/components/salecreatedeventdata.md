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
    createdAt: "<value>",
  },
  click: {
    id: "<id>",
    url: "https://fine-object.org",
    continent: "North America",
    country: "Democratic Republic of the Congo",
    city: "West Charlestown",
    device: "Desktop",
    browser: "Firefox",
    os: "Blackberry",
    referer: "humble-creature.name",
    refererUrl: "https://rowdy-stool.biz",
    ip: "a7f2:b08d:9e0d:1660:2cba:f160:1041:05b1",
  },
  link: {
    id: "<id>",
    domain: "worthwhile-pepper.org",
    key: "<key>",
    url: "https://soupy-eternity.biz",
    externalId: "<id>",
    identifier: "<value>",
    expiresAt: "<value>",
    expiredUrl: "https://nutritious-labourer.biz",
    password: "6UGUJArisO_9NHt",
    title: "<value>",
    description: "baa highlight aw",
    image: "https://picsum.photos/seed/en3CVoYBdw/1975/2365",
    video: "https://picsum.videos/seed/ceJuFN/2560/2665",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "blue",
      },
    ],
    webhookIds: [
      "<value>",
    ],
    comments:
      "slime our underneath bobble once store debit heartache astride omelet um anti",
    shortLink: "https://aggravating-sarong.net/",
    qrCode: "https://fruitful-grandpa.org/",
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
    programId: "<id>",
  },
  sale: {
    amount: 1213.00,
    currency: "Netherlands Antillian Guilder",
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