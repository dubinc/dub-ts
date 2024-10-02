# WebhookEventData

## Example Usage

```typescript
import { WebhookEventData } from "dub/models/components";

let value: WebhookEventData = {
  click: {
    id: "<id>",
    url: "https://fatal-knuckle.info",
    continent: "Asia",
    country: "Tuvalu",
    city: "Rueckerstad",
    device: "Mobile",
    browser: "Firefox",
    os: "Chrome OS",
    referer: "magnificent-derby.org",
    refererUrl: "https://disloyal-devastation.net/",
    ip: "90f2:cbeb:7584:fce4:0ca4:8bda:f1ee:54aa",
  },
  link: {
    id: "<id>",
    domain: "yellow-mountain.org",
    key: "<key>",
    url: "https://cruel-plumber.info/",
    externalId: "<id>",
    identifier: "<value>",
    expiresAt: "<value>",
    expiredUrl: "https://interesting-promise.name",
    password: "edVLI03qJm6fV1l",
    title: "<value>",
    description: "brr cautious courteous pixellate",
    image: "https://picsum.photos/seed/C8nSa2bf/1232/398",
    video: "https://loremflickr.com/3134/2592?lock=155731347285237",
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
    comments:
      "why leading burdensome verify for sedately over anenst hungrily mothball yowza after captain er jiggle",
    shortLink: "https://scary-heroine.net/",
    qrCode: "https://artistic-fireplace.net",
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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `click`                                                                      | [components.WebhookEventClick](../../models/components/webhookeventclick.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `link`                                                                       | [components.WebhookEventLink](../../models/components/webhookeventlink.md)   | :heavy_check_mark:                                                           | N/A                                                                          |