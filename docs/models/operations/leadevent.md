# LeadEvent

## Example Usage

```typescript
import { LeadEvent } from "dub/models/operations";

let value: LeadEvent = {
  event: "lead",
  timestamp: "<value>",
  eventId: "<id>",
  eventName: "<value>",
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://wicked-airport.com",
    country: "Latvia",
    city: "Fort Rafaelboro",
    region: "<value>",
    continent: "Australia",
    device: "Mobile",
    browser: "Chrome",
    os: "Blackberry",
    referer: "familiar-cellar.net",
    refererUrl: "https://fixed-cornet.com/",
    qr: false,
    ip: "102.154.86.89",
  },
  link: {
    id: "<id>",
    domain: "insecure-humidity.biz",
    key: "<key>",
    url: "https://uneven-marten.name/",
    trackConversion: true,
    externalId: "<id>",
    tenantId: null,
    programId: "<id>",
    partnerId: null,
    archived: false,
    expiresAt: "1760181137346",
    expiredUrl: "https://circular-issue.name",
    disabledAt: "<value>",
    password: "EGTFqtGQMxNCXcA",
    proxy: false,
    title: "<value>",
    description: "hmph cycle mismatch gosh partridge ha custody boo",
    image: "https://picsum.photos/seed/pgzrCEa/3008/2649",
    video: "https://picsum.videos/seed/SBJgTl9/2509/2083",
    rewrite: true,
    doIndex: true,
    ios: "<value>",
    android: "<id>",
    geo: {},
    publicStats: false,
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "blue",
      },
    ],
    folderId: "<id>",
    comments:
      "regarding phooey until pro dirty gadzooks dependable psst major function blah content ouch",
    shortLink: "https://first-characterization.name/",
    qrCode: "https://shallow-airline.org",
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
    createdAt: "1711206742729",
    updatedAt: "1735648274647",
    tagId: "<id>",
    projectId: "<id>",
    webhookIds: [],
  },
  customer: {
    id: "<id>",
    externalId: "<id>",
    createdAt: "1732494656974",
  },
  clickId: "<id>",
  linkId: "<id>",
  domain: "austere-developing.biz",
  key: "<key>",
  url: "https://glittering-coordination.net",
  continent: "Asia",
  country: "Cambodia",
  city: "Greenland",
  device: "Mobile",
  browser: "Firefox",
  os: "Blackberry",
  qr: 3363.9,
  ip: "67ea:407b:ebdd:5d36:65ba:7321:aaef:9dd9",
};
```

## Fields

| Field                                                                                                                                                               | Type                                                                                                                                                                | Required                                                                                                                                                            | Description                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `event`                                                                                                                                                             | *"lead"*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `timestamp`                                                                                                                                                         | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `eventId`                                                                                                                                                           | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `eventName`                                                                                                                                                         | *string*                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `metadata`                                                                                                                                                          | *any*                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `click`                                                                                                                                                             | [operations.ResponseBodyClick](../../models/operations/responsebodyclick.md)                                                                                        | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `link`                                                                                                                                                              | [operations.ResponseBodyLink](../../models/operations/responsebodylink.md)                                                                                          | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
| `customer`                                                                                                                                                          | [operations.ListEventsResponseBodyCustomer](../../models/operations/listeventsresponsebodycustomer.md)                                                              | :heavy_check_mark:                                                                                                                                                  | N/A                                                                                                                                                                 |
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