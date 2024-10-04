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
      url: "https://humble-creator.net/",
      continent: "North America",
      country: "Niger",
      city: "North Krisport",
      device: "Desktop",
      browser: "Firefox",
      os: "Chrome OS",
      referer: "pretty-interior.org",
      refererUrl: "https://quick-thorn.biz/",
      ip: "195.124.253.150",
    },
    link: {
      id: "<id>",
      domain: "vague-adrenalin.com",
      key: "<key>",
      url: "https://infatuated-space.info",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://obvious-carnival.net",
      password: "dVLI03qJm6fV1ll",
      title: "<value>",
      description: "yum exterior pfft throughout absent",
      image: "https://picsum.photos/seed/11zD7Bek/765/1001",
      video: "https://picsum.videos/seed/rfXOIspMwE/1635/465",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "blue",
        },
      ],
      comments:
        "aboard tremendously geez ah spattering blaring during direct ham antagonize off yahoo above profuse for pfft",
      shortLink: "https://gummy-chasuble.net/",
      qrCode: "https://clumsy-muscat.biz/",
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