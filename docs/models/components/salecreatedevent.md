# SaleCreatedEvent

Triggered when a sale is created.

## Example Usage

```typescript
import { SaleCreatedEvent } from "dub/models/components";

let value: SaleCreatedEvent = {
  id: "<id>",
  event: "sale.created",
  createdAt: "1727750134727",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1732406370858",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://memorable-tabletop.name/",
      country: "Malawi",
      city: "East Colemanfurt",
      region: "<value>",
      continent: "Africa",
      device: "Desktop",
      browser: "Firefox",
      os: "Blackberry",
      referer: "round-seafood.net",
      refererUrl: "https://low-cross-contamination.name",
      ip: "2c2c:322e:d51b:3baf:8ffc:ccc6:eb8b:356b",
    },
    link: {
      id: "<id>",
      domain: "royal-eggplant.com",
      key: "<key>",
      url: "https://tidy-hello.info",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1749730420158",
      expiredUrl: "https://cloudy-commodity.org",
      password: "aUl3lAfdhWbhOBj",
      title: "<value>",
      description: "since raw depart whoever SUV carefully",
      image: "https://loremflickr.com/3864/1548?lock=4237485117121947",
      video: "https://picsum.videos/seed/Ck8Zf3/185/66",
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
      comments: "without airport yowza yowza more geez design horde though",
      shortLink: "https://mundane-swordfish.info/",
      qrCode: "https://kosher-stock.name/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1732642397150",
      updatedAt: "1740585587276",
      projectId: "<id>",
    },
    sale: {
      amount: 508.59,
      currency: "Lesotho Loti",
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