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
      email: "Alex.Ruecker-Hayes40@yahoo.com",
      avatar: "https://loremflickr.com/1483/3674?lock=6677932944666585",
    },
    click: {
      id: "<id>",
      url: "https://murky-kettledrum.name/",
      continent: "Europe",
      country: "Sweden",
      city: "South Anais",
      device: "Mobile",
      browser: "Safari",
      os: "iOS",
      referer: "winding-nectarine.biz",
      refererUrl: "https://profitable-piglet.name",
      ip: "53.61.187.127",
    },
    link: {
      id: "<id>",
      domain: "reckless-sediment.name",
      key: "<key>",
      url: "https://impossible-loyalty.com/",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://unwieldy-signature.net",
      password: "o1_HuXhCgftCNai",
      title: "<value>",
      description:
        "kettledrum density boohoo misreport excitedly regarding dislocate advertisement clueless",
      image: "https://picsum.photos/seed/6HrWU/119/863",
      video: "https://picsum.videos/seed/mNVFeOqH/1106/1511",
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
      comments:
        "safely ah duster positively blaring plus midst char chasuble noxious imaginary below whereas yak chilly instantly foolishly quantify phooey as",
      shortLink: "https://vengeful-bungalow.name",
      qrCode: "https://steel-opera.biz/",
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
      amount: 14.69,
      currency: "Tenge",
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