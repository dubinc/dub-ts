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
      url: "https://annual-mentor.com",
      continent: "Australia",
      country: "Montserrat",
      city: "Walterboro",
      device: "Mobile",
      browser: "Firefox",
      os: "Blackberry",
      referer: "strident-quart.net",
      refererUrl: "https://sticky-thorn.org",
      ip: "248.14.157.126",
    },
    link: {
      id: "<id>",
      domain: "enlightened-lox.com",
      key: "<key>",
      url: "https://tidy-character.biz",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://hateful-heartache.info",
      password: "ND3Mq_HsCbFTjSh",
      title: "<value>",
      description:
        "wherever even instead ew roger wash whereas drag pull bookend",
      image: "https://picsum.photos/seed/SIzf07jczx/2513/2106",
      video: "https://picsum.videos/seed/v2qur0Ef2/1559/3202",
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
      comments:
        "truly quirkily daily stock fooey meanwhile ravage likely tapioca phew strict pointless whoever responsibility acclaimed provided reasoning instantly notarize",
      shortLink: "https://golden-skeleton.name/",
      qrCode: "https://wealthy-humor.org",
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