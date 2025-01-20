# SaleCreatedEvent

Triggered when a sale is created.

## Example Usage

```typescript
import { SaleCreatedEvent } from "dub/models/components";

let value: SaleCreatedEvent = {
  id: "<id>",
  event: "sale.created",
  createdAt: "1726823852902",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1714883320882",
    },
    click: {
      id: "<id>",
      url: "https://insecure-density.com",
      country: "Vanuatu",
      city: "New Colthaven",
      region: "<value>",
      continent: "Antarctica",
      device: "Mobile",
      browser: "Chrome",
      os: "Symbian",
      referer: "radiant-heartache.org",
      refererUrl: "https://idealistic-coil.net",
      ip: "454a:16ad:ca0c:97fe:5b2a:7330:baa6:8d20",
    },
    link: {
      id: "<id>",
      domain: "ecstatic-legislature.com",
      key: "<key>",
      url: "https://ruddy-hygienic.org/",
      externalId: "<id>",
      tenantId: "<id>",
      expiresAt: "1766054773433",
      expiredUrl: "https://humble-tool.name/",
      password: "Dmx6nHcOz357b57",
      title: "<value>",
      description: "geez where microblog questioningly",
      image: "https://loremflickr.com/433/116?lock=6474907856928254",
      video: "https://picsum.videos/seed/uczD7z6x/2773/3170",
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
      webhookIds: [
        "<value>",
      ],
      comments: "chasuble noxious imaginary below whereas yak",
      shortLink: "https://squiggly-flint.net/",
      qrCode: "https://zealous-cannon.com",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1729378969007",
      updatedAt: "1737295580636",
      projectId: "<id>",
      programId: "<id>",
    },
    sale: {
      amount: 6908.74,
      currency: "Swedish Krona",
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