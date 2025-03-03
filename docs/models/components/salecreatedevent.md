# SaleCreatedEvent

Triggered when a sale is created.

## Example Usage

```typescript
import { SaleCreatedEvent } from "dub/models/components";

let value: SaleCreatedEvent = {
  id: "<id>",
  event: "sale.created",
  createdAt: "1722759258646",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1722283973856",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://squiggly-scholarship.net/",
      country: "Aland Islands",
      city: "Gainesville",
      region: "<value>",
      continent: "Africa",
      device: "Mobile",
      browser: "Safari",
      os: "Blackberry",
      referer: "illustrious-straw.info",
      refererUrl: "https://utilized-railway.com",
      ip: "dcac:15d0:8c91:aa6d:e326:a35e:fdf0:3ffc",
    },
    link: {
      id: "<id>",
      domain: "outlying-masterpiece.info",
      key: "<key>",
      url: "https://those-icebreaker.info",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1742551323852",
      expiredUrl: "https://red-hunger.name",
      password: "vt2qQbuZah7Pt3V",
      title: "<value>",
      description: "why lest with properly striking",
      image: "https://loremflickr.com/3725/1160?lock=8106184843380372",
      video: "https://loremflickr.com/3338/1597?lock=6459491563108711",
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
      folderId: "<id>",
      webhookIds: [
        "<value>",
      ],
      comments:
        "scram fortunately daily though undergo unknown rue why by internalise",
      shortLink: "https://rigid-knitting.net",
      qrCode: "https://formal-cycle.com/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1715975432288",
      updatedAt: "1740949653669",
      projectId: "<id>",
    },
    sale: {
      amount: 8962.8,
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