# WebhookEvent3Data

## Example Usage

```typescript
import { WebhookEvent3Data } from "dub/models/components";

let value: WebhookEvent3Data = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    name: "<value>",
    email: "Aditya96@gmail.com",
    avatar: "https://picsum.photos/seed/bG6gYD/608/3",
  },
  click: {
    id: "<id>",
    url: "https://impassioned-sand.com",
    continent: "<value>",
    country: "Venezuela",
    city: "North Highlands",
    device: "<value>",
    browser: "<value>",
    os: "<value>",
    referer: "<value>",
    ip: "179.233.134.90",
  },
  link: {
    id: "<id>",
    domain: "cloudy-responsibility.org",
    key: "<key>",
    externalId: "<value>",
    url: "https://smart-affect.org/",
    expiresAt: "<value>",
    expiredUrl: "https://next-encouragement.org",
    password: "okRMJ4IB0J9RwnU",
    title: "<value>",
    description: "Synchronised well-modulated archive",
    image: "https://picsum.photos/seed/7A0cXkDh/2523/3991",
    video: "<value>",
    ios: "<value>",
    android: "<value>",
    geo: {},
    tagId: "<value>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "brown",
      },
    ],
    comments: "<value>",
    shortLink: "https://graceful-scratch.com",
    qrCode: "https://elegant-plugin.com/",
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

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `eventName`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `customer`                                                                         | [components.WebhookEventCustomer](../../models/components/webhookeventcustomer.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `click`                                                                            | [components.WebhookEvent3Click](../../models/components/webhookevent3click.md)     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `link`                                                                             | [components.WebhookEvent3Link](../../models/components/webhookevent3link.md)       | :heavy_check_mark:                                                                 | N/A                                                                                |