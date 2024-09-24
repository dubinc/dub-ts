# Two

## Example Usage

```typescript
import { Two } from "dub/models/components";

let value: Two = {
  id: "<id>",
  event: "link.clicked",
  createdAt: "<value>",
  data: {
    click: {
      id: "<id>",
      url: "https://political-ocelot.org",
      continent: "<value>",
      country: "Thailand",
      city: "Haleybury",
      device: "<value>",
      browser: "<value>",
      os: "<value>",
      referer: "<value>",
      refererUrl: "<value>",
      ip: "124.253.233.30",
    },
    link: {
      id: "<id>",
      domain: "all-tectonics.name",
      key: "<key>",
      externalId: "<value>",
      url: "https://red-parade.com/",
      expiresAt: "<value>",
      expiredUrl: "https://basic-cruelty.com/",
      password: "3b9hSzFGO_LyucO",
      title: "<value>",
      description: "Customer-focused foreground orchestration",
      image: "https://picsum.photos/seed/CNPtSUgBw/1140/416",
      video: "<value>",
      ios: "<value>",
      android: "<value>",
      geo: {},
      tagId: "<value>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "blue",
        },
      ],
      comments: "<value>",
      shortLink: "https://fruitful-whale.org",
      qrCode: "https://subtle-runway.net/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<value>",
      workspaceId: "<value>",
      lastClicked: "<value>",
      createdAt: "<value>",
      updatedAt: "<value>",
      projectId: "<value>",
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `event`                                                                        | [components.WebhookEvent2Event](../../models/components/webhookevent2event.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [components.WebhookEventData](../../models/components/webhookeventdata.md)     | :heavy_check_mark:                                                             | N/A                                                                            |