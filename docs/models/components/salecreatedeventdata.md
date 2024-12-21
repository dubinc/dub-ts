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
    url: "https://extroverted-behest.name",
    country: "Burundi",
    city: "Kunzecester",
    region: "<value>",
    continent: "Asia",
    device: "Mobile",
    browser: "Safari",
    os: "Windows Phone",
    referer: "terrible-moment.name",
    refererUrl: "https://victorious-league.info/",
    ip: "356b:f62c:c9a6:b23f:fcbf:4b7a:ff20:acfa",
  },
  link: {
    id: "<id>",
    domain: "magnificent-formamide.net",
    key: "<key>",
    url: "https://portly-tarragon.com/",
    externalId: "<id>",
    expiresAt: "<value>",
    expiredUrl: "https://fantastic-secret.name/",
    password: "zUi_nKI6c5phyVK",
    title: "<value>",
    description: "christen nor ceramics hm invite butter platter abacus which",
    image: "https://loremflickr.com/3700/2997?lock=5664857904966971",
    video: "https://loremflickr.com/929/1069?lock=5155823791799436",
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
    comments: "provided jaywalk kissingly worriedly hunt retool space informal",
    shortLink: "https://flustered-pomelo.org/",
    qrCode: "https://lean-minor.org/",
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
    amount: 2471.45,
    currency: "Yemeni Rial",
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