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
    createdAt: "1729054043359",
  },
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://complete-wheel.biz/",
    country: "Azerbaijan",
    city: "West Elinor",
    region: "<value>",
    continent: "Asia",
    device: "Mobile",
    browser: "Chrome",
    os: "Android",
    referer: "careless-whack.com",
    refererUrl: "https://lonely-scale.biz/",
    ip: "0e2a:38e3:6ecd:b23f:0aa4:aa5d:ea0d:554c",
  },
  link: {
    id: "<id>",
    domain: "juvenile-corporation.org",
    key: "<key>",
    url: "https://spanish-airmail.biz/",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1766801169044",
    expiredUrl: "https://puny-horde.info",
    password: "1xLMSuHHLrZgedX",
    title: "<value>",
    description: "lazy kick when",
    image: "https://picsum.photos/seed/jhGYhsz/2085/3218",
    video: "https://picsum.videos/seed/JMaYYRQk/3815/989",
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
    folderId: "<id>",
    webhookIds: [
      "<value>",
    ],
    comments:
      "beyond untimely whenever an representation lest aha analyse firm than given jealously perky if defiantly reassemble information adrenalin convalesce",
    shortLink: "https://downright-swordfish.net/",
    qrCode: "https://humiliating-adrenalin.net/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1739871696328",
    updatedAt: "1740958271865",
    projectId: "<id>",
  },
  sale: {
    amount: 2330.76,
    currency: "Ethiopian Birr",
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