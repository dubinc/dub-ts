# LinkWebhookEvent

Triggered when a link is created, updated, or deleted.

## Example Usage

```typescript
import { LinkWebhookEvent } from "dub/models/components";

let value: LinkWebhookEvent = {
  id: "<id>",
  event: "link.deleted",
  createdAt: "1708683525128",
  data: {
    id: "<id>",
    domain: "spherical-violin.org",
    key: "<key>",
    url: "https://cluttered-minor.biz",
    externalId: "<id>",
    tenantId: "<id>",
    expiresAt: "1768679715808",
    expiredUrl: "https://pitiful-porter.info",
    password: "DyGlwDNI8gr1jyx",
    title: "<value>",
    description: "meh opposite shoot",
    image: "https://loremflickr.com/3834/1385?lock=736565324207501",
    video: "https://loremflickr.com/2658/3835?lock=4369929469649753",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "red",
      },
    ],
    webhookIds: [
      "<value>",
    ],
    comments: "syringe but ew except obtrude",
    shortLink: "https://little-eggplant.org/",
    qrCode: "https://waterlogged-management.biz/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1732203035253",
    updatedAt: "1738056935092",
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