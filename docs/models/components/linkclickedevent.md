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
      url: "https://flowery-meatloaf.com",
      country: "Bouvet Island",
      city: "West Ernest",
      region: "<value>",
      continent: "Europe",
      device: "Desktop",
      browser: "Safari",
      os: "Windows",
      referer: "glum-pile.name",
      refererUrl: "https://joyful-expense.name/",
      ip: "171.118.70.191",
    },
    link: {
      id: "<id>",
      domain: "deserted-circumference.com",
      key: "<key>",
      url: "https://made-up-leading.com",
      externalId: "<id>",
      expiresAt: "<value>",
      expiredUrl: "https://grave-leading.net/",
      password: "PoDIr7DIiHqOdTT",
      title: "<value>",
      description: "following in lazily belabor",
      image: "https://loremflickr.com/1505/248?lock=2177495066732726",
      video: "https://loremflickr.com/751/1619?lock=3149271446944808",
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
      webhookIds: [
        "<value>",
      ],
      comments:
        "availability even which filthy ah advocate hence unless meh table gadzooks fooey pulp except scout mortally stall claw",
      shortLink: "https://average-prohibition.org",
      qrCode: "https://sentimental-euphonium.biz/",
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