# SaleCreatedEvent

Triggered when a sale is created.

## Example Usage

```typescript
import { SaleCreatedEvent } from "dub/models/components";

let value: SaleCreatedEvent = {
  id: "<id>",
  event: "sale.created",
  createdAt: "1729023338013",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1715065836395",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://innocent-precedent.info",
      country: "United Kingdom",
      city: "East Clemmieburgh",
      region: "<value>",
      continent: "Antarctica",
      device: "Desktop",
      browser: "Safari",
      os: "Linux",
      referer: "esteemed-couch.info",
      refererUrl: "https://helpless-epic.com",
      ip: "59.195.28.36",
    },
    link: {
      id: "<id>",
      domain: "flickering-electronics.org",
      key: "<key>",
      url: "https://ordinary-electronics.biz",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1757996257336",
      expiredUrl: "https://idealistic-language.org",
      password: "S14CeblcO4WVT0w",
      title: "<value>",
      description: "reschedule ordinary doing split zen incidentally so",
      image: "https://loremflickr.com/2763/3014?lock=3211377508234986",
      video: "https://picsum.videos/seed/90fNzWxgLE/3081/1521",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "pink",
        },
      ],
      folderId: "<id>",
      webhookIds: [
        "<value>",
      ],
      comments:
        "depart whoever SUV carefully ugh bar hm dress indeed into fooey actual finally provided jaywalk",
      shortLink: "https://rare-advancement.name/",
      qrCode: "https://inferior-harp.info",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1734750558896",
      updatedAt: "1739286364907",
      projectId: "<id>",
    },
    sale: {
      amount: 7473.51,
      currency: "Russian Ruble",
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