# LinkClickedEventData

## Example Usage

```typescript
import { LinkClickedEventData } from "dub/models/components";

let value: LinkClickedEventData = {
  click: {
    id: "<id>",
    url: "https://phony-tuxedo.biz",
    continent: "Africa",
    country: "Netherlands",
    city: "Port Deshawnstad",
    device: "Mobile",
    browser: "Safari",
    os: "Chrome OS",
    referer: "witty-king.biz",
    refererUrl: "https://silent-humor.info/",
    ip: "78.220.205.191",
  },
  link: {
    id: "<id>",
    domain: "alienated-airport.biz",
    key: "<key>",
    url: "https://unused-going.biz/",
    externalId: "<id>",
    identifier: "<value>",
    expiresAt: "<value>",
    expiredUrl: "https://unwritten-recovery.org",
    password: "2TcDARbVeEr2j2u",
    title: "<value>",
    description: "although psst superficial enthusiastically but jealously",
    image: "https://picsum.photos/seed/b2zscmxD/813/2878",
    video: "https://loremflickr.com/1907/3885?lock=5928609823680503",
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
      "affectionate obvious nor anaesthetise option expostulate sanity till",
    shortLink: "https://optimistic-cheese.net",
    qrCode: "https://extroverted-velocity.net",
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

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `click`                                                                              | [components.LinkClickedEventClick](../../models/components/linkclickedeventclick.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `link`                                                                               | [components.LinkClickedEventLink](../../models/components/linkclickedeventlink.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |