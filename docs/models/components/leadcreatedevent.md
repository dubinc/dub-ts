# LeadCreatedEvent

Triggered when a lead is created.

## Example Usage

```typescript
import { LeadCreatedEvent } from "dub/models/components";

let value: LeadCreatedEvent = {
  id: "<id>",
  event: "lead.created",
  createdAt: "1732736346168",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1724994295978",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://dependable-monster.info/",
      country: "Saint Barthelemy",
      city: "Evanston",
      region: "<value>",
      continent: "Europe",
      device: "Desktop",
      browser: "Chrome",
      os: "Windows Phone",
      referer: "heavy-adult.info",
      refererUrl: "https://practical-lift.name/",
      ip: "dfc5:0274:cb8b:afb0:9a90:e50b:e00c:b02c",
    },
    link: {
      id: "<id>",
      domain: "kooky-cassava.com",
      key: "<key>",
      url: "https://gorgeous-airman.name",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1744228391977",
      expiredUrl: "https://cumbersome-charm.net/",
      password: "KgOtrxQf5x_91mJ",
      title: "<value>",
      description: "between fully notwithstanding license elementary",
      image: "https://picsum.photos/seed/CCJN3Wpa/2291/1296",
      video: "https://loremflickr.com/3687/3136?lock=5403549567630663",
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
        "likely quirkily that than athwart legging zowie pace exalt vanadyl bank",
      shortLink: "https://vain-individual.net/",
      qrCode: "https://forsaken-receptor.name/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1725647371069",
      updatedAt: "1743179502647",
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