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
    createdAt: "1729455439208",
  },
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://sudden-hepatitis.net/",
    country: "Kyrgyz Republic",
    city: "Bel Air South",
    region: "<value>",
    continent: "Antarctica",
    device: "Desktop",
    browser: "Chrome",
    os: "Linux",
    referer: "crooked-poppy.biz",
    refererUrl: "https://discrete-guacamole.org/",
    ip: "76.17.90.59",
  },
  link: {
    id: "<id>",
    domain: "snappy-cannon.com",
    key: "<key>",
    url: "https://formal-status.net/",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1758000016365",
    expiredUrl: "https://glass-mozzarella.net/",
    password: "EQuS14CeblcO4WV",
    title: "<value>",
    description: "disinherit gray funny",
    image: "https://loremflickr.com/3726/2069?lock=4878680044899012",
    video: "https://loremflickr.com/581/1061?lock=4640137681843284",
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
    folderId: "<id>",
    webhookIds: [
      "<value>",
    ],
    comments: "whereas yak chilly instantly foolishly quantify phooey as opera",
    shortLink: "https://able-jacket.org/",
    qrCode: "https://colorful-strategy.com",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1711128489286",
    updatedAt: "1739749243144",
    projectId: "<id>",
  },
  sale: {
    amount: 3869.67,
    currency: "Convertible Marks",
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