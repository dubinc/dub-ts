# GetLinksResponse

## Example Usage

```typescript
import { GetLinksResponse } from "dub/models/operations";

let value: GetLinksResponse = {
  result: [
    {
      id: "<id>",
      domain: "dazzling-step-mother.net",
      key: "<key>",
      externalId: "<value>",
      url: "https://humble-transom.net/",
      expiresAt: "<value>",
      expiredUrl: "https://elegant-apricot.info",
      password: "or8A2miRv0cVHfv",
      title: "<value>",
      description: "Right-sized static access",
      image: "https://loremflickr.com/1241/2062?lock=2082959440133813",
      video: "<value>",
      ios: "<value>",
      android: "<value>",
      geo: {},
      tagId: "<value>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "green",
        },
      ],
      comments: "<value>",
      shortLink: "https://free-forager.com",
      qrCode: "https://cruel-creature.biz",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<value>",
      workspaceId: "<value>",
      lastClicked: "<value>",
      createdAt: "<value>",
      updatedAt: "<value>",
      projectId: "<value>",
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `result`                                                         | [components.LinkSchema](../../models/components/linkschema.md)[] | :heavy_check_mark:                                               | N/A                                                              |