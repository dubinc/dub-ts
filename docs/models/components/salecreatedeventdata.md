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
    createdAt: "1734102314641",
  },
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://average-dulcimer.biz/",
    country: "Angola",
    city: "New Mable",
    region: "<value>",
    continent: "Asia",
    device: "Desktop",
    browser: "Firefox",
    os: "WebOS",
    referer: "rowdy-stool.biz",
    refererUrl: "https://lumbering-feather.net",
    ip: "206.9.99.155",
  },
  link: {
    id: "<id>",
    domain: "insistent-pension.com",
    key: "<key>",
    url: "https://bogus-eggplant.biz",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1740556569145",
    expiredUrl: "https://thorough-sandbar.net/",
    password: "b38l_s_j9VQ16UG",
    title: "<value>",
    description:
      "unethically yum advancement pecan floss ouch energetic next cross-contamination limping",
    image: "https://loremflickr.com/1610/2145?lock=7083671346217111",
    video: "https://picsum.videos/seed/aZEqTAZKm/3651/3249",
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
      "ready likely rare bog versus mmm however insert rot meh never behind red black furthermore as",
    shortLink: "https://entire-roadway.com/",
    qrCode: "https://flickering-electronics.org/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1733601933930",
    updatedAt: "1740147606871",
    projectId: "<id>",
  },
  sale: {
    amount: 2885.88,
    currency: "Guinea Franc",
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