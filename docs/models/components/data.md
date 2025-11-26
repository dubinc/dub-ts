# Data

## Example Usage

```typescript
import { Data } from "dub/models/components";

let value: Data = {
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://assured-agreement.biz",
    country: "Tuvalu",
    city: "Felixshire",
    region: "<value>",
    continent: "South America",
    device: "Mobile",
    browser: "Safari",
    os: "MacOS",
    referer: "small-newsstand.name",
    refererUrl: "https://unwritten-essence.info",
    qr: true,
    ip: "177.199.56.68",
  },
  link: {
    id: "<id>",
    domain: "menacing-tomography.biz",
    key: "<key>",
    url: "https://jealous-newsletter.info",
    trackConversion: false,
    externalId: "<id>",
    tenantId: "<id>",
    programId: null,
    partnerId: null,
    archived: false,
    expiresAt: "1755870867572",
    expiredUrl: "https://long-term-complication.biz/",
    disabledAt: "<value>",
    password: "Q7NfAdxcJ8x1yhk",
    proxy: true,
    title: "<value>",
    description: null,
    image: null,
    video: "https://picsum.videos/seed/ixYla4N/99/1866",
    rewrite: false,
    doIndex: false,
    ios: "<value>",
    android: "<id>",
    geo: {
      "key": "https://chilly-chainstay.info",
      "key1": "https://wretched-provision.info/",
      "key2": "https://perfumed-adrenalin.com/",
    },
    publicStats: true,
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "blue",
      },
    ],
    folderId: null,
    webhookIds: [],
    comments:
      "yum impartial phew rewarding always taro hastily whereas though shrilly lovingly pish ham for plain whether aboard",
    shortLink: "https://windy-cantaloupe.biz/",
    qrCode: "https://husky-cinder.com/",
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
    createdAt: "1728121349636",
    updatedAt: "1735614256942",
    tagId: "<id>",
    projectId: "<id>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `click`                                                                              | [components.LinkClickedEventClick](../../models/components/linkclickedeventclick.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `link`                                                                               | [components.LinkClickedEventLink](../../models/components/linkclickedeventlink.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |