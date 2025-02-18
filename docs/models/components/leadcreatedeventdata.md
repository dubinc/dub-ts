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
    createdAt: "1723927960056",
  },
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://musty-baseboard.name/",
    country: "Suriname",
    city: "West Loniebury",
    region: "<value>",
    continent: "Asia",
    device: "Desktop",
    browser: "Firefox",
    os: "iOS",
    referer: "courageous-council.com",
    refererUrl: "https://terrible-bookcase.name/",
    ip: "223.93.177.102",
  },
  link: {
    id: "<id>",
    domain: "nautical-sand.org",
    key: "<key>",
    url: "https://muddy-ceramics.com/",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1763433929920",
    expiredUrl: "https://parched-bell.com",
    password: "EqMtPTKlEv3yYPh",
    title: "<value>",
    description: "hmph orderly ouch monster ascribe into accompany ack",
    image: "https://picsum.photos/seed/qur0E/2924/2751",
    video: "https://picsum.videos/seed/10Ax06Ps79/1030/179",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "purple",
      },
    ],
    folderId: "<id>",
    webhookIds: [
      "<value>",
    ],
    comments:
      "sometimes upright although contradict stingy orient in-joke curry swear aw",
    shortLink: "https://pointless-recommendation.net",
    qrCode: "https://weekly-halt.biz/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1737386123025",
    updatedAt: "1739827894998",
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