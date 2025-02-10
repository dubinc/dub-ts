# LinkClickedEvent

Triggered when a link is clicked.

## Example Usage

```typescript
import { LinkClickedEvent } from "dub/models/components";

let value: LinkClickedEvent = {
  id: "<id>",
  event: "link.clicked",
  createdAt: "1716161213766",
  data: {
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://sweet-couch.com/",
      country: "Austria",
      city: "O'Keefetown",
      region: "<value>",
      continent: "Antarctica",
      device: "Mobile",
      browser: "Chrome",
      os: "Windows Phone",
      referer: "earnest-hyphenation.org",
      refererUrl: "https://rigid-hundred.com/",
      ip: "215.249.216.41",
    },
    link: {
      id: "<id>",
      domain: "grubby-sonata.name",
      key: "<key>",
      url: "https://sour-behest.info",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1754323983212",
      expiredUrl: "https://unrealistic-hierarchy.com",
      password: "GSvP3OkjEFojMxD",
      title: "<value>",
      description: "dishearten until duh",
      image: "https://picsum.photos/seed/CxKmtocj/2530/2690",
      video: "https://loremflickr.com/221/1302?lock=841129174747146",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "yellow",
        },
      ],
      webhookIds: [
        "<value>",
      ],
      comments: "eek accompanist sin pish yum thin qua lox",
      shortLink: "https://unripe-flame.name/",
      qrCode: "https://present-dress.org/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1720111609081",
      updatedAt: "1739183639860",
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