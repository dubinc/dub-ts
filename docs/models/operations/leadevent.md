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
    expiresAt: "1752509111328",
    expiredUrl: "https://untrue-cap.info/",
    disabledAt: "<value>",
    password: "J7EGTFqtGQMxNCX",
    proxy: false,
    title: "<value>",
    description:
      "who repeatedly upon swiftly phooey queasy apud whose from deficient",
    image: "https://picsum.photos/seed/SBJgTl9/2509/2083",
    video: null,
    rewrite: true,
    doIndex: true,
    ios: "<value>",
    android: "<id>",
    geo: null,
    publicStats: false,
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "blue",
      },
    ],
    folderId: "<id>",
    webhookIds: [
      "<value 1>",
      "<value 2>",
    ],
    comments:
      "while bench lest or usually between the coil sternly round during exterior cinema wisecrack parallel tectonics the membership long-term towards",
    shortLink: "https://ethical-sunbeam.com",
    qrCode: "https://firsthand-disk.name/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: null,
    testStartedAt: "<value>",
    testCompletedAt: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1719240093897",
    updatedAt: "1735661732885",
    tagId: "<id>",
    projectId: "<id>",
  },
  customer: {
    id: "<id>",
    name: "<value>",
    externalId: "<id>",
    createdAt: "1717427554667",
  },
  clickId: "<id>",
  linkId: "<id>",
  domain: "trivial-t-shirt.info",
  key: "<key>",
  url: "https://stiff-coal.net",
  continent: "Europe",
  country: "Sint Maarten",
  city: "The Villages",
  device: "Mobile",
  browser: "Chrome",
  os: "BeOS",
  qr: 7990.8,
  ip: "15.198.16.145",
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