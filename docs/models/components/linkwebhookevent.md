# LinkWebhookEvent

Triggered when a link is created, updated, or deleted.

## Example Usage

```typescript
import { LinkWebhookEvent } from "dub/models/components";

let value: LinkWebhookEvent = {
  id: "<id>",
  event: "link.updated",
  createdAt: "1729704356639",
  data: {
    id: "<id>",
    domain: "jealous-gastropod.org",
    key: "<key>",
    url: "https://arid-guidance.net/",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1759770159316",
    expiredUrl: "https://cavernous-thunderbolt.info",
    password: "NI8gr1jyxX9VKPq",
    title: "<value>",
    description:
      "since gadzooks suitcase eek incidentally skeleton deselect now",
    image: "https://loremflickr.com/1149/3518?lock=8481963083878032",
    video: "https://picsum.videos/seed/pDMQOaP3c/2184/1295",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "purple",
      },
    ],
    folderId: "<id>",
    webhookIds: [
      "<value>",
    ],
    comments: "verify well-groomed sadly beneath obstruct shrilly",
    shortLink: "https://sore-haircut.name",
    qrCode: "https://inexperienced-fowl.com",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1731002780737",
    updatedAt: "1739306107142",
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