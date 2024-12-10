# LinkWebhookEvent

Triggered when a link is created, updated, or deleted.

## Example Usage

```typescript
import { LinkWebhookEvent } from "dub/models/components";

let value: LinkWebhookEvent = {
  id: "<id>",
  event: "link.updated",
  createdAt: "<value>",
  data: {
    id: "<id>",
    domain: "crushing-label.biz",
    key: "<key>",
    url: "https://shimmering-tuba.net/",
    externalId: "<id>",
    expiresAt: "<value>",
    expiredUrl: "https://paltry-reporter.info/",
    password: "CfpkZkHhGUL9uEE",
    title: "<value>",
    description: "briefly quip after minus pish up",
    image: "https://picsum.photos/seed/cks29anK/3031/246",
    video: "https://picsum.videos/seed/TY75NacSW/3325/652",
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
      "athwart coordinated guidance anti fast advocate weird qualified woot concerning huzzah grouper ugh clavicle yawningly dally and whether",
    shortLink: "https://sorrowful-jet.name",
    qrCode: "https://short-suv.com",
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