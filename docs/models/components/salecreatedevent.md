# SaleCreatedEvent

Triggered when a sale is created.

## Example Usage

```typescript
import { SaleCreatedEvent } from "dub/models/components";

let value: SaleCreatedEvent = {
  id: "<id>",
  event: "sale.created",
  createdAt: "1707926166494",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1710971970546",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://key-unibody.org",
      country: "Eritrea",
      city: "Fort Korbin",
      region: "<value>",
      continent: "Asia",
      device: "Mobile",
      browser: "Safari",
      os: "Blackberry",
      referer: "enlightened-skyscraper.info",
      refererUrl: "https://low-tusk.com",
      ip: "49.56.60.39",
    },
    link: {
      id: "<id>",
      domain: "rough-dandelion.biz",
      key: "<key>",
      url: "https://impeccable-velocity.info/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1748605754836",
      expiredUrl: "https://handsome-department.net/",
      password: "qlWYgEQuS14Cebl",
      title: "<value>",
      description:
        "ugh supposing reschedule ordinary doing split zen incidentally",
      image: "https://picsum.photos/seed/0KzGK/2925/2830",
      video: "https://picsum.videos/seed/CT90fNz/1974/1426",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "brown",
        },
      ],
      webhookIds: [
        "<value>",
      ],
      comments:
        "embalm furthermore optimistically unlike instead of fiercely without airport yowza yowza more geez",
      shortLink: "https://dental-milestone.info/",
      qrCode: "https://violent-design.net/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1708462530223",
      updatedAt: "1739149330516",
      projectId: "<id>",
    },
    sale: {
      amount: 8188.66,
      currency: "Malagasy Ariary",
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