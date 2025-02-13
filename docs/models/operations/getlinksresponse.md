# GetLinksResponse

## Example Usage

```typescript
import { GetLinksResponse } from "dub/models/operations";

let value: GetLinksResponse = {
  result: [
    {
      id: "<id>",
      domain: "gifted-outset.com",
      key: "<key>",
      url: "https://colossal-sanity.biz",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1762519906148",
      expiredUrl: "https://simple-tenement.name/",
      password: "0S7GeywsYGMlq_m",
      title: "<value>",
      description: "firm than given",
      image: "https://loremflickr.com/419/455?lock=1669224422652840",
      video: "https://loremflickr.com/3683/849?lock=4615125709318777",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "green",
        },
      ],
      folderId: "<id>",
      webhookIds: [
        "<value>",
      ],
      comments:
        "posh pleasure woot yuck boo knitting underneath phew scholarship what shabby bloom blah along eek",
      shortLink: "https://acceptable-cheese.net",
      qrCode: "https://those-monster.name",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1720410908303",
      updatedAt: "1739391154590",
      projectId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `result`                                                         | [components.LinkSchema](../../models/components/linkschema.md)[] | :heavy_check_mark:                                               | N/A                                                              |