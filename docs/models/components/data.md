# Data

## Example Usage

```typescript
import { Data } from "dub/models/components";

let value: Data = {
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://quixotic-remark.com",
    country: "Mongolia",
    city: "Lake Anabelleport",
    region: "<value>",
    continent: "Europe",
    device: "Mobile",
    browser: "Safari",
    os: "Chrome OS",
    referer: "vague-requirement.name",
    refererUrl: "https://warm-premeditation.net/",
    qr: false,
    ip: "253.250.168.22",
  },
  link: {
    id: "<id>",
    domain: "reasonable-optimal.name",
    key: "<key>",
    url: "https://royal-unblinking.biz/",
    trackConversion: false,
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    archived: false,
    expiresAt: "1763700418647",
    expiredUrl: "https://roasted-sarong.net/",
    password: "mfjOcY3R8z5E_hw",
    proxy: false,
    title: "<value>",
    description: "evenly meh rightfully joyfully whereas",
    image: "https://picsum.photos/seed/I5q9BBP6/2242/1866",
    video: "https://picsum.videos/seed/TvJEjA/1787/2682",
    rewrite: false,
    doIndex: false,
    ios: "<value>",
    android: "<id>",
    geo: {},
    publicStats: false,
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "green",
      },
    ],
    folderId: "<id>",
    webhookIds: [
      "<value>",
    ],
    comments:
      "so noisily inasmuch geez definitive rewrite gah spear speedily when so offset amongst past put pfft",
    shortLink: "https://crushing-valley.net",
    qrCode: "https://natural-cash.info",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    testStartedAt: "<value>",
    testCompletedAt: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1733029876223",
    updatedAt: "1746471540991",
    projectId: "<id>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `click`                                                                              | [components.LinkClickedEventClick](../../models/components/linkclickedeventclick.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `link`                                                                               | [components.LinkClickedEventLink](../../models/components/linkclickedeventlink.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |