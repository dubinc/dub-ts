# LinkClickedEvent

Triggered when a link is clicked.

## Example Usage

```typescript
import { LinkClickedEvent } from "dub/models/components";

let value: LinkClickedEvent = {
  id: "<id>",
  event: "link.clicked",
  createdAt: "1705777080378",
  data: {
    click: {
      id: "<id>",
      url: "https://queasy-acquaintance.biz",
      country: "Philippines",
      city: "New Crawfordport",
      region: "<value>",
      continent: "South America",
      device: "Desktop",
      browser: "Safari",
      os: "iOS",
      referer: "bustling-fowl.org",
      refererUrl: "https://terrible-coil.info",
      ip: "cbb1:7aed:928b:d66d:b43a:bbf8:80ce:aae0",
    },
    link: {
      id: "<id>",
      domain: "clean-giant.com",
      key: "<key>",
      url: "https://obvious-cycle.name/",
      externalId: "<id>",
      expiresAt: "1764828031415",
      expiredUrl: "https://expert-bonnet.org",
      password: "DLdImWmbZShDNG4",
      title: "<value>",
      description: "deduction cop ack creak exaggerate",
      image: "https://loremflickr.com/3319/3766?lock=8143688530542841",
      video: "https://picsum.videos/seed/ePlYQUzicw/1341/1299",
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
      webhookIds: [
        "<value>",
      ],
      comments:
        "lox ew developmental baseboard basket out and likewise libel cow but banish encouragement concrete pfft terrible",
      shortLink: "https://plain-nun.info",
      qrCode: "https://frilly-baritone.info/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1730771844533",
      updatedAt: "1735483641668",
      projectId: "<id>",
      programId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `event`                                                                              | [components.LinkClickedEventEvent](../../models/components/linkclickedeventevent.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `createdAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [components.LinkClickedEventData](../../models/components/linkclickedeventdata.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |