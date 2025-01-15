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
    createdAt: "1708983950489",
  },
  click: {
    id: "<id>",
    url: "https://grave-leading.net/",
    country: "Lebanon",
    city: "Hampton",
    region: "<value>",
    continent: "Africa",
    device: "Desktop",
    browser: "Chrome",
    os: "Android",
    referer: "worthy-story.biz",
    refererUrl: "https://intrepid-role.com/",
    ip: "29.160.106.217",
  },
  link: {
    id: "<id>",
    domain: "fond-jump.net",
    key: "<key>",
    url: "https://giving-circumference.name",
    externalId: "<id>",
    tenantId: "<id>",
    expiresAt: "1741383845056",
    expiredUrl: "https://natural-completion.net",
    password: "jLPPfR1JCVQDE72",
    title: "<value>",
    description: "gladly since gee whoever beside prance",
    image: "https://loremflickr.com/2023/940?lock=170245687979181",
    video: "https://loremflickr.com/2954/753?lock=127111341303348",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "yellow",
      },
    ],
    webhookIds: [
      "<value>",
    ],
    comments:
      "ew why lest unless overplay wriggler furthermore knickers deed rewrite carefully seriously defensive stock lucky diversity deprave amid",
    shortLink: "https://flimsy-membership.name",
    qrCode: "https://difficult-edge.org",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1728016881145",
    updatedAt: "1736853218519",
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