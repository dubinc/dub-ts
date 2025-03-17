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
    createdAt: "1720173661549",
  },
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://those-thorn.info/",
    country: "New Caledonia",
    city: "Port Shannaborough",
    region: "<value>",
    continent: "Europe",
    device: "Mobile",
    browser: "Chrome",
    os: "BeOS",
    referer: "old-fashioned-hawk.name",
    refererUrl: "https://sentimental-knight.info",
    ip: "52ef:c56d:6a7b:54a8:5c82:f6cd:f46e:f9a9",
  },
  link: {
    id: "<id>",
    domain: "incomplete-cleaner.name",
    key: "<key>",
    url: "https://pricey-guacamole.org/",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1766497081496",
    expiredUrl: "https://palatable-pronoun.name/",
    password: "PJX7f5mJn0lR90x",
    title: "<value>",
    description: "well-worn suffice drat shell once",
    image: "https://picsum.photos/seed/QsFOIN/2398/2539",
    video: "https://picsum.videos/seed/kY3Cuex4yQ/2544/3203",
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
      "collaborate hepatitis wide-eyed near nor coolly syringe request amid shady",
    shortLink: "https://helpless-appliance.info",
    qrCode: "https://superb-cop-out.net/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1711819996665",
    updatedAt: "1742161571685",
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