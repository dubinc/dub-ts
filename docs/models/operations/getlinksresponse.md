# GetLinksResponse

## Example Usage

```typescript
import { GetLinksResponse } from "dub/models/operations";

let value: GetLinksResponse = {
  result: [
    {
      id: "<id>",
      domain: "colorful-commercial.org",
      key: "<key>",
      url: "https://linear-piglet.com/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1756016604337",
      expiredUrl: "https://inferior-harp.info",
      password: "rZgedXxMwHWuL2I",
      title: "<value>",
      description: "gadzooks viability individual specific splash lest",
      image: "https://loremflickr.com/1328/2643?lock=5842756681283972",
      video: "https://picsum.videos/seed/fvKddGMSrI/3197/2828",
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
      webhookIds: [
        "<value>",
      ],
      comments: "shrilly aw stint baggy likewise nor off up warped coop",
      shortLink: "https://funny-goodwill.com",
      qrCode: "https://baggy-receptor.biz",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1712877586883",
      updatedAt: "1739183048519",
      projectId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `result`                                                         | [components.LinkSchema](../../models/components/linkschema.md)[] | :heavy_check_mark:                                               | N/A                                                              |