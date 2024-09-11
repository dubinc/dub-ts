# One

## Example Usage

```typescript
import { One } from "dub/models/components";

let value: One = {
  id: "<id>",
  event: "link.created",
  createdAt: "<value>",
  data: {
    id: "<id>",
    domain: "brief-landform.name",
    key: "<key>",
    externalId: "<value>",
    url: "https://hidden-deal.com",
    expiresAt: "<value>",
    expiredUrl: "http://worse-strength.org",
    password: "MMNLQIrNLG7FArd",
    title: "<value>",
    description: "Integrated motivating function",
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
        color: "green",
      },
    ],
    comments: "<value>",
    shortLink: "http://indolent-gallon.name",
    qrCode: "https://big-hearted-paddle.net",
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