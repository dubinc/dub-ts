# WebhookEvent3Data

## Example Usage

```typescript
import { WebhookEvent3Data } from "dub/models/components";

let value: WebhookEvent3Data = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    name: "<value>",
    email: "Katelynn_Stroman@yahoo.com",
    avatar: "https://loremflickr.com/640/480",
  },
  click: {
    id: "<id>",
    url: "http://sick-ambassador.net",
    continent: "<value>",
    country: "Cameroon",
    city: "Camarillo",
    device: "<value>",
    browser: "<value>",
    os: "<value>",
    referer: "<value>",
    ip: "254.181.115.181",
  },
  link: {
    id: "<id>",
    domain: "biodegradable-operation.biz",
    key: "<key>",
    externalId: "<value>",
    url: "https://criminal-id.info",
    expiresAt: "<value>",
    expiredUrl: "https://common-gather.name",
    password: "EvTY9v5GXULG8uQ",
    title: "<value>",
    description: "Reactive dynamic definition",
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
        color: "green",
      },
    ],
    comments: "<value>",
    shortLink: "https://mediocre-analgesia.net",
    qrCode: "https://glass-eyelid.org",
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