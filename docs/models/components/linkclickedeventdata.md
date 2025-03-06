# LinkClickedEventData

## Example Usage

```typescript
import { LinkClickedEventData } from "dub/models/components";

let value: LinkClickedEventData = {
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://right-mentor.net",
    country: "Guinea-Bissau",
    city: "Citrus Heights",
    region: "<value>",
    continent: "Asia",
    device: "Mobile",
    browser: "Firefox",
    os: "Blackberry",
    referer: "forceful-cook.biz",
    refererUrl: "https://lazy-decongestant.biz",
    ip: "193.57.153.6",
  },
  link: {
    id: "<id>",
    domain: "tame-cook.com",
    key: "<key>",
    url: "https://useless-diversity.name/",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1754080672430",
    expiredUrl: "https://vast-scorpion.net/",
    password: "RoLMO7x938njIqk",
    title: "<value>",
    description:
      "wherever hm thorn vague promise fisherman unethically onto indeed yum",
    image: "https://picsum.photos/seed/xCjPM/3105/3652",
    video: "https://picsum.videos/seed/fXLiCj6PFC/2301/580",
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
    folderId: "<id>",
    webhookIds: [
      "<value>",
    ],
    comments:
      "though pfft foolishly miserable hence till respray fooey fuss ugh swing",
    shortLink: "https://burly-habit.name/",
    qrCode: "https://free-expansion.name",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1725633991856",
    updatedAt: "1741168794362",
    projectId: "<id>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `click`                                                                              | [components.LinkClickedEventClick](../../models/components/linkclickedeventclick.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `link`                                                                               | [components.LinkClickedEventLink](../../models/components/linkclickedeventlink.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |