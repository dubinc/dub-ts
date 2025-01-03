# LinkClickedEventData

## Example Usage

```typescript
import { LinkClickedEventData } from "dub/models/components";

let value: LinkClickedEventData = {
  click: {
    id: "<id>",
    url: "https://short-term-stool.biz",
    country: "Brazil",
    city: "Maxshire",
    region: "<value>",
    continent: "Asia",
    device: "Desktop",
    browser: "Firefox",
    os: "Blackberry",
    referer: "obvious-puritan.info",
    refererUrl: "https://dense-eyebrow.net",
    ip: "171.73.47.76",
  },
  link: {
    id: "<id>",
    domain: "unfortunate-incandescence.biz",
    key: "<key>",
    url: "https://acceptable-restaurant.biz/",
    externalId: "<id>",
    expiresAt: "1754780934245",
    expiredUrl: "https://tame-cook.com/",
    password: "x9PGykiRoLMO7x9",
    title: "<value>",
    description: "but jealously overfeed warp",
    image: "https://picsum.photos/seed/dLuZAV/185/2633",
    video: "https://picsum.videos/seed/PqIz7IH/49/619",
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
    webhookIds: [
      "<value>",
    ],
    comments:
      "energetically sharply swiftly exalted gee unlike before coin after kindheartedly whereas obvious matter",
    shortLink: "https://whole-legend.com/",
    qrCode: "https://filthy-bump.net",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1710630109897",
    updatedAt: "1735847546594",
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