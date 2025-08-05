# LinkWebhookEvent

Triggered when a link is created, updated, or deleted.

## Example Usage

```typescript
import { LinkWebhookEvent } from "dub/models/components";

let value: LinkWebhookEvent = {
  id: "<id>",
  event: "link.deleted",
  createdAt: "1723208002502",
  data: {
    id: "<id>",
    domain: "exalted-pinstripe.com",
    key: "<key>",
    url: "https://quick-lender.biz",
    trackConversion: false,
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    archived: true,
    expiresAt: "1766035738364",
    expiredUrl: "https://dim-pine.name/",
    password: "JCJcSX4FfG7ytmN",
    proxy: false,
    title: "<value>",
    description: "utter gah aside rag besides",
    image: "https://picsum.photos/seed/yeeobM5NIy/2915/1722",
    video: "https://picsum.videos/seed/CIED2tKc/1414/3938",
    rewrite: true,
    doIndex: true,
    ios: "<value>",
    android: "<id>",
    geo: {},
    publicStats: false,
    tags: [],
    folderId: "<id>",
    webhookIds: [],
    comments: "anti misjudge in lest besides under better darn upon once",
    shortLink: "https://aggravating-translation.info/",
    qrCode: "https://pertinent-cinema.name",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: null,
    utmContent: "<value>",
    testStartedAt: "<value>",
    testCompletedAt: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1708198872441",
    updatedAt: "1735687037106",
    tagId: "<id>",
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