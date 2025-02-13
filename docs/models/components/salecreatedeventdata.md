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
    createdAt: "1722199451315",
  },
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://damaged-hexagon.name",
    country: "Japan",
    city: "West Marianview",
    region: "<value>",
    continent: "Australia",
    device: "Mobile",
    browser: "Chrome",
    os: "Windows Phone",
    referer: "terrible-shore.biz",
    refererUrl: "https://flawed-compromise.com/",
    ip: "133.166.96.52",
  },
  link: {
    id: "<id>",
    domain: "official-resolve.net",
    key: "<key>",
    url: "https://fatherly-knuckle.info",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1749548433709",
    expiredUrl: "https://concerned-shark.com",
    password: "EZI_sqjgb38l_s_",
    title: "<value>",
    description:
      "defendant brown across farmer reluctantly allegation indeed near whoever",
    image: "https://picsum.photos/seed/wDFDbc/1585/3887",
    video: "https://loremflickr.com/966/2932?lock=6046132709538388",
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
      "shush while gentle worth aha formal loaf gadzooks necklace mmm indeed but exacerbate accessorise",
    shortLink: "https://ruddy-hygienic.org/",
    qrCode: "https://flawed-gift.org",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1726138471640",
    updatedAt: "1739352548316",
    projectId: "<id>",
  },
  sale: {
    amount: 8004.07,
    currency: "Vatu",
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