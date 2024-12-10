# LinkClickedEventData

## Example Usage

```typescript
import { LinkClickedEventData } from "dub/models/components";

let value: LinkClickedEventData = {
  click: {
    id: "<id>",
    url: "https://grizzled-possession.biz/",
    country: "Gambia",
    city: "Veumfurt",
    region: "<value>",
    continent: "Africa",
    device: "Mobile",
    browser: "Firefox",
    os: "Android",
    referer: "surprised-scarification.name",
    refererUrl: "https://ruddy-teammate.biz/",
    ip: "a6d6:2ced:38d3:145b:e00c:d2d5:782f:f95f",
  },
  link: {
    id: "<id>",
    domain: "suburban-quart.info",
    key: "<key>",
    url: "https://sparkling-legging.name/",
    externalId: "<id>",
    expiresAt: "<value>",
    expiredUrl: "https://scientific-bowler.info",
    password: "074PRao3f_6cW5K",
    title: "<value>",
    description:
      "oof scruple carelessly memorise considering verbally furthermore yet minority",
    image: "https://picsum.photos/seed/DFBDCxKmt/172/1340",
    video: "https://loremflickr.com/1606/837?lock=495531766047415",
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
      "what knottily apostrophize correctly immense spirit customise for notwithstanding degrease nor",
    shortLink: "https://light-baseboard.biz",
    qrCode: "https://gray-coast.net",
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