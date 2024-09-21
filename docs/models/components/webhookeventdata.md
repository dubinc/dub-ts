# WebhookEventData

## Example Usage

```typescript
import { WebhookEventData } from "dub/models/components";

let value: WebhookEventData = {
  click: {
    id: "<id>",
    url: "https://impolite-pick.info",
    continent: "<value>",
    country: "Saint Vincent and the Grenadines",
    city: "Daveboro",
    device: "<value>",
    browser: "<value>",
    os: "<value>",
    referer: "<value>",
    ip: "136.180.243.177",
  },
  link: {
    id: "<id>",
    domain: "specific-colonialism.info",
    key: "<key>",
    externalId: "<value>",
    url: "https://ripe-encouragement.biz/",
    expiresAt: "<value>",
    expiredUrl: "https://stunning-minority.com/",
    password: "DibdiUTgl_XjzhR",
    title: "<value>",
    description: "Down-sized didactic open system",
    image: "https://loremflickr.com/121/3493?lock=4525156502466913",
    video: "<value>",
    ios: "<value>",
    android: "<value>",
    geo: {},
    tagId: "<value>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "blue",
      },
    ],
    comments: "<value>",
    shortLink: "https://grown-brief.biz",
    qrCode: "https://nippy-farmer.org/",
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
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `click`                                                                      | [components.WebhookEventClick](../../models/components/webhookeventclick.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `link`                                                                       | [components.WebhookEventLink](../../models/components/webhookeventlink.md)   | :heavy_check_mark:                                                           | N/A                                                                          |