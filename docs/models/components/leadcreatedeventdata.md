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
    createdAt: "1720079656529",
  },
  click: {
    id: "<id>",
    url: "https://disloyal-reasoning.info/",
    country: "Cyprus",
    city: "Hoffman Estates",
    region: "<value>",
    continent: "Africa",
    device: "Mobile",
    browser: "Chrome",
    os: "Windows Phone",
    referer: "posh-vestment.biz",
    refererUrl: "https://violent-publicity.info/",
    ip: "993b:5d8c:a3df:b2b9:7c75:a4bf:9b3b:fb53",
  },
  link: {
    id: "<id>",
    domain: "upright-fen.info",
    key: "<key>",
    url: "https://jam-packed-roundabout.org/",
    externalId: "<id>",
    expiresAt: "1755599805309",
    expiredUrl: "https://different-mechanic.net",
    password: "dhtMYwKnAUXmpeV",
    title: "<value>",
    description: "nor unused furthermore",
    image: "https://picsum.photos/seed/8kDmpktn8c/2141/264",
    video: "https://picsum.videos/seed/EqSmH/317/1871",
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
      "smoothly absentmindedly gifted scrap materialise during scope aha hexagon french gah relieve minus",
    shortLink: "https://illiterate-self-confidence.net",
    qrCode: "https://meager-approach.info",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1719724676574",
    updatedAt: "1735470772323",
    projectId: "<id>",
    programId: "<id>",
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