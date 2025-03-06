# LinkWebhookEvent

Triggered when a link is created, updated, or deleted.

## Example Usage

```typescript
import { LinkWebhookEvent } from "dub/models/components";

let value: LinkWebhookEvent = {
  id: "<id>",
  event: "link.deleted",
  createdAt: "1726925113150",
  data: {
    id: "<id>",
    domain: "glossy-silk.net",
    key: "<key>",
    url: "https://precious-sauerkraut.org/",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1766984662840",
    expiredUrl: "https://surprised-backburn.biz/",
    password: "ZIPEcwmvOb5Z3aW",
    title: "<value>",
    description: "huzzah impressive times inborn above",
    image: "https://picsum.photos/seed/cQfl43GVu/1529/1698",
    video: "https://picsum.videos/seed/NhMGo4dNfZ/3376/3175",
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
    comments:
      "hence ew brr smuggle book ultimately athwart coordinated guidance anti fast advocate",
    shortLink: "https://exalted-mythology.org/",
    qrCode: "https://sociable-unit.name",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1727921593743",
    updatedAt: "1741203872143",
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