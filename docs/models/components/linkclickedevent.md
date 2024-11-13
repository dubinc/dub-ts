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
      url: "https://pointed-exhaust.com/",
      continent: "North America",
      country: "Northern Mariana Islands",
      city: "Conroybury",
      device: "Mobile",
      browser: "Chrome",
      os: "Windows",
      referer: "difficult-dime.net",
      refererUrl: "https://agile-affect.name",
      ip: "2d57:82ff:95fb:fa9b:becf:2835:4b0f:b1f5",
    },
    link: {
      id: "<id>",
      domain: "cavernous-sonar.biz",
      key: "<key>",
      url: "https://back-range.name/",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://elegant-presume.com/",
      password: "W5KsbJCpq0AoUjj",
      title: "<value>",
      description: "during direct ham",
      image: "https://picsum.photos/seed/tV17n55zd/8/3319",
      video: "https://picsum.videos/seed/5WZns9/2506/3717",
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
        "outset hollow guzzle what knottily apostrophize correctly immense spirit customise for",
      shortLink: "https://flashy-lox.biz",
      qrCode: "https://grimy-numeracy.com",
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