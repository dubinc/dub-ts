# LeadCreatedEventData

## Example Usage

```typescript
import { LeadCreatedEventData } from "dub/models/components";

let value: LeadCreatedEventData = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    name: "<value>",
    email: "Jacynthe27@hotmail.com",
    avatar: "https://loremflickr.com/2007/2012?lock=8563196742915333",
  },
  click: {
    id: "<id>",
    url: "https://minty-case.biz",
    continent: "Australia",
    country: "Guam",
    city: "Ardentown",
    device: "Mobile",
    browser: "Chrome",
    os: "Windows",
    referer: "huge-bar.info",
    refererUrl: "https://deserted-habit.com/",
    ip: "111.212.238.78",
  },
  link: {
    id: "<id>",
    domain: "frail-mentor.com",
    key: "<key>",
    url: "https://awesome-glider.com/",
    externalId: "<id>",
    identifier: "<value>",
    expiresAt: "<value>",
    expiredUrl: "https://profuse-willow.biz",
    password: "4sp4ts8Qya_VKfZ",
    title: "<value>",
    description: "phooey pish ew why lest",
    image: "https://picsum.photos/seed/2BHFgq25yA/3611/3191",
    video: "https://loremflickr.com/805/1793?lock=102112614166040",
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
    comments:
      "supposing fooey snow pace illustrious whoa outset aggravating mature outdo or lest crumble handle",
    shortLink: "https://mixed-diversity.name/",
    qrCode: "https://thrifty-safe.com/",
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

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `eventName`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `customer`                                                                                 | [components.LeadCreatedEventCustomer](../../models/components/leadcreatedeventcustomer.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `click`                                                                                    | [components.LeadCreatedEventClick](../../models/components/leadcreatedeventclick.md)       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `link`                                                                                     | [components.LeadCreatedEventLink](../../models/components/leadcreatedeventlink.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |