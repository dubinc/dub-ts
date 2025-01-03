# GetLinksResponse

## Example Usage

```typescript
import { GetLinksResponse } from "dub/models/operations";

let value: GetLinksResponse = {
  result: [
    {
      id: "<id>",
      domain: "perky-hydrolyze.name",
      key: "<key>",
      url: "https://fine-configuration.name",
      externalId: "<id>",
      expiresAt: "1745614747281",
      expiredUrl: "https://able-pleasure.com/",
      password: "f40ZIsQaDEgLAKP",
      title: "<value>",
      description:
        "where dependency ha gadzooks burdensome pfft nor equate per mid",
      image: "https://picsum.photos/seed/n3NFrvT/1591/3266",
      video: "https://picsum.videos/seed/6jGT6BGh/3510/717",
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
      webhookIds: [
        "<value>",
      ],
      comments: "council absent quietly stake gaseous so",
      shortLink: "https://striking-trench.biz",
      qrCode: "https://unripe-soybean.info/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1719126875602",
      updatedAt: "1735900457356",
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