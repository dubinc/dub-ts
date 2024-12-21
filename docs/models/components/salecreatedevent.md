# SaleCreatedEvent

Triggered when a sale is created.

## Example Usage

```typescript
import { SaleCreatedEvent } from "dub/models/components";

let value: SaleCreatedEvent = {
  id: "<id>",
  event: "sale.created",
  createdAt: "<value>",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "<value>",
    },
    click: {
      id: "<id>",
      url: "https://shadowy-scale.com",
      country: "Virgin Islands, British",
      city: "Stillwater",
      region: "<value>",
      continent: "North America",
      device: "Desktop",
      browser: "Safari",
      os: "BeOS",
      referer: "fearless-commercial.net",
      refererUrl: "https://celebrated-guard.biz",
      ip: "9ebf:dd5b:a44f:bd9f:36d3:f2b7:a8ad:d3eb",
    },
    link: {
      id: "<id>",
      domain: "evil-hammock.net",
      key: "<key>",
      url: "https://untimely-character.org",
      externalId: "<id>",
      expiresAt: "<value>",
      expiredUrl: "https://incomparable-injunction.net",
      password: "q_mEKQ9HknxMZLB",
      title: "<value>",
      description: "easily eek fine and stigmatize governance ice-cream",
      image: "https://loremflickr.com/2508/2494?lock=5708150078719394",
      video: "https://picsum.videos/seed/QagcSN/2663/2008",
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
      webhookIds: [
        "<value>",
      ],
      comments:
        "knowingly unto unfortunately until ascertain yum deceivingly colligate uh-huh drat capsize",
      shortLink: "https://ripe-tarragon.com/",
      qrCode: "https://remorseful-dulcimer.net",
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
      programId: "<id>",
    },
    sale: {
      amount: 1033.28,
      currency: "Dominican Peso",
      paymentProcessor: "<value>",
      invoiceId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `event`                                                                              | [components.SaleCreatedEventEvent](../../models/components/salecreatedeventevent.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `createdAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [components.SaleCreatedEventData](../../models/components/salecreatedeventdata.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |