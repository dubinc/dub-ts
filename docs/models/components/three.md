# Three

## Example Usage

```typescript
import { Three } from "dub/models/components";

let value: Three = {
  id: "<id>",
  event: "lead.created",
  createdAt: "<value>",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      name: "<value>",
      email: "Saige90@hotmail.com",
      avatar: "https://loremflickr.com/640/480",
    },
    click: {
      id: "<id>",
      url: "http://gigantic-hypothesis.org",
      continent: "<value>",
      country: "Bolivia",
      city: "Faustinomouth",
      device: "<value>",
      browser: "<value>",
      os: "<value>",
      referer: "<value>",
      ip: "189.99.174.135",
    },
    link: {
      id: "<id>",
      domain: "phony-use.net",
      key: "<key>",
      externalId: "<value>",
      url: "https://dirty-polyester.info",
      expiresAt: "<value>",
      expiredUrl: "https://radiant-maximum.org",
      password: "TrdLDSVxCPGIAw4",
      title: "<value>",
      description: "Quality-focused background artificial intelligence",
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
      shortLink: "http://responsible-manner.net",
      qrCode: "https://weak-gnat.com",
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
| `event`                                                                        | [components.WebhookEvent3Event](../../models/components/webhookevent3event.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [components.WebhookEvent3Data](../../models/components/webhookevent3data.md)   | :heavy_check_mark:                                                             | N/A                                                                            |