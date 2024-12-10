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
    createdAt: "<value>",
  },
  click: {
    id: "<id>",
    url: "https://pointed-kielbasa.biz/",
    country: "Malawi",
    city: "New Rubyeville",
    region: "<value>",
    continent: "Asia",
    device: "Mobile",
    browser: "Firefox",
    os: "iOS",
    referer: "grimy-jacket.info",
    refererUrl: "https://disloyal-bin.info/",
    ip: "1e9d:7f8b:bf2b:20af:d116:80ca:fdbd:662b",
  },
  link: {
    id: "<id>",
    domain: "bossy-hydrolyze.biz",
    key: "<key>",
    url: "https://husky-tennis.biz",
    externalId: "<id>",
    expiresAt: "<value>",
    expiredUrl: "https://paltry-case.name",
    password: "hHuGgsPTjfWCJHo",
    title: "<value>",
    description: "boohoo excepting that faint",
    image: "https://loremflickr.com/33/479?lock=1771966907057028",
    video: "https://loremflickr.com/2280/2140?lock=7210664053745970",
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
    webhookIds: [
      "<value>",
    ],
    comments:
      "pecan overstay consequently anenst when inasmuch ectoderm where oof planula forenenst eminent inasmuch beloved powerfully squeaky",
    shortLink: "https://joyous-legislature.com/",
    qrCode: "https://these-rim.com/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "<value>",
    updatedAt: "<value>",
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