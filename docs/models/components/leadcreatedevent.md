# LeadCreatedEvent

Triggered when a lead is created.

## Example Usage

```typescript
import { LeadCreatedEvent } from "dub/models/components";

let value: LeadCreatedEvent = {
  id: "<id>",
  event: "lead.created",
  createdAt: "<value>",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "<value>",
    },
    click: {
      id: "<id>",
      url: "https://tricky-sediment.org/",
      country: "Curacao",
      city: "Lake Tateshire",
      region: "<value>",
      continent: "Australia",
      device: "Mobile",
      browser: "Chrome",
      os: "Android",
      referer: "mysterious-swim.info",
      refererUrl: "https://babyish-viability.info",
      ip: "86.131.35.50",
    },
    link: {
      id: "<id>",
      domain: "upbeat-supplier.com",
      key: "<key>",
      url: "https://primary-disposer.com/",
      externalId: "<id>",
      expiresAt: "<value>",
      expiredUrl: "https://diligent-fen.biz",
      password: "fzW0NOjS3nSDRTw",
      title: "<value>",
      description: "as under queasily nucleotidase angrily damaged",
      image: "https://loremflickr.com/1688/2574?lock=267713634672299",
      video: "https://loremflickr.com/1268/2704?lock=4038872682700146",
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
        "dimly yippee inasmuch woot acidly gracefully ferociously screw defendant",
      shortLink: "https://incomparable-vestment.name",
      qrCode: "https://weird-bookend.biz/",
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