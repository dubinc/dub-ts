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
      name: "<value>",
      email: "Quinten79@gmail.com",
      avatar: "https://loremflickr.com/2068/1023?lock=8256240493601223",
    },
    click: {
      id: "<id>",
      url: "https://mammoth-hovel.info/",
      continent: "North America",
      country: "Ukraine",
      city: "Willberg",
      device: "Mobile",
      browser: "Safari",
      os: "Blackberry",
      referer: "slow-finger.org",
      refererUrl: "https://flickering-instance.name/",
      ip: "232.115.25.209",
    },
    link: {
      id: "<id>",
      domain: "wicked-fold.name",
      key: "<key>",
      url: "https://stiff-cinema.org",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://annual-mentor.com",
      password: "PYyqKmelmwvP6SU",
      title: "<value>",
      description:
        "now boo aw smoothly absentmindedly gifted scrap materialise during",
      image: "https://picsum.photos/seed/WxLYJzm2/2974/454",
      video: "https://picsum.videos/seed/K2SFqg/1730/1650",
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
      comments:
        "ascribe into accompany ack internalise about igloo although lively an unto electrify between fully",
      shortLink: "https://remarkable-charlatan.info/",
      qrCode: "https://unique-nudge.biz",
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