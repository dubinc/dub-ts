# LinkClickedEventData

## Example Usage

```typescript
import { LinkClickedEventData } from "dub/models/components";

let value: LinkClickedEventData = {
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://alienated-airport.biz",
    country: "Democratic People's Republic of Korea",
    city: "Haverhill",
    region: "<value>",
    continent: "Asia",
    device: "Mobile",
    browser: "Safari",
    os: "WebOS",
    referer: "timely-consistency.com",
    refererUrl: "https://ruddy-valley.info",
    ip: "132.175.144.185",
  },
  link: {
    id: "<id>",
    domain: "hurtful-stump.biz",
    key: "<key>",
    url: "https://sore-fisherman.net/",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1748295863657",
    expiredUrl: "https://frivolous-synergy.info/",
    password: "6h6Yp2x9PGykiRo",
    title: "<value>",
    description: "devastation unbearably creator nor athletic wolf",
    image: "https://loremflickr.com/2356/3693?lock=1391969154376727",
    video: "https://picsum.videos/seed/Iz7IH7y/2737/1666",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "green",
      },
    ],
    webhookIds: [
      "<value>",
    ],
    comments:
      "anaesthetise option expostulate sanity till wholly though crumble that why leading burdensome",
    shortLink: "https://dead-detective.biz/",
    qrCode: "https://agitated-veto.name",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1709341772772",
    updatedAt: "1739192406323",
    projectId: "<id>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `click`                                                                              | [components.LinkClickedEventClick](../../models/components/linkclickedeventclick.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `link`                                                                               | [components.LinkClickedEventLink](../../models/components/linkclickedeventlink.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |