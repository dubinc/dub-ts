# GetLinksResponse

## Example Usage

```typescript
import { GetLinksResponse } from "dub/models/operations";

let value: GetLinksResponse = {
  result: [
    {
      id: "<id>",
      domain: "colorful-strategy.com",
      key: "<key>",
      url: "https://wide-governance.com/",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://athletic-adviser.name/",
      password: "588BmBNNkgyN1Da",
      title: "<value>",
      description:
        "miserably translation patiently apropos even pish secret institute honesty",
      image: "https://picsum.photos/seed/ugaFP/1527/2923",
      video: "https://picsum.videos/seed/NXpjhGYh/2178/775",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "blue",
        },
      ],
      webhookIds: [
        "<value>",
      ],
      comments:
        "dark while beyond untimely whenever an representation lest aha analyse firm than given jealously",
      shortLink: "https://gracious-phrase.name",
      qrCode: "https://swift-newsletter.info",
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