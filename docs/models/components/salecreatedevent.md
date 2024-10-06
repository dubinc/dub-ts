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
      name: "<value>",
      email: "Thurman42@hotmail.com",
      avatar: "https://loremflickr.com/1945/3763?lock=1403291959830372",
    },
    click: {
      id: "<id>",
      url: "https://elegant-depot.com/",
      continent: "Europe",
      country: "Croatia",
      city: "East Grayson",
      device: "Mobile",
      browser: "Firefox",
      os: "Android",
      referer: "black-forage.biz",
      refererUrl: "https://chilly-charm.biz",
      ip: "216.202.148.73",
    },
    link: {
      id: "<id>",
      domain: "glass-mozzarella.net",
      key: "<key>",
      url: "https://memorable-tabletop.name/",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://blaring-compromise.biz",
      password: "CeblcO4WVT0wY8S",
      title: "<value>",
      description: "noxious imaginary below whereas",
      image: "https://picsum.photos/seed/xNZbNlJHZ/483/685",
      video: "https://picsum.videos/seed/GKumLnCT/448/9",
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
      comments: "sans beside spork where christen",
      shortLink: "https://annual-boulevard.org",
      qrCode: "https://blank-instruction.com/",
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
      amount: 163.70,
      currency: "Pataca",
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