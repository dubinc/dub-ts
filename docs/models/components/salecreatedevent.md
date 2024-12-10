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
      url: "https://urban-importance.info/",
      country: "Northern Mariana Islands",
      city: "New Sheaview",
      region: "<value>",
      continent: "Asia",
      device: "Desktop",
      browser: "Safari",
      os: "Windows Phone",
      referer: "simple-publicity.com",
      refererUrl: "https://sarcastic-molasses.com",
      ip: "ae9c:da39:8ac0:a53e:cb4a:bbf9:76ff:6ace",
    },
    link: {
      id: "<id>",
      domain: "experienced-verve.name",
      key: "<key>",
      url: "https://specific-coliseum.org",
      externalId: "<id>",
      expiresAt: "<value>",
      expiredUrl: "https://tricky-stall.biz",
      password: "qu1hWF_Hldw8Qh6",
      title: "<value>",
      description: "yum shrilly aw stint",
      image: "https://loremflickr.com/2361/1639?lock=7157226076564740",
      video: "https://loremflickr.com/3379/2631?lock=7281993395579244",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "red",
        },
      ],
      webhookIds: [
        "<value>",
      ],
      comments:
        "through nor cheerfully neatly juvenile instead promptly yahoo emergent bah barring",
      shortLink: "https://unfit-seagull.info/",
      qrCode: "https://affectionate-premise.org/",
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
      amount: 7785.19,
      currency: "Danish Krone",
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