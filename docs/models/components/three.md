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
      email: "Dovie_Heller@yahoo.com",
      avatar: "https://picsum.photos/seed/jP6DK9qT61/923/1075",
    },
    click: {
      id: "<id>",
      url: "https://jam-packed-section.org",
      continent: "<value>",
      country: "Fiji",
      city: "South Ladarius",
      device: "<value>",
      browser: "<value>",
      os: "<value>",
      referer: "<value>",
      ip: "f85e:2fee:948f:eedb:e688:ce60:86ed:ce7c",
    },
    link: {
      id: "<id>",
      domain: "submissive-bracelet.net",
      key: "<key>",
      externalId: "<value>",
      url: "https://substantial-shore.com/",
      expiresAt: "<value>",
      expiredUrl: "https://meager-comestible.com",
      password: "jVz8Lh4V2BIG1mX",
      title: "<value>",
      description: "Organic impactful utilisation",
      image: "https://picsum.photos/seed/XB7pMHU/1456/3151",
      video: "<value>",
      ios: "<value>",
      android: "<value>",
      geo: {},
      tagId: "<value>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "yellow",
        },
      ],
      comments: "<value>",
      shortLink: "https://lawful-millet.org",
      qrCode: "https://total-fort.org",
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