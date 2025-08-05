# LeadCreatedEventData

## Example Usage

```typescript
import { LeadCreatedEventData } from "dub/models/components";

let value: LeadCreatedEventData = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    externalId: "<id>",
    name: "<value>",
    createdAt: "1718158709687",
  },
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://optimistic-collectivization.org",
    country: "Trinidad and Tobago",
    city: "St. George",
    region: "<value>",
    continent: "Antarctica",
    device: "Desktop",
    browser: "Safari",
    os: "Windows Phone",
    referer: "parallel-violin.biz",
    refererUrl: "https://appropriate-worth.biz/",
    qr: true,
    ip: "95.252.90.235",
  },
  link: {
    id: "<id>",
    domain: "standard-wilderness.net",
    key: "<key>",
    url: "https://tense-kiss.org/",
    trackConversion: false,
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    archived: false,
    expiresAt: "1763119226400",
    expiredUrl: "https://shimmering-traditionalism.biz/",
    password: null,
    proxy: false,
    title: null,
    description:
      "now lox meaty unhealthy volunteer prestigious liberalize heavily abandoned",
    image: "https://picsum.photos/seed/QnsdiB/591/3815",
    video: "https://loremflickr.com/3825/426?lock=3694907848251566",
    rewrite: false,
    doIndex: false,
    ios: "<value>",
    android: "<id>",
    geo: {},
    publicStats: true,
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "green",
      },
    ],
    folderId: "<id>",
    webhookIds: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    comments: "ad whose supposing beside soupy",
    shortLink: "https://unlucky-apricot.name",
    qrCode: "https://known-bookend.name",
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
    createdAt: "1704331087084",
    updatedAt: "1735654004218",
    tagId: "<id>",
    projectId: "<id>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `eventName`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `customer`                                                                                 | [components.LeadCreatedEventCustomer](../../models/components/leadcreatedeventcustomer.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `click`                                                                                    | [components.LeadCreatedEventClick](../../models/components/leadcreatedeventclick.md)       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `link`                                                                                     | [components.LeadCreatedEventLink](../../models/components/leadcreatedeventlink.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |