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
    url: "https://medium-travel.net/",
    continent: "Europe",
    country: "Martinique",
    city: "Fort Isai",
    device: "Desktop",
    browser: "Safari",
    os: "Windows Phone",
    referer: "grounded-event.biz",
    refererUrl: "https://potable-labourer.biz/",
    ip: "4.189.48.68",
  },
  link: {
    id: "<id>",
    domain: "aged-cinder.org",
    key: "<key>",
    url: "https://well-lit-coliseum.biz/",
    externalId: "<id>",
    identifier: "<value>",
    expiresAt: "<value>",
    expiredUrl: "https://intelligent-doubter.net",
    password: "uplOVaNGvlypZcI",
    title: "<value>",
    description: "address excluding likewise",
    image: "https://picsum.photos/seed/0B7BPeuLa/416/863",
    video: "https://picsum.videos/seed/QxuyIo58Y/611/3620",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "red",
      },
    ],
    webhookIds: [
      "<value>",
    ],
    comments:
      "who reassuringly throughout rightfully once department gee reboot aha catch receptor ack king different but boo",
    shortLink: "https://wicked-fold.name",
    qrCode: "https://stiff-cinema.org",
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