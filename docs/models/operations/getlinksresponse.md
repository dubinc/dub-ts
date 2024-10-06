# GetLinksResponse

## Example Usage

```typescript
import { GetLinksResponse } from "dub/models/operations";

let value: GetLinksResponse = {
  result: [
    {
      id: "<id>",
      domain: "poor-fireplace.com",
      key: "<key>",
      url: "https://extra-large-bar.biz",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://frilly-fork.net/",
      password: "BNNkgyN1DaqYROh",
      title: "<value>",
      description: "actual finally provided jaywalk",
      image: "https://loremflickr.com/1890/2665?lock=4798082381486419",
      video: "https://loremflickr.com/3541/1669?lock=4083055787457938",
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
      comments:
        "attend lazy kick when reckon vice towards saturate though when plus save dapper untimely",
      shortLink: "https://trusting-mouser.info/",
      qrCode: "https://stained-starboard.name/",
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