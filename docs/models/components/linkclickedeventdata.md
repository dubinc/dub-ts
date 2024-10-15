# LinkClickedEventData

## Example Usage

```typescript
import { LinkClickedEventData } from "dub/models/components";

let value: LinkClickedEventData = {
  click: {
    id: "<id>",
    url: "https://infinite-agreement.biz/",
    continent: "South America",
    country: "Singapore",
    city: "Bahringertown",
    device: "Desktop",
    browser: "Firefox",
    os: "Symbian",
    referer: "idealistic-electronics.name",
    refererUrl: "https://short-term-stool.biz",
    ip: "139.178.244.95",
  },
  link: {
    id: "<id>",
    domain: "gruesome-lay.net",
    key: "<key>",
    url: "https://separate-gloom.org",
    externalId: "<id>",
    identifier: "<value>",
    expiresAt: "<value>",
    expiredUrl: "https://gigantic-saloon.info/",
    password: "2uL6h6Yp2x9PGyk",
    title: "<value>",
    description:
      "up adult beyond descriptive off eventually dearly closed woot",
    image: "https://loremflickr.com/419/632?lock=1733408597505331",
    video: "https://loremflickr.com/3409/99?lock=7214193643421420",
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
    comments: "correctly ha provided unless if upliftingly affect incidentally",
    shortLink: "https://clear-veto.org/",
    qrCode: "https://far-velocity.net/",
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