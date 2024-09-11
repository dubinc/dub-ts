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
      url: "https://hearty-accounting.org",
      continent: "<value>",
      country: "Vietnam",
      city: "Lake Erinboro",
      device: "<value>",
      browser: "<value>",
      os: "<value>",
      referer: "<value>",
      ip: "174.51.16.236",
    },
    link: {
      id: "<id>",
      domain: "palatable-enigma.info",
      key: "<key>",
      externalId: "<value>",
      url: "http://first-pardon.biz",
      expiresAt: "<value>",
      expiredUrl: "https://major-homosexuality.info",
      password: "yLYAJYB_AYo_GFB",
      title: "<value>",
      description: "Monitored non-volatile task-force",
      image: "https://loremflickr.com/640/480",
      video: "<value>",
      ios: "<value>",
      android: "<value>",
      geo: {},
      tagId: "<value>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "purple",
        },
      ],
      comments: "<value>",
      shortLink: "https://stunning-disclaimer.org",
      qrCode: "https://unhealthy-view.net",
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