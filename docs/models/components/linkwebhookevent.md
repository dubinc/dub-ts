# LinkWebhookEvent

Triggered when a link is created, updated, or deleted.

## Example Usage

```typescript
import { LinkWebhookEvent } from "dub/models/components";

let value: LinkWebhookEvent = {
  id: "<id>",
  event: "link.created",
  createdAt: "<value>",
  data: {
    id: "<id>",
    domain: "another-hepatitis.org",
    key: "<key>",
    url: "https://decisive-trash.biz/",
    externalId: "<id>",
    expiresAt: "<value>",
    expiredUrl: "https://shady-distinction.biz/",
    password: "Fkw0YUnohNzyhHC",
    title: "<value>",
    description: "without yowza readily instead abnormally",
    image: "https://picsum.photos/seed/iVlEh6v/1142/3256",
    video: "https://loremflickr.com/3693/2474?lock=6146779144649977",
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
    webhookIds: [
      "<value>",
    ],
    comments: "apud while meh um fabricate actual ew mmm zowie reorient",
    shortLink: "https://negative-signature.net/",
    qrCode: "https://nautical-pine.com",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "<value>",
    updatedAt: "<value>",
    projectId: "<id>",
    programId: "<id>",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `id`                                               | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `event`                                            | *components.LinkWebhookEventEvent*                 | :heavy_check_mark:                                 | N/A                                                |
| `createdAt`                                        | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `data`                                             | [components.Data](../../models/components/data.md) | :heavy_check_mark:                                 | N/A                                                |