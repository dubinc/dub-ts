# One

## Example Usage

```typescript
import { One } from "dub/models/components";

let value: One = {
  id: "<id>",
  event: "link.updated",
  createdAt: "<value>",
  data: {
    id: "<id>",
    domain: "tasty-deed.info",
    key: "<key>",
    url: "https://defensive-circumference.org",
    externalId: "<id>",
    identifier: "<value>",
    expiresAt: "<value>",
    expiredUrl: "https://shoddy-stall.name",
    password: "OUeFdze7qwA1lt_",
    title: "<value>",
    description:
      "reproach past finer square vice indolent stir-fry psst custom vestment",
    image: "https://loremflickr.com/2068/1023?lock=8256240493601223",
    video: "https://loremflickr.com/1298/1988?lock=3920072911506214",
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
      "satisfy encouragement openly painfully unabashedly sticky once fathom collaborate hepatitis wide-eyed near nor coolly syringe request amid shady croon",
    shortLink: "https://any-synergy.net",
    qrCode: "https://favorite-contrail.name/",
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
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `id`                                               | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `event`                                            | *components.WebhookEventEvent*                     | :heavy_check_mark:                                 | N/A                                                |
| `createdAt`                                        | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `data`                                             | [components.Data](../../models/components/data.md) | :heavy_check_mark:                                 | N/A                                                |