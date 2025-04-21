# LinkClickedEventData

## Example Usage

```typescript
import { LinkClickedEventData } from "dub/models/components";

let value: LinkClickedEventData = {
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://live-shark.name",
    country: "Hungary",
    city: "North Lorineborough",
    region: "<value>",
    continent: "Australia",
    device: "Desktop",
    browser: "Firefox",
    os: "Chrome OS",
    referer: "tense-contrail.name",
    refererUrl: "https://deserted-sock.info/",
    ip: "c6a5:8963:29a8:923b:4fad:ebcb:f8aa:51ee",
  },
  link: {
    id: "<id>",
    domain: "hateful-sailor.com",
    key: "<key>",
    url: "https://flashy-vestment.info",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1751389585018",
    expiredUrl: "https://greedy-density.biz",
    password: "AxSszep6Qv9fOTe",
    title: "<value>",
    description: "ski tough athwart yuck madly discontinue well-lit drat",
    image: "https://picsum.photos/seed/fZKy1R9tcy/1611/1306",
    video: "https://picsum.videos/seed/dPLcIj2NQ/1313/3177",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "purple",
      },
    ],
    folderId: "<id>",
    webhookIds: [
      "<value>",
    ],
    comments:
      "enthusiastically foolishly futon kissingly pace completion napkin excepting whenever generously covenant notwithstanding soybean husband unfortunately friendly",
    shortLink: "https://obedient-availability.org",
    qrCode: "https://well-off-requirement.name/",
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
    createdAt: "1724716598098",
    updatedAt: "1745198884291",
    projectId: "<id>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `click`                                                                              | [components.LinkClickedEventClick](../../models/components/linkclickedeventclick.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `link`                                                                               | [components.LinkClickedEventLink](../../models/components/linkclickedeventlink.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |