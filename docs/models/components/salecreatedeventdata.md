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
    createdAt: "1725432925505",
  },
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://unsteady-eyeliner.net",
    country: "Cuba",
    city: "Garretthaven",
    region: "<value>",
    continent: "Australia",
    device: "Mobile",
    browser: "Chrome",
    os: "WebOS",
    referer: "puzzled-language.name",
    refererUrl: "https://juvenile-marimba.name/",
    ip: "91.128.233.254",
  },
  link: {
    id: "<id>",
    domain: "well-documented-cantaloupe.name",
    key: "<key>",
    url: "https://appropriate-plumber.net",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1752397921689",
    expiredUrl: "https://rich-trash.com/",
    password: "TFRZG_gaC6N5rdF",
    title: "<value>",
    description:
      "tarragon righteously pleasing whoever eek our immaculate zowie",
    image: "https://loremflickr.com/2040/2625?lock=3365079087619094",
    video: "https://picsum.videos/seed/sFqfk/3773/3425",
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
      "honestly why apropos pish uproot within absent community afore shoulder thump",
    shortLink: "https://early-alliance.biz/",
    qrCode: "https://short-citizen.biz/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    testStartedAt: "<value>",
    testCompletedAt: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1720971624781",
    updatedAt: "1745143438404",
    projectId: "<id>",
  },
  sale: {
    amount: 2295.23,
    currency: "Somali Shilling",
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