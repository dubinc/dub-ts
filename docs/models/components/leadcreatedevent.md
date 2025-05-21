# LeadCreatedEvent

Triggered when a lead is created.

## Example Usage

```typescript
import { LeadCreatedEvent } from "dub/models/components";

let value: LeadCreatedEvent = {
  id: "<id>",
  event: "lead.created",
  createdAt: "1710430139536",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1723051931047",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://rusty-asset.com",
      country: "Romania",
      city: "South Audramouth",
      region: "<value>",
      continent: "South America",
      device: "Desktop",
      browser: "Chrome",
      os: "Android",
      referer: "stark-fowl.com",
      refererUrl: "https://stark-individual.net",
      qr: false,
      ip: "242.170.197.116",
    },
    link: {
      id: "<id>",
      domain: "phony-vista.com",
      key: "<key>",
      url: "https://subtle-management.biz/",
      trackConversion: false,
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      archived: false,
      expiresAt: "1760119772812",
      expiredUrl: "https://elegant-airman.biz",
      password: "px2bFC6L4ws4Qn8",
      proxy: false,
      title: "<value>",
      description: "uncommon instead instead queasily",
      image: "https://picsum.photos/seed/P75fv/1444/3017",
      video: "https://picsum.videos/seed/3nay90/507/2516",
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
          color: "blue",
        },
      ],
      folderId: "<id>",
      webhookIds: [
        "<value>",
      ],
      comments:
        "venture scaly giant who hope quaff language holster regarding phooey stabilise represent little throughout unaccountably when because decide wherever",
      shortLink: "https://unique-maintainer.biz/",
      qrCode: "https://heavy-whale.net/",
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
      createdAt: "1706389719964",
      updatedAt: "1735683249064",
      projectId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `event`                                                                              | [components.LeadCreatedEventEvent](../../models/components/leadcreatedeventevent.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `createdAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [components.LeadCreatedEventData](../../models/components/leadcreatedeventdata.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |