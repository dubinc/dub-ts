# Two

## Example Usage

```typescript
import { Two } from "dub/models/components";

let value: Two = {
  id: "<id>",
  event: "link.clicked",
  createdAt: "<value>",
  data: {
    click: {
      id: "<id>",
      url: "https://pretty-pilot.name",
      continent: "Europe",
      country: "Nauru",
      city: "Nikolasbury",
      device: "Desktop",
      browser: "Firefox",
      os: "Linux",
      referer: "gloomy-awareness.biz",
      refererUrl: "https://bulky-daughter.biz/",
      ip: "89.37.187.87",
    },
    link: {
      id: "<id>",
      domain: "clumsy-muscat.biz",
      key: "<key>",
      url: "https://dapper-help.net/",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://accurate-seagull.info",
      password: "aFn2ayYuozFv6pA",
      title: "<value>",
      description:
        "pillow duffel that ack innovation and shark instead energetically alongside",
      image: "https://picsum.photos/seed/WiobSPM3y/1908/621",
      video: "https://picsum.videos/seed/vwdu30/940/479",
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
      comments:
        "eek daddy lest pleasant pack offset inasmuch drat regarding cappelletti goose",
      shortLink: "https://intelligent-blowgun.biz/",
      qrCode: "https://tinted-derby.info",
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
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `event`                                                                        | [components.WebhookEvent2Event](../../models/components/webhookevent2event.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [components.WebhookEventData](../../models/components/webhookeventdata.md)     | :heavy_check_mark:                                                             | N/A                                                                            |