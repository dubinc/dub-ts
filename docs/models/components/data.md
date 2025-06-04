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
    geo: {},
    publicStats: false,
    tagId: "<id>",
    tags: [],
    folderId: "<id>",
    webhookIds: [],
    comments:
      "aside rout excluding hm merry colossal instead gut for apropos opera machine whether glittering gracious provided",
    shortLink: "https://burly-priesthood.biz/",
    qrCode: "https://unrealistic-density.name",
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
    createdAt: "1728921888377",
    updatedAt: "1735607800454",
    projectId: "<id>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `click`                                                                              | [components.LinkClickedEventClick](../../models/components/linkclickedeventclick.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `link`                                                                               | [components.LinkClickedEventLink](../../models/components/linkclickedeventlink.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |