# LeadEvent

## Example Usage

```typescript
import { LeadEvent } from "dub/models/components";

let value: LeadEvent = {
  event: "lead",
  eventId: "<id>",
  eventName: "<value>",
  click: {
    id: "<id>",
    url: "https://immense-experience.net",
    continent: "Asia",
    country: "Reunion",
    city: "Cupertino",
    device: "Mobile",
    browser: "Chrome",
    os: "Android",
    referer: "delectable-fog.info",
    refererUrl: "https://thrifty-tackle.biz",
    ip: "2a76:aa1d:a3eb:f4b6:6deb:fcea:dc4a:075b",
  },
  link: {
    id: "<id>",
    domain: "shoddy-brace.name",
    key: "<key>",
    externalId: "<id>",
    url: "https://enchanting-planula.name",
    expiresAt: "<value>",
    expiredUrl: "https://little-procurement.com/",
    password: "tR6XLHO8Xh7jqO2",
    title: "<value>",
    description:
      "following off wisely yum yuck abnormally within whether but than",
    image: "https://picsum.photos/seed/PZMw4t/2210/1184",
    video: "https://loremflickr.com/1753/811?lock=3222396546866141",
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
    comments:
      "step-mother amidst however astride until fabricate usefully beneath frankly for unwelcome aftermath",
    shortLink: "https://fussy-typeface.org/",
    qrCode: "https://qualified-flu.name",
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
  customer: {
    id: "<id>",
    name: "<value>",
    email: "Ayla_Bauch80@hotmail.com",
    avatar: "https://loremflickr.com/2509/2010?lock=1336478656866918",
  },
  clickId: "<id>",
  linkId: "<id>",
  domain: "sore-merit.org",
  key: "<key>",
  url: "https://yellow-cardboard.org",
  continent: "Antarctica",
  country: "Jordan",
  city: "Doylestead",
  device: "Desktop",
  browser: "Chrome",
  os: "MacOS",
  qr: 3576.39,
  ip: "108.170.102.21",
};
```

## Fields

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `event`                                                                                                                                                             | [components.LeadEventEvent](../../models/components/leadeventevent.md)                                                                                              | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `timestamp`                                                                                                                                                         | *string*                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `eventId`                                                                                                                                                           | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `eventName`                                                                                                                                                         | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `click`                                                                                                                                                             | [components.LeadEventClick](../../models/components/leadeventclick.md)                                                                                              | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `link`                                                                                                                                                              | [components.LeadEventLink](../../models/components/leadeventlink.md)                                                                                                | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `customer`                                                                                                                                                          | [components.Customer](../../models/components/customer.md)                                                                                                          | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| ~~`clickId`~~                                                                                                                                                       | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use `click.id` instead. |
| ~~`linkId`~~                                                                                                                                                        | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use `link.id` instead. |
| ~~`domain`~~                                                                                                                                                        | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use `link.domain` instead. |
| ~~`key`~~                                                                                                                                                           | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use `link.key` instead. |
| ~~`url`~~                                                                                                                                                           | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use `click.url` instead. |
| ~~`continent`~~                                                                                                                                                     | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use `click.continent` instead. |
| ~~`country`~~                                                                                                                                                       | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use `click.country` instead. |
| ~~`city`~~                                                                                                                                                          | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use `click.city` instead. |
| ~~`device`~~                                                                                                                                                        | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use `click.device` instead. |
| ~~`browser`~~                                                                                                                                                       | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use `click.browser` instead. |
| ~~`os`~~                                                                                                                                                            | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use `click.os` instead. |
| ~~`qr`~~                                                                                                                                                            | *number*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use `click.qr` instead. |
| ~~`ip`~~                                                                                                                                                            | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated. Use `click.ip` instead. |