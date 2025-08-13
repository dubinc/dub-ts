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
    geo: {
      "key": "https://idealistic-populist.com/",
      "key1": "https://grounded-hubris.name",
    },
    publicStats: true,
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "purple",
      },
    ],
    folderId: "<id>",
    webhookIds: [],
    comments:
      "drat airport replacement creak marketplace colorfully miserably testing adjudge procurement",
    shortLink: "https://pertinent-amendment.biz",
    qrCode: "https://surprised-procurement.com",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    testStartedAt: "<value>",
    testCompletedAt: null,
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1726685761102",
    updatedAt: "1735609291771",
    tagId: null,
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