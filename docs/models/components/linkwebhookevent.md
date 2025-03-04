# LinkWebhookEvent

Triggered when a link is created, updated, or deleted.

## Example Usage

```typescript
import { LinkWebhookEvent } from "dub/models/components";

let value: LinkWebhookEvent = {
  id: "<id>",
  event: "link.created",
  createdAt: "1740992704534",
  data: {
    id: "<id>",
    domain: "round-intervention.name",
    key: "<key>",
    url: "https://wiggly-cod.biz",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1763437919761",
    expiredUrl: "https://trusting-fold.biz/",
    password: "YoxhWV4L0Ego0hu",
    title: "<value>",
    description:
      "whoever frizzy vet wherever completion challenge mentor mmm ill-fated so",
    image: "https://picsum.photos/seed/qpxwm/1099/1737",
    video: "https://loremflickr.com/3051/269?lock=3785359610428428",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "brown",
      },
    ],
    folderId: "<id>",
    webhookIds: [
      "<value>",
    ],
    comments: "geez oxidise row a mmm upsell more short who",
    shortLink: "https://sarcastic-t-shirt.info",
    qrCode: "https://foolhardy-simple.org/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1720609461995",
    updatedAt: "1740999256747",
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