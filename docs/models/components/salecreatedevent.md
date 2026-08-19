# SaleCreatedEvent

Triggered when a sale is created.

## Example Usage

```typescript
import { SaleCreatedEvent } from "dub/models/components";

let value: SaleCreatedEvent = {
  id: "<id>",
  event: "sale.created",
  createdAt: "1704417485275",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      externalId: "<id>",
      createdAt: "1732125211331",
    },
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://windy-simple.info",
      country: "Turkey",
      city: "Youngstown",
      region: "<value>",
      continent: "Africa",
      device: "Desktop",
      browser: "Firefox",
      os: "Android",
      referer: "black-and-white-fireplace.com",
      refererUrl: "https://realistic-birth.name",
      qr: true,
      ip: "186.246.170.22",
    },
    link: {
      id: "<id>",
      domain: "shy-pine.com",
      key: "<key>",
      url: "https://happy-equal.com",
      trackConversion: true,
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      archived: false,
      expiresAt: "1751272046232",
      expiredUrl: "https://determined-attraction.name",
      disabledAt: "<value>",
      password: "7cH2NhvdXcJx8oD",
      proxy: true,
      title: "<value>",
      description: "wearily lest however modulo duh inure victoriously since",
      image: "https://loremflickr.com/1652/2737?lock=2556335483984583",
      video: "https://loremflickr.com/1614/1497?lock=3783715632725390",
      rewrite: true,
      doIndex: false,
      ios: "<value>",
      android: null,
      geo: {
        "key": "https://last-lyre.biz/",
      },
      publicStats: true,
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "gray",
        },
      ],
      folderId: "<id>",
      comments:
        "gah whenever aha inasmuch phooey develop eek irritably hmph meanwhile neaten luck swill sandy",
      shortLink: "https://untried-solvency.biz",
      qrCode: "https://light-interior.net",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      testStartedAt: "<value>",
      testCompletedAt: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: null,
      createdAt: "1710144087859",
      updatedAt: "1735605370430",
      tagId: "<id>",
      projectId: "<id>",
      webhookIds: [],
    },
    sale: {
      amount: 5853.24,
      currency: "Cordoba Oro",
      paymentProcessor: "<value>",
      invoiceId: "<id>",
    },
    metadata: {
      "key": "<value>",
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