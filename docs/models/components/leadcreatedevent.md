# LeadCreatedEvent

Triggered when a lead is created.

## Example Usage

```typescript
import { LeadCreatedEvent } from "dub/models/components";

let value: LeadCreatedEvent = {
  id: "<id>",
  event: "lead.created",
  createdAt: "1704123590577",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1724557474593",
    },
    click: {
      id: "<id>",
      url: "https://assured-knuckle.org/",
      country: "Anguilla",
      city: "New Karianetown",
      region: "<value>",
      continent: "Africa",
      device: "Mobile",
      browser: "Firefox",
      os: "MacOS",
      referer: "crushing-numeric.biz",
      refererUrl: "https://prime-allocation.com/",
      ip: "36.194.23.38",
    },
    link: {
      id: "<id>",
      domain: "kaleidoscopic-character.net",
      key: "<key>",
      url: "https://uncomfortable-annual.org/",
      externalId: "<id>",
      expiresAt: "1740369061869",
      expiredUrl: "https://good-larva.com",
      password: "f5x_91mJmXmbkVg",
      title: "<value>",
      description: "tapioca phew strict pointless whoever responsibility",
      image: "https://picsum.photos/seed/rw0cQL4/1727/3019",
      video: "https://picsum.videos/seed/QC3DT/2539/83",
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
      comments: "equally apud upward inside during arrange",
      shortLink: "https://nocturnal-morning.org",
      qrCode: "https://flawed-defendant.info/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1722267992659",
      updatedAt: "1735494965406",
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