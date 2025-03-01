# LinkWebhookEvent

Triggered when a link is created, updated, or deleted.

## Example Usage

```typescript
import { LinkWebhookEvent } from "dub/models/components";

let value: LinkWebhookEvent = {
  id: "<id>",
  event: "link.updated",
  createdAt: "1729108667374",
  data: {
    id: "<id>",
    domain: "spanish-step-mother.net",
    key: "<key>",
    url: "https://surprised-backburn.biz/",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1760433642633",
    expiredUrl: "https://personal-exhaust.info/",
    password: "PEcwmvOb5Z3aWp9",
    title: "<value>",
    description: "shrilly intently segregate atop sediment duh stingy",
    image: "https://picsum.photos/seed/4dNfZHt/1100/3156",
    video: "https://picsum.videos/seed/gHeSl/2282/2443",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "yellow",
      },
    ],
    folderId: "<id>",
    webhookIds: [
      "<value>",
    ],
    comments: "minus confute pish upside-down optimistic",
    shortLink: "https://polished-devastation.biz/",
    qrCode: "https://sandy-omelet.org/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1729639658199",
    updatedAt: "1740714834616",
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