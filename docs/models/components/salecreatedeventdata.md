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
    createdAt: "1727546976066",
  },
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://spiteful-thyme.net/",
    country: "Solomon Islands",
    city: "Chico",
    region: "<value>",
    continent: "South America",
    device: "Mobile",
    browser: "Firefox",
    os: "BeOS",
    referer: "our-yak.net",
    refererUrl: "https://sick-ravioli.biz/",
    ip: "38da:ef1a:b659:8b4a:bde6:d952:f1b4:d4a3",
  },
  link: {
    id: "<id>",
    domain: "warmhearted-pharmacopoeia.info",
    key: "<key>",
    url: "https://monstrous-going.com",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1764911663698",
    expiredUrl: "https://elementary-digit.biz",
    password: "PfngWJC_8SgB10j",
    title: "<value>",
    description: "cutover thread vain ick safely ah duster positively",
    image: "https://picsum.photos/seed/Ex4acC61mI/2959/1537",
    video: "https://picsum.videos/seed/uczD7z6x/2773/3170",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "yellow",
      },
    ],
    folderId: "<id>",
    webhookIds: [
      "<value>",
    ],
    comments: "chasuble noxious imaginary below whereas yak",
    shortLink: "https://squiggly-flint.net/",
    qrCode: "https://zealous-cannon.com",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1734217520880",
    updatedAt: "1742134132509",
    projectId: "<id>",
  },
  sale: {
    amount: 6908.74,
    currency: "Swedish Krona",
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