# LinkClickedEvent

Triggered when a link is clicked.

## Example Usage

```typescript
import { LinkClickedEvent } from "dub/models/components";

let value: LinkClickedEvent = {
  id: "<id>",
  event: "link.clicked",
  createdAt: "<value>",
  data: {
    click: {
      id: "<id>",
      url: "https://leading-handle.net",
      continent: "Australia",
      country: "North Macedonia",
      city: "Mertieland",
      device: "Desktop",
      browser: "Chrome",
      os: "Linux",
      referer: "distant-knuckle.com",
      refererUrl: "https://minty-attraction.net",
      ip: "27.212.50.26",
    },
    link: {
      id: "<id>",
      domain: "back-range.name",
      key: "<key>",
      url: "https://elegant-presume.com/",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://earnest-hyphenation.org",
      password: "bJCpq0AoUjjANzv",
      title: "<value>",
      description: "quicker waist instruction yippee unfurl tenderly",
      image: "https://loremflickr.com/2309/172?lock=7283186825846628",
      video: "https://picsum.videos/seed/DCxKmtoc/2752/2530",
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
      comments: "innocently and fisherman react slump",
      shortLink: "https://immense-term.info",
      qrCode: "https://youthful-valentine.biz/",
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
| `event`                                                                              | [components.LinkClickedEventEvent](../../models/components/linkclickedeventevent.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `createdAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [components.LinkClickedEventData](../../models/components/linkclickedeventdata.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |