# SaleCreatedEventData

## Example Usage

```typescript
import { SaleCreatedEventData } from "dub/models/components";

let value: SaleCreatedEventData = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    name: "<value>",
    externalId: "<id>",
    createdAt: "1732125211331",
  },
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://windy-simple.info",
    country: "Turkey",
    city: "Youngstown",
    region: "<value>",
    continent: "Africa",
    device: "Desktop",
    browser: "Firefox",
    os: "Android",
    referer: "black-and-white-fireplace.com",
    refererUrl: "https://realistic-birth.name",
    qr: true,
    ip: "186.246.170.22",
  },
  link: {
    id: "<id>",
    domain: "shy-pine.com",
    key: "<key>",
    url: "https://happy-equal.com",
    trackConversion: true,
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    archived: false,
    expiresAt: "1756923719786",
    expiredUrl: "https://petty-coordination.com",
    disabledAt: "<value>",
    password: "Sj7cH2NhvdXcJx8",
    proxy: false,
    title: "<value>",
    description: "train exhaust lightly notwithstanding functional whether",
    image: "https://loremflickr.com/1807/250?lock=739641941719050",
    video: "https://picsum.videos/seed/kQQ8WyEpG/3044/1298",
    rewrite: true,
    doIndex: true,
    ios: "<value>",
    android: "<id>",
    geo: {
      "key": "https://little-skyscraper.info/",
    },
    publicStats: true,
    tags: [],
    folderId: "<id>",
    webhookIds: [
      "<value 1>",
    ],
    comments: "excepting restfully harvest sway stealthily duh punctuation",
    shortLink: "https://weird-catalyst.net/",
    qrCode: "https://physical-reward.org",
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
    createdAt: "1725341048612",
    updatedAt: "1735644237613",
    tagId: "<id>",
    projectId: "<id>",
  },
  sale: {
    amount: 4294.12,
    currency: "Solomon Islands Dollar",
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
| `sale`                                                                                     | [components.Sale](../../models/components/sale.md)                                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `partner`                                                                                  | [components.SaleCreatedEventPartner](../../models/components/salecreatedeventpartner.md)   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `metadata`                                                                                 | Record<string, *any*>                                                                      | :heavy_minus_sign:                                                                         | N/A                                                                                        |