# LinkWebhookEvent

Triggered when a link is created, updated, or deleted.

## Example Usage

```typescript
import { LinkWebhookEvent } from "dub/models/components";

let value: LinkWebhookEvent = {
  id: "<id>",
  event: "link.deleted",
  createdAt: "<value>",
  data: {
    id: "<id>",
    domain: "kooky-vista.name",
    key: "<key>",
    url: "https://infamous-polarisation.biz/",
    externalId: "<id>",
    identifier: "<value>",
    expiresAt: "<value>",
    expiredUrl: "https://mealy-airman.net",
    password: "VNtzTncHjqn0o4Z",
    title: "<value>",
    description: "eternity creamy geez so intermesh",
    image: "https://loremflickr.com/623/2019?lock=3532442346450405",
    video: "https://picsum.videos/seed/AKpm8JP/2934/3747",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "green",
      },
    ],
    webhookIds: [
      "<value>",
    ],
    comments:
      "ugh ignite briefly quip after minus pish up loosely coil sympathetically whether convoke confirm mid individual reboot",
    shortLink: "https://outlandish-bookend.name",
    qrCode: "https://agitated-forage.biz/",
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