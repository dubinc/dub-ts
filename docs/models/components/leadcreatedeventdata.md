# LeadCreatedEventData

## Example Usage

```typescript
import { LeadCreatedEventData } from "dub/models/components";

let value: LeadCreatedEventData = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    name: "<value>",
    email: "Johan_Parisian55@gmail.com",
    avatar: "https://loremflickr.com/3913/1790?lock=6562471625264366",
  },
  click: {
    id: "<id>",
    url: "https://grounded-event.biz",
    continent: "Africa",
    country: "Nepal",
    city: "Darrinton",
    device: "Desktop",
    browser: "Safari",
    os: "Linux",
    referer: "fearless-advancement.com",
    refererUrl: "https://excitable-validity.com",
    ip: "222.109.68.177",
  },
  link: {
    id: "<id>",
    domain: "average-tail.org",
    key: "<key>",
    url: "https://steel-verve.info/",
    externalId: "<id>",
    identifier: "<value>",
    expiresAt: "<value>",
    expiredUrl: "https://repentant-doorpost.name",
    password: "NGvlypZcIVX4KMo",
    title: "<value>",
    description: "likewise captain huzzah since seldom who",
    image: "https://loremflickr.com/1388/2530?lock=7113520607203209",
    video: "https://picsum.videos/seed/0RzpwPIvuT/3525/1275",
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
    comments: "before goodwill orient internationalize overcoat lawmaker",
    shortLink: "https://mealy-hospitalization.biz/",
    qrCode: "https://glum-depot.net",
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