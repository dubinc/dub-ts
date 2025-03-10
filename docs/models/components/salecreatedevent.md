# SaleCreatedEvent

Triggered when a sale is created.

## Example Usage

```typescript
import { SaleCreatedEvent } from "dub/models/components";

let value: SaleCreatedEvent = {
  id: "<id>",
  event: "sale.created",
  createdAt: "1725593491735",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1721273942037",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://hurtful-onset.org",
      country: "Canada",
      city: "West Phyllisstead",
      region: "<value>",
      continent: "South America",
      device: "Mobile",
      browser: "Chrome",
      os: "WebOS",
      referer: "questionable-slide.net",
      refererUrl: "https://flawless-awareness.biz/",
      ip: "110.57.180.56",
    },
    link: {
      id: "<id>",
      domain: "bossy-spork.com",
      key: "<key>",
      url: "https://vengeful-bungalow.name",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1755811923704",
      expiredUrl: "https://posh-duster.com",
      password: "NuwrEMV588BmBNN",
      title: "<value>",
      description:
        "controvert mozzarella solemnly sinful meanwhile skyline up heating avaricious",
      image: "https://picsum.photos/seed/UtUpz/3906/2825",
      video: "https://loremflickr.com/3574/1843?lock=3828644371313865",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "green",
        },
      ],
      folderId: "<id>",
      webhookIds: [
        "<value>",
      ],
      comments:
        "space informal minus dark while beyond untimely whenever an representation lest aha analyse firm than given",
      shortLink: "https://circular-heartbeat.biz/",
      qrCode: "https://early-giant.name",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1720449834268",
      updatedAt: "1741537290093",
      projectId: "<id>",
    },
    sale: {
      amount: 6052.56,
      currency: "CFA Franc BEAC",
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