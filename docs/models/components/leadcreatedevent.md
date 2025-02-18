# LeadCreatedEvent

Triggered when a lead is created.

## Example Usage

```typescript
import { LeadCreatedEvent } from "dub/models/components";

let value: LeadCreatedEvent = {
  id: "<id>",
  event: "lead.created",
  createdAt: "1721566836253",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1727229462467",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://indolent-guidance.net/",
      country: "Ireland",
      city: "Schambergerbury",
      region: "<value>",
      continent: "Australia",
      device: "Mobile",
      browser: "Chrome",
      os: "Linux",
      referer: "these-rim.com",
      refererUrl: "https://ajar-louse.com",
      ip: "d1ed:a2ed:db67:4a91:52c4:7bcb:e9dc:87dc",
    },
    link: {
      id: "<id>",
      domain: "failing-legging.biz",
      key: "<key>",
      url: "https://common-polyester.net/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1750051986802",
      expiredUrl: "https://staid-adviser.biz/",
      password: "TvqUX6MXfIxLnfK",
      title: "<value>",
      description: "lonely hm vice slowly into along ew malfunction",
      image: "https://picsum.photos/seed/cUS7h/641/1356",
      video: "https://loremflickr.com/2542/1039?lock=6315979321898603",
      ios: "<value>",
      android: "<id>",
      geo: {},
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
        "ick mobilize rationalize cheese of bewail whose masterpiece why rarely",
      shortLink: "https://ample-eyeliner.net/",
      qrCode: "https://key-stool.biz/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1727734577742",
      updatedAt: "1739833232693",
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