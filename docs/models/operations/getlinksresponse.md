# GetLinksResponse

## Example Usage

```typescript
import { GetLinksResponse } from "dub/models/operations";

let value: GetLinksResponse = {
  result: [
    {
      id: "<id>",
      domain: "hurtful-onset.org",
      key: "<key>",
      url: "https://actual-discourse.net/",
      externalId: "<id>",
      tenantId: "<id>",
      expiresAt: "1755958494944",
      expiredUrl: "https://neglected-doing.net",
      password: "_nKI6c5phyVKlNu",
      title: "<value>",
      description:
        "bravely fill essence coincide transparency below wholly barring how scrutinise",
      image: "https://picsum.photos/seed/Eqr7aUst/99/734",
      video: "https://picsum.videos/seed/ppsRBKI3YH/2665/57",
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
      webhookIds: [
        "<value>",
      ],
      comments: "lazy kick when reckon vice",
      shortLink: "https://shadowy-scale.com",
      qrCode: "https://wobbly-substitution.org",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1716836155539",
      updatedAt: "1738070298752",
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