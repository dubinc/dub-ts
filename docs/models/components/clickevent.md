# ClickEvent

## Example Usage

```typescript
import { ClickEvent } from "dub/models/components";

let value: ClickEvent = {
  event: "click",
  timestamp: "<value>",
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://tired-humidity.info/",
    country: "Mauritania",
    city: "West Lafayette",
    region: "<value>",
    continent: "Africa",
    device: "Desktop",
    browser: "Safari",
    os: "Blackberry",
    referer: "kosher-igloo.name",
    refererUrl: "https://polite-thorn.biz/",
    qr: true,
    ip: "fec9:6a8c:ebab:1bd6:7add:ca1f:cdff:274d",
  },
  link: {
    id: "<id>",
    domain: "guilty-scale.name",
    key: "<key>",
    url: "https://frilly-cauliflower.info/",
    trackConversion: true,
    externalId: "<id>",
    tenantId: null,
    programId: "<id>",
    partnerId: "<id>",
    archived: false,
    expiresAt: "1760821640458",
    expiredUrl: null,
    password: "18HRfFytxtNTFfe",
    proxy: false,
    title: "<value>",
    description:
      "corner godparent serpentine celsius ah furthermore kindheartedly capsize aside like",
    image: "https://picsum.photos/seed/jtAJm1AZX/1378/3356",
    video: "https://loremflickr.com/2576/3275?lock=6482607119792312",
    rewrite: false,
    doIndex: false,
    ios: "<value>",
    android: "<id>",
    geo: {},
    publicStats: false,
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "green",
      },
    ],
    folderId: "<id>",
    webhookIds: [],
    comments:
      "or shrilly once to invite advancement qua really ouch sheepishly somber softly fully colour",
    shortLink: "https://frizzy-summer.name/",
    qrCode: "https://definitive-laughter.com",
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
    createdAt: "1723155534908",
    updatedAt: "1735617232534",
    tagId: "<id>",
    projectId: "<id>",
  },
  clickId: "<id>",
  linkId: "<id>",
  domain: "basic-lieu.name",
  key: "<key>",
  url: "https://mysterious-publicity.info",
  continent: "Europe",
  country: "Reunion",
  city: "Lake Luella",
  device: "Mobile",
  browser: "Safari",
  os: "WebOS",
  qr: 2087.18,
  ip: "152.146.60.169",
};
```

## Fields

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `event`                                                                                                                                                             | [components.Event](../../models/components/event.md)                                                                                                                | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `timestamp`                                                                                                                                                         | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `click`                                                                                                                                                             | [components.Click](../../models/components/click.md)                                                                                                                | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `link`                                                                                                                                                              | [components.Link](../../models/components/link.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| ~~`clickId`~~                                                                                                                                                       | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `click.id` instead. |
| ~~`linkId`~~                                                                                                                                                        | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `link.id` instead. |
| ~~`domain`~~                                                                                                                                                        | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `link.domain` instead. |
| ~~`key`~~                                                                                                                                                           | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `link.key` instead. |
| ~~`url`~~                                                                                                                                                           | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `click.url` instead. |
| ~~`continent`~~                                                                                                                                                     | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `click.continent` instead. |
| ~~`country`~~                                                                                                                                                       | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `click.country` instead. |
| ~~`city`~~                                                                                                                                                          | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `click.city` instead. |
| ~~`device`~~                                                                                                                                                        | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `click.device` instead. |
| ~~`browser`~~                                                                                                                                                       | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `click.browser` instead. |
| ~~`os`~~                                                                                                                                                            | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `click.os` instead. |
| ~~`qr`~~                                                                                                                                                            | *number*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `click.qr` instead. |
| ~~`ip`~~                                                                                                                                                            | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `click.ip` instead. |