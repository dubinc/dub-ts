# LeadCreatedEvent

Triggered when a lead is created.

## Example Usage

```typescript
import { LeadCreatedEvent } from "dub/models/components";

let value: LeadCreatedEvent = {
  id: "<id>",
  event: "lead.created",
  createdAt: "1730785502197",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1721471938961",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://sorrowful-vicinity.com",
      country: "Macao",
      city: "North Neilworth",
      region: "<value>",
      continent: "Europe",
      device: "Desktop",
      browser: "Chrome",
      os: "Android",
      referer: "hurtful-academics.org",
      refererUrl: "https://youthful-switchboard.name/",
      ip: "662b:197b:8d4e:d2b5:ae19:d8a2:dbeb:afac",
    },
    link: {
      id: "<id>",
      domain: "helpless-appliance.info",
      key: "<key>",
      url: "https://superb-cop-out.net/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1741606143251",
      expiredUrl: "https://raw-hexagon.biz",
      password: "2XGgwICMSPztdW8",
      title: "<value>",
      description: "ack internalise about",
      image: "https://picsum.photos/seed/6Ps79/55/2351",
      video: "https://loremflickr.com/2446/1315?lock=5728745325135614",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "red",
        },
      ],
      folderId: "<id>",
      webhookIds: [
        "<value>",
      ],
      comments: "clonk very out whose rudely oh",
      shortLink: "https://corny-in-joke.net",
      qrCode: "https://pink-daddy.info",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1729939602030",
      updatedAt: "1740352011443",
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