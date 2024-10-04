# LinkClickedEventData

## Example Usage

```typescript
import { LinkClickedEventData } from "dub/models/components";

let value: LinkClickedEventData = {
  click: {
    id: "<id>",
    url: "https://athletic-alb.org",
    continent: "South America",
    country: "Burundi",
    city: "Jermainhaven",
    device: "Mobile",
    browser: "Safari",
    os: "Chrome OS",
    referer: "purple-receptor.net",
    refererUrl: "https://buzzing-freezing.com/",
    ip: "99.235.145.180",
  },
  link: {
    id: "<id>",
    domain: "unhappy-hutch.com",
    key: "<key>",
    url: "https://subdued-tennis.info/",
    externalId: "<id>",
    identifier: "<value>",
    expiresAt: "<value>",
    expiredUrl: "https://vain-footrest.name/",
    password: "Px4aiVa0K3N07GI",
    title: "<value>",
    description: "meh um fabricate actual ew mmm zowie reorient red carelessly",
    image: "https://picsum.photos/seed/xOMuYu/2506/364",
    video: "https://picsum.videos/seed/p1iRNK1/1115/1210",
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
      "short-term galoshes unimpressively cook solemnly etch scorpion hence woot",
    shortLink: "https://witty-ceramics.org/",
    qrCode: "https://warmhearted-saloon.biz",
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

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `click`                                                                              | [components.LinkClickedEventClick](../../models/components/linkclickedeventclick.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `link`                                                                               | [components.LinkClickedEventLink](../../models/components/linkclickedeventlink.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |