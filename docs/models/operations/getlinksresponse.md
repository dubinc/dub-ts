# GetLinksResponse

## Example Usage

```typescript
import { GetLinksResponse } from "dub/models/operations";

let value: GetLinksResponse = {
  result: [
    {
      id: "<id>",
      domain: "burdensome-sarong.org",
      key: "<key>",
      url: "https://live-sock.com",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1751225400656",
      expiredUrl: "https://arid-guacamole.org",
      password: "KLfwz0M7ydYdbdr",
      title: "<value>",
      description: "absent delectable cafe a how why lest",
      image: "https://picsum.photos/seed/RKXNA/2700/2465",
      video: "https://loremflickr.com/3668/2617?lock=1580794220465410",
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
      comments:
        "victorious plus wilderness all the hence instead overburden seagull colorfully surprisingly suddenly avaricious aw bitterly lost",
      shortLink: "https://weary-t-shirt.biz",
      qrCode: "https://gummy-casket.net",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1737181092190",
      updatedAt: "1743206966368",
      projectId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `result`                                                         | [components.LinkSchema](../../models/components/linkschema.md)[] | :heavy_check_mark:                                               | N/A                                                              |