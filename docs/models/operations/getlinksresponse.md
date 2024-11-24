# GetLinksResponse

## Example Usage

```typescript
import { GetLinksResponse } from "dub/models/operations";

let value: GetLinksResponse = {
  result: [
    {
      id: "<id>",
      domain: "insidious-hamburger.biz",
      key: "<key>",
      url: "https://spiteful-printer.com",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://grim-alert.name",
      password: "gFrBTxfjvoNo9sF",
      title: "<value>",
      description: "twist er until known unlike over brook council absent",
      image: "https://picsum.photos/seed/MuDBx/3429/3877",
      video: "https://picsum.videos/seed/RKXNA/2700/2465",
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
      webhookIds: [
        "<value>",
      ],
      comments:
        "until usually even by wholly unnecessarily amid far-off beloved decent whoa lively publicity briskly oof",
      shortLink: "https://edible-bowler.com",
      qrCode: "https://inferior-diagram.org/",
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
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `result`                                                         | [components.LinkSchema](../../models/components/linkschema.md)[] | :heavy_check_mark:                                               | N/A                                                              |