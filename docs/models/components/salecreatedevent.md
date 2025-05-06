# SaleCreatedEvent

Triggered when a sale is created.

## Example Usage

```typescript
import { SaleCreatedEvent } from "dub/models/components";

let value: SaleCreatedEvent = {
  id: "<id>",
  event: "sale.created",
  createdAt: "1745051165831",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      createdAt: "1722983127062",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://new-goodwill.info",
      country: "Mauritania",
      city: "Fort Jeff",
      region: "<value>",
      continent: "Antarctica",
      device: "Desktop",
      browser: "Chrome",
      os: "WebOS",
      referer: "tinted-duffel.info",
      refererUrl: "https://unwelcome-dulcimer.info",
      qr: false,
      ip: "966d:9bba:ffad:5dbd:ac48:3b0a:43b0:d6c5",
    },
    link: {
      id: "<id>",
      domain: "wilted-cop-out.org",
      key: "<key>",
      url: "https://cruel-decision.info/",
      trackConversion: false,
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      archived: false,
      expiresAt: "1747036988491",
      expiredUrl: "https://hairy-lifestyle.biz",
      password: "8T1B2qYVgp7KA86",
      proxy: false,
      title: "<value>",
      description: "retrospectivity pfft ah vice membership alert true",
      image: "https://loremflickr.com/88/2615?lock=6339117890650210",
      video: "https://loremflickr.com/1625/991?lock=3954887895560003",
      rewrite: false,
      doIndex: false,
      ios: "<value>",
      android: "<id>",
      geo: {},
      publicStats: false,
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "purple",
        },
      ],
      folderId: "<id>",
      webhookIds: [
        "<value>",
      ],
      comments:
        "adolescent even quaver what yahoo out proselytise psst revitalise censor jubilantly",
      shortLink: "https://elliptical-median.name/",
      qrCode: "https://frilly-fencing.com",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      testStartedAt: "<value>",
      testCompletedAt: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1721776708976",
      updatedAt: "1746477856665",
      projectId: "<id>",
    },
    sale: {
      amount: 7556.55,
      currency: "Zambian Kwacha",
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