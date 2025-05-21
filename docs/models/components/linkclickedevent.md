# LinkClickedEvent

Triggered when a link is clicked.

## Example Usage

```typescript
import { LinkClickedEvent } from "dub/models/components";

let value: LinkClickedEvent = {
  id: "<id>",
  event: "link.clicked",
  createdAt: "1727358540137",
  data: {
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://male-bowling.name/",
      country: "Burundi",
      city: "Fort Margiemouth",
      region: "<value>",
      continent: "Australia",
      device: "Desktop",
      browser: "Firefox",
      os: "WebOS",
      referer: "charming-fun.name",
      refererUrl: "https://corrupt-quart.info/",
      qr: false,
      ip: "49.146.133.240",
    },
    link: {
      id: "<id>",
      domain: "soft-jury.biz",
      key: "<key>",
      url: "https://jaunty-advancement.biz/",
      trackConversion: false,
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      archived: false,
      expiresAt: "1735719254014",
      expiredUrl: "https://same-skean.biz/",
      password: "3eYqvwIWLmIQoIm",
      proxy: false,
      title: "<value>",
      description: "trash scrutinise reword even suburban forearm unhappy or",
      image: "https://picsum.photos/seed/DMRI0qjA/191/2602",
      video: "https://picsum.videos/seed/lSR7M8PE/2132/1908",
      rewrite: false,
      doIndex: false,
      ios: "<value>",
      android: "<id>",
      geo: {},
      publicStats: false,
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
        "pfft scoop insist whose abnormally so about for bah kindly of as",
      shortLink: "https://gaseous-captain.name",
      qrCode: "https://honored-galoshes.info/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      testStartedAt: "<value>",
      testCompletedAt: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1718868568371",
      updatedAt: "1735686868335",
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
| `data`                                                                               | [components.Data](../../models/components/data.md)                                   | :heavy_check_mark:                                                                   | N/A                                                                                  |