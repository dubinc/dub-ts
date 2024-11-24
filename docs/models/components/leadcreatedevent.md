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
      url: "https://ajar-louse.com",
      country: "Suriname",
      city: "Bergnaumfurt",
      region: "<value>",
      continent: "South America",
      device: "Mobile",
      browser: "Chrome",
      os: "Blackberry",
      referer: "pitiful-outrun.net",
      refererUrl: "https://happy-go-lucky-courtroom.info/",
      ip: "21.62.30.141",
    },
    link: {
      id: "<id>",
      domain: "deserted-fencing.net",
      key: "<key>",
      url: "https://miserable-unblinking.info",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://orderly-haircut.info",
      password: "vV8R87bkGlTvqUX",
      title: "<value>",
      description:
        "bank shyly rapidly brr ew bah whether sediment litter oxidise",
      image: "https://loremflickr.com/223/3858?lock=1443587685981279",
      video: "https://loremflickr.com/1356/2053?lock=1771237131304753",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "brown",
        },
      ],
      webhookIds: [
        "<value>",
      ],
      comments:
        "finally reschedule whenever indeed brightly for till hence phew since woot drat baa gift matter despite generously polyester",
      shortLink: "https://frightened-account.com/",
      qrCode: "https://disloyal-babushka.com/",
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