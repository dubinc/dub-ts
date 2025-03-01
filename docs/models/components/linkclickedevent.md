# LinkClickedEvent

Triggered when a link is clicked.

## Example Usage

```typescript
import { LinkClickedEvent } from "dub/models/components";

let value: LinkClickedEvent = {
  id: "<id>",
  event: "link.clicked",
  createdAt: "1736898619923",
  data: {
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://austere-cork.biz/",
      country: "Saudi Arabia",
      city: "Auertown",
      region: "<value>",
      continent: "Australia",
      device: "Mobile",
      browser: "Chrome",
      os: "Windows Phone",
      referer: "exalted-fishery.info",
      refererUrl: "https://whole-volleyball.info/",
      ip: "245.209.185.118",
    },
    link: {
      id: "<id>",
      domain: "incomplete-saw.name",
      key: "<key>",
      url: "https://obvious-promise.com",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1752697684788",
      expiredUrl: "https://excitable-countess.name/",
      password: "Rao3f_6cW5KsbJC",
      title: "<value>",
      description:
        "sanity idle quicker waist instruction yippee unfurl tenderly outside",
      image: "https://picsum.photos/seed/Kmtocj3k/2420/2564",
      video: "https://loremflickr.com/1562/374?lock=2247672241593922",
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
      comments: "and fisherman react slump via only lest tenant despite and",
      shortLink: "https://late-space.info",
      qrCode: "https://empty-yarmulke.info/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1714308410566",
      updatedAt: "1740772248381",
      projectId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `event`                                                                              | [components.LinkClickedEventEvent](../../models/components/linkclickedeventevent.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `createdAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [components.LinkClickedEventData](../../models/components/linkclickedeventdata.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |