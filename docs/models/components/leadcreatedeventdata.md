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
    createdAt: "1709819269151",
  },
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://excellent-cook.info/",
    country: "Botswana",
    city: "South Richmond",
    region: "<value>",
    continent: "South America",
    device: "Desktop",
    browser: "Chrome",
    os: "Windows Phone",
    referer: "considerate-following.com",
    refererUrl: "https://classic-meander.name/",
    ip: "44ed:dc4d:d5be:eec5:f96a:d764:1db5:10a4",
  },
  link: {
    id: "<id>",
    domain: "fearless-advancement.com",
    key: "<key>",
    url: "https://excitable-validity.com",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1747393858585",
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
    folderId: "<id>",
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
    createdAt: "1730627681002",
    updatedAt: "1739323621553",
    projectId: "<id>",
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