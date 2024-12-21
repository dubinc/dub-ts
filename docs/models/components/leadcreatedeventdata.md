# LeadCreatedEventData

## Example Usage

```typescript
import { LeadCreatedEventData } from "dub/models/components";

let value: LeadCreatedEventData = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    externalId: "<id>",
    name: "<value>",
    createdAt: "<value>",
  },
  click: {
    id: "<id>",
    url: "https://windy-rationale.name",
    country: "Guatemala",
    city: "South Harleyfield",
    region: "<value>",
    continent: "Antarctica",
    device: "Mobile",
    browser: "Chrome",
    os: "BeOS",
    referer: "raw-hexagon.biz",
    refererUrl: "https://outlying-handle.net/",
    ip: "6e90:d80a:2dbb:edfc:5027:4cb8:bafb:09a9",
  },
  link: {
    id: "<id>",
    domain: "accomplished-pecan.biz",
    key: "<key>",
    url: "https://mealy-toothbrush.com/",
    externalId: "<id>",
    expiresAt: "<value>",
    expiredUrl: "https://outstanding-majority.com/",
    password: "pL0iKgOtrxQf5x_",
    title: "<value>",
    description: "where oof planula forenenst eminent",
    image: "https://picsum.photos/seed/dzkEwCCJN/2151/3576",
    video: "https://loremflickr.com/248/3793?lock=1532097681395324",
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
    webhookIds: [
      "<value>",
    ],
    comments:
      "intrepid finally huzzah captain equally apud upward inside during arrange faithfully individual gadzooks lonely hm vice slowly",
    shortLink: "https://alienated-lift.org/",
    qrCode: "https://unrealistic-linseed.info",
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
    programId: "<id>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `eventName`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `customer`                                                                                 | [components.LeadCreatedEventCustomer](../../models/components/leadcreatedeventcustomer.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `click`                                                                                    | [components.LeadCreatedEventClick](../../models/components/leadcreatedeventclick.md)       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `link`                                                                                     | [components.LeadCreatedEventLink](../../models/components/leadcreatedeventlink.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |