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
    expiresAt: "1764304535711",
    expiredUrl: "https://red-mobility.biz/",
    disabledAt: "<value>",
    password: "CJcSX4FfG7ytmNw",
    proxy: true,
    title: "<value>",
    description: "far-off reluctantly however consequently how dicker meander",
    image: "https://picsum.photos/seed/CIED2tKc/1414/3938",
    video: "https://loremflickr.com/94/2074?lock=4301890640176151",
    rewrite: false,
    doIndex: true,
    ios: "<value>",
    android: "<id>",
    geo: {
      "key": "https://jam-packed-pacemaker.info/",
      "key1": "https://poor-makeover.biz/",
    },
    publicStats: false,
    tags: [],
    folderId: null,
    comments:
      "repeatedly confusion gestate dish a daughter ick oof newsstand however remand afore against",
    shortLink: "https://robust-thorn.org",
    qrCode: "https://querulous-taxicab.net",
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
    createdAt: "1726755003688",
    updatedAt: "1735638431801",
    tagId: "<id>",
    projectId: "<id>",
    webhookIds: [],
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `id`                                               | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `event`                                            | *components.Event*                                 | :heavy_check_mark:                                 | N/A                                                |
| `createdAt`                                        | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `data`                                             | [components.Data](../../models/components/data.md) | :heavy_check_mark:                                 | N/A                                                |