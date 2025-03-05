# GetLinksResponse

## Example Usage

```typescript
import { GetLinksResponse } from "dub/models/operations";

let value: GetLinksResponse = {
  result: [
    {
      id: "<id>",
      domain: "front-sport.info",
      key: "<key>",
      url: "https://quixotic-accountability.com",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1742122977391",
      expiredUrl: "https://electric-schnitzel.net/",
      password: "8FrVJwoj88MzpsW",
      title: "<value>",
      description:
        "softly spattering including including since brr haunting bookend mispronounce goodwill",
      image: "https://loremflickr.com/3381/2246?lock=5370038539189414",
      video: "https://loremflickr.com/929/2086?lock=981045542906183",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "pink",
        },
      ],
      folderId: "<id>",
      webhookIds: [
        "<value>",
      ],
      comments:
        "indeed halt requite oh personal skateboard outside quart carefully quicker",
      shortLink: "https://murky-sunbeam.biz",
      qrCode: "https://bony-riser.biz",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1713284650753",
      updatedAt: "1741096379584",
      projectId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `result`                                                         | [components.LinkSchema](../../models/components/linkschema.md)[] | :heavy_check_mark:                                               | N/A                                                              |