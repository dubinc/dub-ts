# GetLinksResponse

## Example Usage

```typescript
import { GetLinksResponse } from "dub/models/operations";

let value: GetLinksResponse = {
  result: [
    {
      id: "<id>",
      domain: "velvety-invite.name",
      key: "<key>",
      url: "https://svelte-adaptation.org/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1736214064841",
      expiredUrl: null,
      disabledAt: "<value>",
      password: "1AZS4x3PgdVHrvN",
      title: "<value>",
      description: "boo instead amongst",
      image: "https://picsum.photos/seed/r6ZXhwKLHi/796/3994",
      video: null,
      ios: "<value>",
      android: "<id>",
      geo: {
        "key": "https://defensive-recovery.org/",
        "key1": "https://sure-footed-individual.name/",
      },
      tags: [],
      folderId: "<id>",
      webhookIds: [
        "<value 1>",
      ],
      comments: null,
      shortLink: "https://unsightly-edge.name",
      qrCode: "https://obvious-vision.org/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: null,
      createdAt: "1711703848970",
      updatedAt: "1735676421772",
      tagId: "<id>",
      projectId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `result`                                                         | [components.LinkSchema](../../models/components/linkschema.md)[] | :heavy_check_mark:                                               | N/A                                                              |