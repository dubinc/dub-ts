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
    geo: {},
    publicStats: true,
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "red",
      },
    ],
    folderId: "<id>",
    webhookIds: [],
    comments:
      "parody qua gosh consequently content explode but colorless squiggly boohoo impassioned",
    shortLink: "https://insidious-hyphenation.net",
    qrCode: "https://astonishing-charlatan.info",
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
    createdAt: "1721110001973",
    updatedAt: "1735605221193",
    projectId: "<id>",
  },
  sale: {
    amount: 5536.15,
    currency: "Metical",
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