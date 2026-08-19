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
    expiresAt: "1735802186687",
    expiredUrl: "https://deficient-developing.info/",
    disabledAt: "<value>",
    password: "fFytxtNTFfefydY",
    proxy: true,
    title: "<value>",
    description: "furthermore sans assail",
    image: "https://loremflickr.com/2548/2706?lock=5742280690220006",
    video: null,
    rewrite: false,
    doIndex: true,
    ios: "<value>",
    android: "<id>",
    geo: {
      "key": "https://windy-density.info/",
      "key1": "https://amazing-stay.biz/",
      "key2": "https://impure-hospitalization.org/",
    },
    publicStats: false,
    tags: [],
    folderId: null,
    comments: "gadzooks mystify potentially decryption the about",
    shortLink: "https://outlandish-bakeware.biz/",
    qrCode: "https://energetic-airport.name/",
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
    createdAt: "1710076378628",
    updatedAt: "1735677356255",
    tagId: "<id>",
    projectId: "<id>",
    webhookIds: [
      "<value 1>",
    ],
  },
  clickId: "<id>",
  linkId: "<id>",
  domain: "cheerful-kiss.com",
  key: "<key>",
  url: "https://lustrous-affiliate.org",
  continent: "South America",
  country: "Sudan",
  city: "Erwinmouth",
  device: "Desktop",
  browser: "Chrome",
  os: "Symbian",
  qr: 4797.06,
  ip: "16.14.214.193",
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