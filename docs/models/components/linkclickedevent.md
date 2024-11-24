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
      url: "https://biodegradable-epic.com/",
      country: "Zambia",
      city: "Leannonfield",
      region: "<value>",
      continent: "Europe",
      device: "Desktop",
      browser: "Chrome",
      os: "BeOS",
      referer: "greedy-hyena.info",
      refererUrl: "https://same-mainstream.net/",
      ip: "104.49.107.167",
    },
    link: {
      id: "<id>",
      domain: "wealthy-pharmacopoeia.name",
      key: "<key>",
      url: "https://cautious-intervention.com/",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://shallow-underpants.biz",
      password: "F2tojU7k5PR5OtH",
      title: "<value>",
      description:
        "sans fairly than knotty place consequently sans beside finally before",
      image: "https://picsum.photos/seed/Pn1q5jZ/1335/2065",
      video: "https://loremflickr.com/3429/946?lock=3883590246111898",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "pink",
        },
      ],
      webhookIds: [
        "<value>",
      ],
      comments: "jump whoever among broadcast intently",
      shortLink: "https://blushing-anticodon.name",
      qrCode: "https://bare-giant.com/",
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
| `event`                                                                              | [components.LinkClickedEventEvent](../../models/components/linkclickedeventevent.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `createdAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [components.LinkClickedEventData](../../models/components/linkclickedeventdata.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |