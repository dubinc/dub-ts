# WebhookEventData

## Example Usage

```typescript
import { WebhookEventData } from "dub/models/components";

let value: WebhookEventData = {
  click: {
    id: "<id>",
    url: "https://arctic-tracking.com",
    continent: "<value>",
    country: "Antigua and Barbuda",
    city: "East Emilbury",
    device: "<value>",
    browser: "<value>",
    os: "<value>",
    referer: "<value>",
    ip: "63.243.144.76",
  },
  link: {
    id: "<id>",
    domain: "untrue-chub.name",
    key: "<key>",
    externalId: "<value>",
    url: "https://original-ice-cream.biz",
    expiresAt: "<value>",
    expiredUrl: "https://obese-chronometer.com",
    password: "_JCcw8tJRNw2gJv",
    title: "<value>",
    description: "Digitized multi-tasking paradigm",
    image: "https://loremflickr.com/640/480",
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
    shortLink: "https://fragrant-exaggeration.org",
    qrCode: "http://grumpy-nonsense.info",
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