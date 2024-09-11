# WebhookEvent4Data

## Example Usage

```typescript
import { WebhookEvent4Data } from "dub/models/components";

let value: WebhookEvent4Data = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    name: "<value>",
    email: "Obie79@gmail.com",
    avatar: "https://loremflickr.com/640/480",
  },
  click: {
    id: "<id>",
    url: "http://well-off-curtailment.info",
    continent: "<value>",
    country: "Libyan Arab Jamahiriya",
    city: "Vellahaven",
    device: "<value>",
    browser: "<value>",
    os: "<value>",
    referer: "<value>",
    ip: "142.117.24.243",
  },
  link: {
    id: "<id>",
    domain: "petty-moonscape.org",
    key: "<key>",
    externalId: "<value>",
    url: "https://cuddly-timpani.org",
    expiresAt: "<value>",
    expiredUrl: "https://bossy-chowder.com",
    password: "FyIK9fqgBKBFS2q",
    title: "<value>",
    description: "Intuitive interactive system engine",
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
        color: "purple",
      },
    ],
    comments: "<value>",
    shortLink: "http://paltry-utensil.com",
    qrCode: "https://brisk-inbox.com",
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
  sale: {
    amount: 3267.01,
    currency: "Bahraini Dinar",
    paymentProcessor: "<value>",
    invoiceId: "<value>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `eventName`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `customer`                                                                           | [components.WebhookEvent4Customer](../../models/components/webhookevent4customer.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `click`                                                                              | [components.WebhookEvent4Click](../../models/components/webhookevent4click.md)       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `link`                                                                               | [components.WebhookEvent4Link](../../models/components/webhookevent4link.md)         | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `sale`                                                                               | [components.WebhookEventSale](../../models/components/webhookeventsale.md)           | :heavy_check_mark:                                                                   | N/A                                                                                  |