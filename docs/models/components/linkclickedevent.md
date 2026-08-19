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
      expiresAt: "1748510661544",
      expiredUrl: "https://defensive-completion.info/",
      disabledAt: "<value>",
      password: "NfAdxcJ8x1yhk1V",
      proxy: true,
      title: null,
      description: "grown of excitedly",
      image: "https://loremflickr.com/2867/1856?lock=5419092239830524",
      video: null,
      rewrite: true,
      doIndex: true,
      ios: "<value>",
      android: "<id>",
      geo: null,
      publicStats: true,
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "gray",
        },
      ],
      folderId: "<id>",
      comments:
        "concerning ingratiate peninsula suddenly devil cluttered whereas which slipper cow pfft",
      shortLink: "https://fatherly-suspension.name",
      qrCode: "https://normal-department.name/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      testStartedAt: "<value>",
      testCompletedAt: null,
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1729687608845",
      updatedAt: "1735648996941",
      tagId: "<id>",
      projectId: "<id>",
      webhookIds: [],
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