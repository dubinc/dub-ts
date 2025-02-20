# GetLinksResponse

## Example Usage

```typescript
import { GetLinksResponse } from "dub/models/operations";

let value: GetLinksResponse = {
  result: [
    {
      id: "<id>",
      domain: "second-hand-commercial.biz",
      key: "<key>",
      url: "https://crazy-valuable.com",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1764567262060",
      expiredUrl: "https://shameless-habit.net/",
      password: "vY0S7GeywsYGMlq",
      title: "<value>",
      description: "atop up obesity easily eek fine and stigmatize",
      image: "https://picsum.photos/seed/80nKZsi/248/2035",
      video: "https://loremflickr.com/1387/368?lock=5648672466153320",
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
      comments: "convalesce after kindheartedly beyond frizz",
      shortLink: "https://utilized-railway.com",
      qrCode: "https://unselfish-sock.info",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1734557086959",
      updatedAt: "1739991361315",
      projectId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `result`                                                         | [components.LinkSchema](../../models/components/linkschema.md)[] | :heavy_check_mark:                                               | N/A                                                              |