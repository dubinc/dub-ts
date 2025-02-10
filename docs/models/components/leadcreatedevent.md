# LeadCreatedEvent

Triggered when a lead is created.

## Example Usage

```typescript
import { LeadCreatedEvent } from "dub/models/components";

let value: LeadCreatedEvent = {
  id: "<id>",
  event: "lead.created",
  createdAt: "1710537179574",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1728455127331",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://trusting-freezing.net/",
      country: "Honduras",
      city: "Opalworth",
      region: "<value>",
      continent: "Africa",
      device: "Mobile",
      browser: "Chrome",
      os: "Windows",
      referer: "simple-whale.name",
      refererUrl: "https://beloved-exterior.info/",
      ip: "215.119.254.226",
    },
    link: {
      id: "<id>",
      domain: "massive-order.biz",
      key: "<key>",
      url: "https://compassionate-mallard.com/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1753309727474",
      expiredUrl: "https://squeaky-goat.org/",
      password: "3yYPhHuGgsPTjfW",
      title: "<value>",
      description: "angle during gee psst coaxingly",
      image: "https://picsum.photos/seed/oNJGv2qu/1281/787",
      video: "https://picsum.videos/seed/2vV10A/1791/18",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "blue",
        },
      ],
      webhookIds: [
        "<value>",
      ],
      comments: "fibre sometimes upright although contradict",
      shortLink: "https://jittery-dulcimer.org",
      qrCode: "https://outrageous-sesame.com",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1728878916904",
      updatedAt: "1739159167091",
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