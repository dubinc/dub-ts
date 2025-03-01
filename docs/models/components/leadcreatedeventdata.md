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
    createdAt: "1722396654271",
  },
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://proper-hose.com/",
    country: "Cote d'Ivoire",
    city: "Patiencetown",
    region: "<value>",
    continent: "Europe",
    device: "Desktop",
    browser: "Firefox",
    os: "BeOS",
    referer: "enchanting-kielbasa.net",
    refererUrl: "https://crooked-testimonial.net/",
    ip: "cbac:f822:f1fe:2f65:ce7d:3bd7:ed0c:c9bc",
  },
  link: {
    id: "<id>",
    domain: "sentimental-knight.info",
    key: "<key>",
    url: "https://entire-bowling.net",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1762933974364",
    expiredUrl: "https://fatal-encouragement.name",
    password: "PQ63fE7rGdV3yeK",
    title: "<value>",
    description: "aha catch receptor ack king different but boo",
    image: "https://loremflickr.com/3276/3861?lock=4995785281722844",
    video: "https://loremflickr.com/2332/3206?lock=7577342978579252",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "pink",
      },
    ],
    folderId: "<id>",
    webhookIds: [
      "<value>",
    ],
    comments: "beneath prime gee clonk gloss",
    shortLink: "https://disloyal-bin.info/",
    qrCode: "https://broken-perfection.info",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1736732896548",
    updatedAt: "1740734015449",
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