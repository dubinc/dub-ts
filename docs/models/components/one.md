# One

## Example Usage

```typescript
import { One } from "dub/models/components";

let value: One = {
  id: "<id>",
  event: "link.updated",
  createdAt: "<value>",
  data: {
    id: "<id>",
    domain: "interesting-traditionalism.com",
    key: "<key>",
    externalId: "<value>",
    url: "https://twin-bench.info",
    expiresAt: "<value>",
    expiredUrl: "https://short-term-testing.net",
    password: "Pc3NrXBqmqHpBxb",
    title: "<value>",
    description: "Automated impactful intranet",
    image: "https://loremflickr.com/1361/275?lock=3224432649305414",
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
    shortLink: "https://sentimental-farm.biz",
    qrCode: "https://apt-dish.net/",
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
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `id`                                               | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `event`                                            | *components.WebhookEventEvent*                     | :heavy_check_mark:                                 | N/A                                                |
| `createdAt`                                        | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `data`                                             | [components.Data](../../models/components/data.md) | :heavy_check_mark:                                 | N/A                                                |