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
      url: "https://miserly-accountability.com/",
      continent: "Europe",
      country: "Jamaica",
      city: "Troy",
      device: "Desktop",
      browser: "Firefox",
      os: "Symbian",
      referer: "ornate-futon.net",
      refererUrl: "https://red-defendant.net",
      ip: "178.124.240.17",
    },
    link: {
      id: "<id>",
      domain: "crushing-corral.biz",
      key: "<key>",
      url: "https://crooked-poppy.biz/",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://discrete-guacamole.org/",
      password: "CB7iqlWYgEQuS14",
      title: "<value>",
      description: "pace ugh supposing reschedule ordinary doing split",
      image: "https://loremflickr.com/1673/1903?lock=7285330112741442",
      video: "https://picsum.videos/seed/xNZbNlJHZ/483/685",
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
      comments: "whenever sympathetically sugary incline regarding",
      shortLink: "https://celebrated-meadow.info",
      qrCode: "https://posh-duster.com",
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
      amount: 4828.68,
      currency: "US Dollar",
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