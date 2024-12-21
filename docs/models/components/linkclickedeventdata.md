# LinkClickedEventData

## Example Usage

```typescript
import { LinkClickedEventData } from "dub/models/components";

let value: LinkClickedEventData = {
  click: {
    id: "<id>",
    url: "https://swift-marksman.net/",
    country: "San Marino",
    city: "West Javonteshire",
    region: "<value>",
    continent: "South America",
    device: "Desktop",
    browser: "Chrome",
    os: "iOS",
    referer: "musty-term.biz",
    refererUrl: "https://powerless-labourer.biz/",
    ip: "125.199.199.249",
  },
  link: {
    id: "<id>",
    domain: "icy-grandpa.com",
    key: "<key>",
    url: "https://puny-runway.info",
    externalId: "<id>",
    expiresAt: "<value>",
    expiredUrl: "https://ample-captain.info",
    password: "V5yo8DLdImWmbZS",
    title: "<value>",
    description:
      "helpfully chasuble defiantly rightfully behind tuxedo enchanting free humidity",
    image: "https://loremflickr.com/833/2212?lock=4819343008042912",
    video: "https://loremflickr.com/801/3599?lock=5497405378201913",
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
      "ack innovation and shark instead energetically alongside judgementally furthermore meh woot round whereas whenever essence",
    shortLink: "https://jealous-steeple.name/",
    qrCode: "https://determined-diver.com",
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