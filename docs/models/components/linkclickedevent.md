# LinkClickedEvent

Triggered when a link is clicked.

## Example Usage

```typescript
import { LinkClickedEvent } from "dub/models/components";

let value: LinkClickedEvent = {
  id: "<id>",
  event: "link.clicked",
  createdAt: "1716322824281",
  data: {
    click: {
      id: "<id>",
      timestamp: "<value>",
      url: "https://sparkling-sauerkraut.org/",
      country: "Guyana",
      city: "North Richie",
      region: "<value>",
      continent: "Europe",
      device: "Mobile",
      browser: "Firefox",
      os: "Symbian",
      referer: "ample-captain.info",
      refererUrl: "https://bright-mentor.biz/",
      ip: "ec51:ef8a:3f9b:c07b:fded:edba:8a84:7178",
    },
    link: {
      id: "<id>",
      domain: "bulky-daughter.biz",
      key: "<key>",
      url: "https://gummy-chasuble.net/",
      externalId: "<id>",
      tenantId: "<id>",
      programId: "<id>",
      partnerId: "<id>",
      expiresAt: "1754100670101",
      expiredUrl: "https://paltry-confusion.com/",
      password: "0HblaFn2ayYuozF",
      title: "<value>",
      description:
        "fly noisily ugh clueless whether snoop whereas psst lively kindheartedly",
      image: "https://picsum.photos/seed/Fwp6t9AJWi/771/1679",
      video: "https://picsum.videos/seed/M3ye7Mdvw/1588/732",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "yellow",
        },
      ],
      folderId: "<id>",
      webhookIds: [
        "<value>",
      ],
      comments:
        "woot round whereas whenever essence frankly folklore fen but adjudge needily blah",
      shortLink: "https://worthy-story.biz/",
      qrCode: "https://intrepid-role.com/",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<id>",
      workspaceId: "<id>",
      lastClicked: "<value>",
      createdAt: "1712976713599",
      updatedAt: "1743218424828",
      projectId: "<id>",
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