# LinkWebhookEvent

Triggered when a link is created, updated, or deleted.

## Example Usage

```typescript
import { LinkWebhookEvent } from "dub/models/components";

let value: LinkWebhookEvent = {
  id: "<id>",
  event: "link.deleted",
  createdAt: "1718443474319",
  data: {
    id: "<id>",
    domain: "political-birth.name",
    key: "<key>",
    url: "https://aggravating-euphonium.info",
    trackConversion: false,
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    archived: false,
    expiresAt: "1742558580655",
    expiredUrl: "https://deafening-pronoun.info",
    password: "Rafvfob4pfCF6Nj",
    proxy: false,
    title: "<value>",
    description:
      "warp sidetrack provided blah inquisitively reorganisation dish dash",
    image: "https://picsum.photos/seed/hy6ftTuJKn/2259/2652",
    video: "https://picsum.videos/seed/VJyUR/2753/3851",
    rewrite: false,
    doIndex: false,
    ios: "<value>",
    android: "<id>",
    geo: {},
    publicStats: false,
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
    comments: "naughty summary wedding plus broadly psst zowie",
    shortLink: "https://silent-finer.org/",
    qrCode: "https://definitive-testing.info/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    testStartedAt: "<value>",
    testCompletedAt: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1724612243360",
    updatedAt: "1735643557876",
    projectId: "<id>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `event`                                                                            | *components.LinkWebhookEventEvent*                                                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `createdAt`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `data`                                                                             | [components.LinkWebhookEventLink](../../models/components/linkwebhookeventlink.md) | :heavy_check_mark:                                                                 | N/A                                                                                |