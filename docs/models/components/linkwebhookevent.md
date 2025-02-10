# LinkWebhookEvent

Triggered when a link is created, updated, or deleted.

## Example Usage

```typescript
import { LinkWebhookEvent } from "dub/models/components";

let value: LinkWebhookEvent = {
  id: "<id>",
  event: "link.updated",
  createdAt: "1738894804385",
  data: {
    id: "<id>",
    domain: "artistic-ethyl.org",
    key: "<key>",
    url: "https://supportive-perp.net",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1754762341168",
    expiredUrl: "https://stunning-merit.com/",
    password: "mAOsAt7vQZvqBmC",
    title: "<value>",
    description: "mummify airman however other equally",
    image: "https://picsum.photos/seed/qj4vXB/2492/459",
    video: "https://loremflickr.com/1200/3824?lock=6282681212672073",
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
    webhookIds: [
      "<value>",
    ],
    comments:
      "sadly beneath obstruct shrilly intently segregate atop sediment duh stingy than wiggly apropos besmirch consequently outside enormously obvious past energetically",
    shortLink: "https://taut-tarragon.info",
    qrCode: "https://strong-extension.name",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1713171426264",
    updatedAt: "1739172332979",
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