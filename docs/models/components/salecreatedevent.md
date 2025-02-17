# SaleCreatedEvent

Triggered when a sale is created.

## Example Usage

```typescript
import { SaleCreatedEvent } from "dub/models/components";

let value: SaleCreatedEvent = {
  id: "<id>",
  event: "sale.created",
  createdAt: "1723052442233",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1709671139658",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://noxious-curl.name/",
      country: "Germany",
      city: "Fort Deltaton",
      region: "<value>",
      continent: "Antarctica",
      device: "Desktop",
      browser: "Chrome",
      os: "Android",
      referer: "strange-bakeware.info",
      refererUrl: "https://worst-charm.info/",
      ip: "199.69.188.6",
    },
    link: {
      id: "<id>",
      domain: "vast-bracelet.info",
      key: "<key>",
      url: "https://hoarse-pantyhose.com/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1748869489653",
      expiredUrl: "https://tepid-mozzarella.name",
      password: "Oh4LO9txh72WK3y",
      title: "<value>",
      description: "horde though whether modulo",
      image: "https://loremflickr.com/181/3672?lock=8207291338824744",
      video: "https://picsum.videos/seed/bqnJQ0u/1674/2309",
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
      folderId: "<id>",
      webhookIds: [
        "<value>",
      ],
      comments: "uh-huh foolhardy pro fax boo sardonic deflect",
      shortLink: "https://sparse-synergy.info",
      qrCode: "https://dearest-exterior.name",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1712879818218",
      updatedAt: "1739748332673",
      projectId: "<id>",
    },
    sale: {
      amount: 1278.57,
      currency: "Leone",
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