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
    createdAt: "1735300417422",
  },
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://outlandish-noon.com",
    country: "Lithuania",
    city: "New Chadrickville",
    region: "<value>",
    continent: "South America",
    device: "Mobile",
    browser: "Chrome",
    os: "Windows Phone",
    referer: "milky-spear.info",
    refererUrl: "https://frugal-wilderness.info/",
    qr: false,
    ip: "a91c:6780:a1ec:4ccd:445f:d8ba:ba50:6e06",
  },
  link: {
    id: "<id>",
    domain: "hungry-word.com",
    key: "<key>",
    url: "https://improbable-cricket.biz",
    trackConversion: false,
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    archived: false,
    expiresAt: "1739816252545",
    expiredUrl: "https://shady-lift.name/",
    password: "PHGFNj6Ztrm7Ims",
    proxy: false,
    title: "<value>",
    description:
      "structure alongside before cannon grouper however suspension climb convection",
    image: "https://loremflickr.com/3424/264?lock=1557062364196145",
    video: "https://loremflickr.com/427/3209?lock=8012114609932071",
    rewrite: false,
    doIndex: false,
    ios: "<value>",
    android: "<id>",
    geo: {},
    publicStats: false,
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
    comments:
      "besides supposing boohoo whereas segregate word happily suckle like avalanche",
    shortLink: "https://authentic-spring.org/",
    qrCode: "https://jealous-haversack.org",
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
    createdAt: "1720810276688",
    updatedAt: "1735679953825",
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