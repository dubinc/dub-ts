# LinkClickedEventData

## Example Usage

```typescript
import { LinkClickedEventData } from "dub/models/components";

let value: LinkClickedEventData = {
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://giving-ravioli.biz/",
    country: "Switzerland",
    city: "Wainoworth",
    region: "<value>",
    continent: "Antarctica",
    device: "Mobile",
    browser: "Chrome",
    os: "Windows",
    referer: "wavy-vestment.com",
    refererUrl: "https://majestic-strategy.name/",
    ip: "aeaa:0281:88ec:fd90:6bd7:6e7e:62be:d4fa",
  },
  link: {
    id: "<id>",
    domain: "glittering-meadow.net",
    key: "<key>",
    url: "https://whopping-icebreaker.org/",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1744866455280",
    expiredUrl: "https://darling-adaptation.biz/",
    password: "GIuJbPtvCVpCFOB",
    title: "<value>",
    description: "pro yet blue ugh nautical barring whereas",
    image: "https://picsum.photos/seed/hiKrp1i/3152/1984",
    video: "https://picsum.videos/seed/1jtUn/3441/3214",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "green",
      },
    ],
    webhookIds: [
      "<value>",
    ],
    comments:
      "unless separate gadzooks fall boohoo if loyally singe search until for perfection overcooked horde",
    shortLink: "https://obvious-carnival.net",
    qrCode: "https://clean-meander.info",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1721822339320",
    updatedAt: "1738838178980",
    projectId: "<id>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `click`                                                                              | [components.LinkClickedEventClick](../../models/components/linkclickedeventclick.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `link`                                                                               | [components.LinkClickedEventLink](../../models/components/linkclickedeventlink.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |