# LinkWebhookEvent

Triggered when a link is created, updated, or deleted.

## Example Usage

```typescript
import { LinkWebhookEvent } from "dub/models/components";

let value: LinkWebhookEvent = {
  id: "<id>",
  event: "link.updated",
  createdAt: "1704794144882",
  data: {
    id: "<id>",
    domain: "sorrowful-meal.com",
    key: "<key>",
    url: "https://forceful-sweatshop.biz/",
    externalId: "<id>",
    expiresAt: "1765215521948",
    expiredUrl: "https://glossy-silk.net",
    password: "Hjqn0o4ZIPEcwmv",
    title: "<value>",
    description: "as pfft grandson inexperienced pike investigate",
    image: "https://loremflickr.com/1012/3568?lock=352416681733758",
    video: "https://picsum.videos/seed/cQfl43GVu/1529/1698",
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
    comments:
      "impish intervention hence ew brr smuggle book ultimately athwart coordinated guidance anti fast advocate weird qualified woot",
    shortLink: "https://colossal-hospitalization.info",
    qrCode: "https://misguided-fund.net",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1706102613375",
    updatedAt: "1735435148925",
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