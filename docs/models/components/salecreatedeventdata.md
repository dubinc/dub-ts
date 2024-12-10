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
    url: "https://blaring-compromise.biz",
    country: "Nepal",
    city: "North Fordcester",
    region: "<value>",
    continent: "Europe",
    device: "Mobile",
    browser: "Safari",
    os: "Windows Phone",
    referer: "low-cross-contamination.name",
    refererUrl: "https://cluttered-membership.com",
    ip: "322e:d51b:3baf:8ffc:ccc6:eb8b:356b:f62c",
  },
  link: {
    id: "<id>",
    domain: "tidy-hello.info",
    key: "<key>",
    url: "https://striking-case.biz/",
    externalId: "<id>",
    expiresAt: "<value>",
    expiredUrl: "https://rewarding-mantua.net",
    password: "3lAfdhWbhOBjEu0",
    title: "<value>",
    description: "sans beside spork",
    image: "https://picsum.photos/seed/ysNCh/241/3004",
    video: "https://picsum.videos/seed/7R25Xn4t21/6/1931",
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
    comments: "fully brook mmm bah carp gah off er",
    shortLink: "https://spanish-airmail.biz/",
    qrCode: "https://muted-partridge.info",
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
    amount: 4356.32,
    currency: "Brazilian Real",
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