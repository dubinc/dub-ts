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
    createdAt: "1734682026518",
  },
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://plump-statue.net/",
    country: "Democratic Republic of the Congo",
    city: "West Charlestown",
    region: "<value>",
    continent: "Asia",
    device: "Mobile",
    browser: "Firefox",
    os: "iOS",
    referer: "downright-metal.net",
    refererUrl: "https://timely-dividend.name",
    ip: "82.175.34.206",
  },
  link: {
    id: "<id>",
    domain: "antique-gown.name",
    key: "<key>",
    url: "https://queasy-annual.org/",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1741666556957",
    expiredUrl: "https://frank-address.com/",
    password: "qjgb38l_s_j9VQ1",
    title: "<value>",
    description: "brown across farmer reluctantly",
    image: "https://picsum.photos/seed/3p1XLle/3378/1285",
    video: "https://loremflickr.com/1601/1265?lock=8275043924332258",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "green",
      },
    ],
    webhookIds: [
      "<value>",
    ],
    comments:
      "energetic next cross-contamination limping slime our underneath bobble once store debit heartache astride omelet um anti",
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
    createdAt: "1711506870390",
    updatedAt: "1739133715259",
    projectId: "<id>",
  },
  sale: {
    amount: 2157.24,
    currency: "Moroccan Dirham",
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