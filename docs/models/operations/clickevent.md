# ClickEvent

## Example Usage

```typescript
import { ClickEvent } from "dub/models/operations";

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
    disabledAt: "<value>",
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
    geo: {
      "key": "https://measly-certification.com/",
      "key1": "https://outlandish-bakeware.biz/",
      "key2": "https://energetic-airport.name/",
    },
    publicStats: false,
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "blue",
      },
    ],
    folderId: "<id>",
    comments: "iterate hmph custom round boo thick junior times offend",
    shortLink: "https://somber-obedience.info",
    qrCode: "https://authorized-warming.com",
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
    createdAt: "1705246433798",
    updatedAt: "1735627351648",
    tagId: "<id>",
    projectId: "<id>",
    webhookIds: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  clickId: "<id>",
  linkId: "<id>",
  domain: "unhealthy-tomography.com",
  key: "<key>",
  url: "https://crazy-climb.biz",
  continent: "South America",
  country: "Mexico",
  city: "Chino Hills",
  device: "Mobile",
  browser: "Chrome",
  os: "Symbian",
  qr: 5707.69,
  ip: "185.136.102.134",
};
```

## Fields

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `event`                                                                                                                                                             | *"click"*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `timestamp`                                                                                                                                                         | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `click`                                                                                                                                                             | [operations.ListEventsResponseBodyEventsClick](../../models/operations/listeventsresponsebodyeventsclick.md)                                                        | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `link`                                                                                                                                                              | [operations.ListEventsResponseBodyEventsLink](../../models/operations/listeventsresponsebodyeventslink.md)                                                          | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
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