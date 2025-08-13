# LinkClickedEvent

Triggered when a link is clicked.

## Example Usage

```typescript
import { LinkClickedEvent } from "dub/models/components";

let value: LinkClickedEvent = {
  id: "<id>",
  event: "link.clicked",
  createdAt: "1732781957758",
  data: {
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://assured-agreement.biz",
      country: "Tuvalu",
      city: "Felixshire",
      region: "<value>",
      continent: "South America",
      device: "Mobile",
      browser: "Safari",
      os: "MacOS",
      referer: "small-newsstand.name",
      refererUrl: "https://unwritten-essence.info",
      qr: true,
      ip: "177.199.56.68",
    },
    link: {
      id: "<id>",
      domain: "menacing-tomography.biz",
      key: "<key>",
      url: "https://jealous-newsletter.info",
      trackConversion: false,
      externalId: "<id>",
      tenantId: "<id>",
      programId: null,
      partnerId: null,
      archived: false,
      expiresAt: "1755870867572",
      expiredUrl: "https://long-term-complication.biz/",
      password: "Q7NfAdxcJ8x1yhk",
      proxy: true,
      title: "<value>",
      description: null,
      image: null,
      video: "https://picsum.videos/seed/ixYla4N/99/1866",
      rewrite: false,
      doIndex: false,
      ios: "<value>",
      android: "<id>",
      geo: {
        "key": "https://chilly-chainstay.info",
        "key1": "https://wretched-provision.info/",
        "key2": "https://perfumed-adrenalin.com/",
      },
      publicStats: true,
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "purple",
        },
      ],
      folderId: null,
      webhookIds: [],
      comments:
        "yum impartial phew rewarding always taro hastily whereas though shrilly lovingly pish ham for plain whether aboard",
      shortLink: "https://windy-cantaloupe.biz/",
      qrCode: "https://husky-cinder.com/",
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
      createdAt: "1725082620490",
      updatedAt: "1735607935420",
      tagId: "<id>",
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