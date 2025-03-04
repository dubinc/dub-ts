# LinkClickedEvent

Triggered when a link is clicked.

## Example Usage

```typescript
import { LinkClickedEvent } from "dub/models/components";

let value: LinkClickedEvent = {
  id: "<id>",
  event: "link.clicked",
  createdAt: "1716090814868",
  data: {
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://flashy-lox.biz",
      country: "Tonga",
      city: "New Bonita",
      region: "<value>",
      continent: "Europe",
      device: "Desktop",
      browser: "Safari",
      os: "iOS",
      referer: "phony-cutover.org",
      refererUrl: "https://exotic-thunderbolt.com",
      ip: "aca1:4f73:b016:1ffb:be34:d798:1fbe:6849",
    },
    link: {
      id: "<id>",
      domain: "quarrelsome-unblinking.name",
      key: "<key>",
      url: "https://infatuated-bug.info",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1745951746037",
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
      folderId: "<id>",
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
      createdAt: "1721680426137",
      updatedAt: "1740994743381",
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