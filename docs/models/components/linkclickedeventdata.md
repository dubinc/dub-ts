# LinkClickedEventData

## Example Usage

```typescript
import { LinkClickedEventData } from "dub/models/components";

let value: LinkClickedEventData = {
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://gentle-duster.biz/",
    country: "Ghana",
    city: "Fisherborough",
    region: "<value>",
    continent: "North America",
    device: "Mobile",
    browser: "Firefox",
    os: "MacOS",
    referer: "nautical-order.biz",
    refererUrl: "https://speedy-minister.com",
    ip: "d5fa:6d62:ced3:8d31:45be:00cd:2d57:82ff",
  },
  link: {
    id: "<id>",
    domain: "junior-dish.org",
    key: "<key>",
    url: "https://serene-independence.info",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1765637815199",
    expiredUrl: "https://quiet-mentor.net",
    password: "D074PRao3f_6cW5",
    title: "<value>",
    description: "sprinkles sanity idle quicker waist instruction",
    image: "https://loremflickr.com/3680/117?lock=3386863059325017",
    video: "https://picsum.videos/seed/CVPf5W/341/352",
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
    folderId: "<id>",
    webhookIds: [
      "<value>",
    ],
    comments: "above profuse for pfft eek accompanist sin pish yum thin",
    shortLink: "https://only-emergent.biz",
    qrCode: "https://reckless-release.biz",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1726424019542",
    updatedAt: "1741011535796",
    projectId: "<id>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `click`                                                                              | [components.LinkClickedEventClick](../../models/components/linkclickedeventclick.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `link`                                                                               | [components.LinkClickedEventLink](../../models/components/linkclickedeventlink.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |