# LinkClickedEvent

Triggered when a link is clicked.

## Example Usage

```typescript
import { LinkClickedEvent } from "dub/models/components";

let value: LinkClickedEvent = {
  id: "<id>",
  event: "link.clicked",
  createdAt: "1734753689666",
  data: {
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://intrepid-self-confidence.com/",
      country: "Curacao",
      city: "O'Connellstad",
      region: "<value>",
      continent: "Antarctica",
      device: "Mobile",
      browser: "Chrome",
      os: "MacOS",
      referer: "stale-futon.biz",
      refererUrl: "https://glum-fledgling.net/",
      ip: "83.198.233.156",
    },
    link: {
      id: "<id>",
      domain: "cautious-maintainer.name",
      key: "<key>",
      url: "https://surprised-scarification.name/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1743980216835",
      expiredUrl: "https://unlined-dime.org",
      password: "joDt038kVZ7GK9n",
      title: "<value>",
      description:
        "scientific aboard tremendously geez ah spattering blaring during",
      image: "https://loremflickr.com/2144/3617?lock=2782000902685916",
      video: "https://loremflickr.com/2509/2021?lock=1303587167915595",
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
      folderId: "<id>",
      webhookIds: [
        "<value>",
      ],
      comments:
        "that broadly dishearten until duh small helpfully chasuble defiantly rightfully behind tuxedo enchanting free humidity beyond perspire",
      shortLink: "https://total-shadowbox.biz/",
      qrCode: "https://apt-resolve.info",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1734218050998",
      updatedAt: "1739360821891",
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