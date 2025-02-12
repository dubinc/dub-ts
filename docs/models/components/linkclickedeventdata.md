# LinkClickedEventData

## Example Usage

```typescript
import { LinkClickedEventData } from "dub/models/components";

let value: LinkClickedEventData = {
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://adolescent-descendant.info/",
    country: "Ireland",
    city: "Oceanside",
    region: "<value>",
    continent: "Australia",
    device: "Mobile",
    browser: "Firefox",
    os: "Android",
    referer: "rotten-kielbasa.org",
    refererUrl: "https://hidden-meatloaf.biz",
    ip: "fc82:f866:aff6:7b03:e029:a566:d4cf:a7ae",
  },
  link: {
    id: "<id>",
    domain: "hopeful-procurement.com",
    key: "<key>",
    url: "https://bustling-gastropod.name",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1747632246246",
    expiredUrl: "https://nifty-publication.info",
    password: "TnndTMrZz9k9Tnk",
    title: "<value>",
    description: "woot aboard unto ick hurtful forceful",
    image: "https://picsum.photos/seed/dj0KdB1/749/1203",
    video: "https://loremflickr.com/3338/750?lock=2712858603046134",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "brown",
      },
    ],
    folderId: "<id>",
    webhookIds: [
      "<value>",
    ],
    comments:
      "monumental disk why famously arbitrate lend sometimes roughly mmm",
    shortLink: "https://clean-meander.info",
    qrCode: "https://insidious-brush.com/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1710521657423",
    updatedAt: "1739250288221",
    projectId: "<id>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `click`                                                                              | [components.LinkClickedEventClick](../../models/components/linkclickedeventclick.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `link`                                                                               | [components.LinkClickedEventLink](../../models/components/linkclickedeventlink.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |