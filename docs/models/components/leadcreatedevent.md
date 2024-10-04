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
      email: "Micaela_Bruen43@yahoo.com",
      avatar: "https://loremflickr.com/2330/1300?lock=6628409419205143",
    },
    click: {
      id: "<id>",
      url: "https://strange-waterspout.info/",
      continent: "North America",
      country: "Cayman Islands",
      city: "Windlermouth",
      device: "Desktop",
      browser: "Chrome",
      os: "Symbian",
      referer: "glum-king.info",
      refererUrl: "https://sniveling-trolley.name/",
      ip: "4cff:a7d2:6ad6:d92c:f7cc:b3cf:0c0a:dde6",
    },
    link: {
      id: "<id>",
      domain: "tepid-igloo.net",
      key: "<key>",
      url: "https://serene-season.name",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://unused-term.biz",
      password: "P6SUrCHAND3Mq_H",
      title: "<value>",
      description: "concerned bell yeast mallard croon onto hmph orderly ouch",
      image: "https://picsum.photos/seed/gbApKUi/151/3545",
      video: "https://loremflickr.com/2599/1691?lock=5543324713459673",
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
      comments: "under curse meager dish provided",
      shortLink: "https://careless-spear.info/",
      qrCode: "https://crushing-numeric.biz/",
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