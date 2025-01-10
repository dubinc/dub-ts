# LeadCreatedEvent

Triggered when a lead is created.

## Example Usage

```typescript
import { LeadCreatedEvent } from "dub/models/components";

let value: LeadCreatedEvent = {
  id: "<id>",
  event: "lead.created",
  createdAt: "1728162855468",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1718027555180",
    },
    click: {
      id: "<id>",
      url: "https://cuddly-license.biz/",
      country: "New Caledonia",
      city: "Port Olen",
      region: "<value>",
      continent: "Antarctica",
      device: "Mobile",
      browser: "Safari",
      os: "Chrome OS",
      referer: "circular-knuckle.info",
      refererUrl: "https://our-fen.biz/",
      ip: "4bf9:b3bf:b53e:7a99:aeef:4cff:a7d2:6ad6",
    },
    link: {
      id: "<id>",
      domain: "untried-icebreaker.com",
      key: "<key>",
      url: "https://wicked-fold.name",
      externalId: "<id>",
      tenantId: "<id>",
      expiresAt: "1754914757303",
      expiredUrl: "https://critical-sprinkles.net",
      password: "VPYyqKmelmwvP6S",
      title: "<value>",
      description: "likewise inspection populist",
      image: "https://picsum.photos/seed/8w81KYA43j/1597/2168",
      video: "https://picsum.videos/seed/ZSvCji8/1524/16",
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
      comments: "tray across psst helpless angle during",
      shortLink: "https://untimely-encouragement.name",
      qrCode: "https://artistic-object.info/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1705423906918",
      updatedAt: "1736481446885",
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