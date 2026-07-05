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
      expiresAt: "1756923719786",
      expiredUrl: "https://petty-coordination.com",
      disabledAt: "<value>",
      password: "Sj7cH2NhvdXcJx8",
      proxy: false,
      title: "<value>",
      description: "train exhaust lightly notwithstanding functional whether",
      image: "https://loremflickr.com/1807/250?lock=739641941719050",
      video: "https://picsum.videos/seed/kQQ8WyEpG/3044/1298",
      rewrite: true,
      doIndex: true,
      ios: "<value>",
      android: "<id>",
      geo: {
        "key": "https://little-skyscraper.info/",
      },
      publicStats: true,
      tags: [],
      folderId: "<id>",
      comments:
        "netsuke gah whenever aha inasmuch phooey develop eek irritably hmph meanwhile neaten luck",
      shortLink: "https://nice-nudge.info/",
      qrCode: "https://watery-technologist.biz",
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
      createdAt: "1733128764251",
      updatedAt: "1735681593842",
      tagId: "<id>",
      projectId: "<id>",
      webhookIds: [],
    },
    sale: {
      amount: 6668.31,
      currency: "Won",
      paymentProcessor: "<value>",
      invoiceId: "<id>",
    },
    metadata: {},
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