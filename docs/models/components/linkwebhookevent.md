# LinkWebhookEvent

Triggered when a link is created, updated, or deleted.

## Example Usage

```typescript
import { LinkWebhookEvent } from "dub/models/components";

let value: LinkWebhookEvent = {
  id: "<id>",
  event: "link.created",
  createdAt: "1715242309849",
  data: {
    id: "<id>",
    domain: "creative-netsuke.biz",
    key: "<key>",
    url: "https://front-planula.name/",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1750276301762",
    expiredUrl: "https://flawed-distinction.name",
    password: "NKP9FfzjGYgHCfp",
    title: "<value>",
    description: "bonfire considering hungrily than impish",
    image: "https://picsum.photos/seed/ZHtzBY/308/858",
    video: "https://picsum.videos/seed/Slb2AP/647/1090",
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
    comments:
      "loosely coil sympathetically whether convoke confirm mid individual reboot inquisitively prickly frugal out phew viciously scorn silk meaningfully likewise",
    shortLink: "https://hidden-embossing.biz",
    qrCode: "https://dismal-submitter.name",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1738897671743",
    updatedAt: "1739845441747",
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