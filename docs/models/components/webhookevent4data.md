# WebhookEvent4Data

## Example Usage

```typescript
import { WebhookEvent4Data } from "dub/models/components";

let value: WebhookEvent4Data = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    name: "<value>",
    email: "Mireya_Dare72@gmail.com",
    avatar: "https://loremflickr.com/2837/2927?lock=3383001019892096",
  },
  click: {
    id: "<id>",
    url: "https://pointed-tenement.biz/",
    continent: "South America",
    country: "Angola",
    city: "Johnsfield",
    device: "Mobile",
    browser: "Firefox",
    os: "Blackberry",
    referer: "mature-sightseeing.info",
    refererUrl: "https://extroverted-nightlife.biz",
    ip: "3399:5200:5afa:d037:cc75:1c8c:f03b:babf",
  },
  link: {
    id: "<id>",
    domain: "impartial-netsuke.com",
    key: "<key>",
    url: "https://sentimental-descent.org/",
    externalId: "<id>",
    identifier: "<value>",
    expiresAt: "<value>",
    expiredUrl: "https://forceful-rule.com",
    password: "y9h9hSFDVpPFmdG",
    title: "<value>",
    description:
      "unless presume incidentally soybean showy contractor seemingly",
    image: "https://loremflickr.com/1571/118?lock=8180996667062220",
    video: "https://picsum.videos/seed/m6MHVd7I/1636/1329",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "yellow",
      },
    ],
    comments: "aw interesting fully inexperienced whup terrorise categorise",
    shortLink: "https://prestigious-valuable.name",
    qrCode: "https://whispered-pear.name",
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
  sale: {
    amount: 4660.22,
    currency: "US Dollar",
    paymentProcessor: "<value>",
    invoiceId: "<id>",
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