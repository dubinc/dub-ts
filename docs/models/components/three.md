# Three

## Example Usage

```typescript
import { Three } from "dub/models/components";

let value: Three = {
  id: "<id>",
  event: "lead.created",
  createdAt: "<value>",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      name: "<value>",
      email: "Eddie81@hotmail.com",
      avatar: "https://picsum.photos/seed/OaP3cC7Bjq/1656/2518",
    },
    click: {
      id: "<id>",
      url: "https://blank-knickers.org/",
      continent: "Europe",
      country: "Fiji",
      city: "Hempstead",
      device: "Mobile",
      browser: "Firefox",
      os: "Symbian",
      referer: "unwritten-chops.com",
      refererUrl: "https://unsung-jury.net",
      ip: "56.38.153.50",
    },
    link: {
      id: "<id>",
      domain: "bare-euphonium.net",
      key: "<key>",
      externalId: "<id>",
      url: "https://gracious-soup.biz",
      expiresAt: "<value>",
      expiredUrl: "https://noted-interviewer.info/",
      password: "P9FfzjGYgHCfpkZ",
      title: "<value>",
      description:
        "atop sediment duh stingy than wiggly apropos besmirch consequently",
      image: "https://picsum.photos/seed/aKFTY75Na/656/1517",
      video: "https://picsum.videos/seed/QRBzzi/779/3528",
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
      comments: "coordinated guidance anti fast advocate weird qualified woot",
      shortLink: "https://colossal-hospitalization.info",
      qrCode: "https://misguided-fund.net",
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
| `event`                                                                        | [components.WebhookEvent3Event](../../models/components/webhookevent3event.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [components.WebhookEvent3Data](../../models/components/webhookevent3data.md)   | :heavy_check_mark:                                                             | N/A                                                                            |