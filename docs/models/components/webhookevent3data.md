# WebhookEvent3Data

## Example Usage

```typescript
import { WebhookEvent3Data } from "dub/models/components";

let value: WebhookEvent3Data = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    name: "<value>",
    email: "Queen53@yahoo.com",
    avatar: "https://picsum.photos/seed/K4Wtk7/711/1860",
  },
  click: {
    id: "<id>",
    url: "https://quick-witted-bowler.biz/",
    continent: "North America",
    country: "Niger",
    city: "East Summer",
    device: "Desktop",
    browser: "Chrome",
    os: "Symbian",
    referer: "fuzzy-cassava.info",
    refererUrl: "https://variable-chainstay.com/",
    ip: "231.115.38.152",
  },
  link: {
    id: "<id>",
    domain: "mysterious-council.name",
    key: "<key>",
    url: "https://every-larva.biz/",
    externalId: "<id>",
    identifier: "<value>",
    expiresAt: "<value>",
    expiredUrl: "https://uncomfortable-clavicle.biz/",
    password: "E5jTBtDQrhbsbfr",
    title: "<value>",
    description: "drain brr throughout hope but hmph",
    image: "https://loremflickr.com/2806/3385?lock=6579363345982698",
    video: "https://picsum.videos/seed/hYl6orK/3674/1126",
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
    comments:
      "postbox hence down why mmm oh gestate correctly trick citizen opposite since gadzooks suitcase eek incidentally skeleton deselect",
    shortLink: "https://mealy-airman.net",
    qrCode: "https://both-interchange.biz",
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
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `eventName`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `customer`                                                                         | [components.WebhookEventCustomer](../../models/components/webhookeventcustomer.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `click`                                                                            | [components.WebhookEvent3Click](../../models/components/webhookevent3click.md)     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `link`                                                                             | [components.WebhookEvent3Link](../../models/components/webhookevent3link.md)       | :heavy_check_mark:                                                                 | N/A                                                                                |