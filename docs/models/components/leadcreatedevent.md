# LeadCreatedEvent

Triggered when a lead is created.

## Example Usage

```typescript
import { LeadCreatedEvent } from "dub/models/components";

let value: LeadCreatedEvent = {
  id: "<id>",
  event: "lead.created",
  createdAt: "1720355136958",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1737930335544",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://failing-legging.biz",
      country: "Democratic Republic of the Congo",
      city: "Lake Osvaldoborough",
      region: "<value>",
      continent: "Asia",
      device: "Mobile",
      browser: "Chrome",
      os: "Android",
      referer: "funny-makeover.org",
      refererUrl: "https://tender-masterpiece.name/",
      ip: "265a:ca19:eab2:6ad9:ead9:e8ea:9e07:c97c",
    },
    link: {
      id: "<id>",
      domain: "impressionable-filter.biz",
      key: "<key>",
      url: "https://vain-venom.com/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1764169420851",
      expiredUrl: "https://present-allocation.biz",
      password: "gPSqtvSM8sls6cw",
      title: "<value>",
      description:
        "jellyfish psst on communicate beyond simple into sympathetically until cycle",
      image: "https://picsum.photos/seed/WkA8tB/3681/615",
      video: "https://picsum.videos/seed/il1yYJZsK9/3083/2228",
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
      folderId: "<id>",
      webhookIds: [
        "<value>",
      ],
      comments:
        "splurge electrify fooey now punctually gladly after adventurously out definite unit supplier jazz gladly aha",
      shortLink: "https://whopping-roadway.info/",
      qrCode: "https://impolite-eyeliner.info/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1738413985747",
      updatedAt: "1740925958986",
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