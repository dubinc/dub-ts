# GetLinksResponse

## Example Usage

```typescript
import { GetLinksResponse } from "dub/models/operations";

let value: GetLinksResponse = {
  result: [
    {
      id: "<id>",
      domain: "shocked-crocodile.com",
      key: "<key>",
      url: "https://worthless-hexagon.org",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1741702377605",
      expiredUrl: "https://responsible-ghost.com",
      password: "EgLAKPz9q194ulK",
      title: "<value>",
      description: "knowingly unto unfortunately until ascertain yum",
      image: "https://loremflickr.com/3626/3763?lock=841150256223553",
      video: "https://loremflickr.com/1198/1876?lock=2175853929679726",
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
      folderId: "<id>",
      webhookIds: [
        "<value>",
      ],
      comments:
        "hmph gnash stuff tarragon design merit spook numeric round apropos separate impish whenever viability outside blissfully",
      shortLink: "https://failing-sand.name",
      qrCode: "https://stained-crocodile.net/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1720226753460",
      updatedAt: "1739712829536",
      projectId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `result`                                                         | [components.LinkSchema](../../models/components/linkschema.md)[] | :heavy_check_mark:                                               | N/A                                                              |