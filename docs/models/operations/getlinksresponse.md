# GetLinksResponse

## Example Usage

```typescript
import { GetLinksResponse } from "dub/models/operations";

let value: GetLinksResponse = {
  result: [
    {
      id: "<id>",
      domain: "urban-institute.org",
      key: "<key>",
      externalId: "<id>",
      url: "https://orderly-tarragon.info/",
      expiresAt: "<value>",
      expiredUrl: "https://instructive-goat.net/",
      password: "pP0pT3hRmHbLW8R",
      title: "<value>",
      description: "fax boo sardonic deflect yum shrilly aw stint",
      image: "https://loremflickr.com/2361/1639?lock=7157226076564740",
      video: "https://loremflickr.com/3379/2631?lock=7281993395579244",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "red",
        },
      ],
      comments:
        "through nor cheerfully neatly juvenile instead promptly yahoo emergent bah barring",
      shortLink: "https://unfit-seagull.info/",
      qrCode: "https://affectionate-premise.org/",
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
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `result`                                                         | [components.LinkSchema](../../models/components/linkschema.md)[] | :heavy_check_mark:                                               | N/A                                                              |