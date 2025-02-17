# LinkClickedEvent

Triggered when a link is clicked.

## Example Usage

```typescript
import { LinkClickedEvent } from "dub/models/components";

let value: LinkClickedEvent = {
  id: "<id>",
  event: "link.clicked",
  createdAt: "1724863130577",
  data: {
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://shy-commercial.name",
      country: "Isle of Man",
      city: "New Doug",
      region: "<value>",
      continent: "Australia",
      device: "Desktop",
      browser: "Safari",
      os: "Android",
      referer: "pitiful-casement.name",
      refererUrl: "https://well-to-do-grass.name/",
      ip: "220.205.62.233",
    },
    link: {
      id: "<id>",
      domain: "apt-resolve.info",
      key: "<key>",
      url: "https://light-baseboard.biz",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1771110767021",
      expiredUrl: "https://cute-shark.com/",
      password: "bRm_15sAKFcTaG3",
      title: "<value>",
      description: "libel cow but banish encouragement concrete",
      image: "https://loremflickr.com/2333/3530?lock=2050659492221015",
      video: "https://loremflickr.com/2993/3248?lock=2986515293174769",
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
      folderId: "<id>",
      webhookIds: [
        "<value>",
      ],
      comments:
        "pleasant pack offset inasmuch drat regarding cappelletti goose derby quickly giving",
      shortLink: "https://naughty-charlatan.org/",
      qrCode: "https://defenseless-punctuation.com",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1732550751590",
      updatedAt: "1739705271587",
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