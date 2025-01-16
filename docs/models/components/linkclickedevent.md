# LinkClickedEvent

Triggered when a link is clicked.

## Example Usage

```typescript
import { LinkClickedEvent } from "dub/models/components";

let value: LinkClickedEvent = {
  id: "<id>",
  event: "link.clicked",
  createdAt: "1708826664374",
  data: {
    click: {
      id: "<id>",
      url: "https://breakable-cornet.org/",
      country: "Angola",
      city: "Presleyland",
      region: "<value>",
      continent: "Antarctica",
      device: "Mobile",
      browser: "Firefox",
      os: "Windows Phone",
      referer: "decent-seal.com",
      refererUrl: "https://stale-futon.biz/",
      ip: "83.87.178.61",
    },
    link: {
      id: "<id>",
      domain: "golden-sanity.org",
      key: "<key>",
      url: "https://cautious-maintainer.name",
      externalId: "<id>",
      tenantId: "<id>",
      expiresAt: "1746962465413",
      expiredUrl: "https://speedy-minister.com",
      password: "cv8joDt038kVZ7G",
      title: "<value>",
      description: "serene scientific aboard",
      image: "https://loremflickr.com/3855/2076?lock=6143394842599669",
      video: "https://picsum.videos/seed/63JE0d/1076/427",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "purple",
        },
      ],
      webhookIds: [
        "<value>",
      ],
      comments:
        "insert immediately mechanically zowie given wherever jealously",
      shortLink: "https://bright-mentor.biz/",
      qrCode: "https://vengeful-smog.biz",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1708350108832",
      updatedAt: "1737054194564",
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
| `event`                                                                              | [components.LinkClickedEventEvent](../../models/components/linkclickedeventevent.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `createdAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [components.LinkClickedEventData](../../models/components/linkclickedeventdata.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |