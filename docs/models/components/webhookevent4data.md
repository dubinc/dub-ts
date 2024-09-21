# WebhookEvent4Data

## Example Usage

```typescript
import { WebhookEvent4Data } from "dub/models/components";

let value: WebhookEvent4Data = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    name: "<value>",
    email: "Arch_Breitenberg@gmail.com",
    avatar: "https://picsum.photos/seed/fft2Dpn/470/3903",
  },
  click: {
    id: "<id>",
    url: "https://scared-valley.info",
    continent: "<value>",
    country: "Tokelau",
    city: "Herzogfurt",
    device: "<value>",
    browser: "<value>",
    os: "<value>",
    referer: "<value>",
    ip: "223.28.54.46",
  },
  link: {
    id: "<id>",
    domain: "impractical-replacement.name",
    key: "<key>",
    externalId: "<value>",
    url: "https://abandoned-honesty.com/",
    expiresAt: "<value>",
    expiredUrl: "https://violent-cutover.org/",
    password: "m0ZfnNwdH1nMtfG",
    title: "<value>",
    description: "Implemented incremental success",
    image: "https://picsum.photos/seed/Iat8mWVhlB/2949/21",
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
    shortLink: "https://fantastic-surface.info/",
    qrCode: "https://dependent-lotion.biz",
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
    amount: 3165.43,
    currency: "Riel",
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