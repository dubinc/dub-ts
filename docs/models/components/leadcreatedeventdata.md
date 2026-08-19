# LeadCreatedEventData

## Example Usage

```typescript
import { LeadCreatedEventData } from "dub/models/components";

let value: LeadCreatedEventData = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    externalId: "<id>",
    createdAt: "1718158709687",
  },
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://optimistic-collectivization.org",
    country: "Trinidad and Tobago",
    city: "St. George",
    region: "<value>",
    continent: "Antarctica",
    device: "Desktop",
    browser: "Safari",
    os: "Windows Phone",
    referer: "parallel-violin.biz",
    refererUrl: "https://appropriate-worth.biz/",
    qr: true,
    ip: "95.252.90.235",
  },
  link: {
    id: "<id>",
    domain: "standard-wilderness.net",
    key: "<key>",
    url: "https://tense-kiss.org/",
    trackConversion: false,
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    archived: false,
    expiresAt: "1765732568841",
    expiredUrl: "https://vague-countess.com",
    disabledAt: "<value>",
    password: null,
    proxy: false,
    title: "<value>",
    description: null,
    image: "https://loremflickr.com/3765/1801?lock=3854912832820743",
    video: "https://loremflickr.com/921/3490?lock=5933009536348657",
    rewrite: false,
    doIndex: true,
    ios: "<value>",
    android: "<id>",
    geo: {
      "key": "https://intelligent-wilderness.name",
    },
    publicStats: false,
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "gray",
      },
    ],
    folderId: "<id>",
    comments:
      "owlishly subtle pace dandelion private unabashedly well-to-do final lowball banish lobotomise faithfully than spirit",
    shortLink: "https://posh-technician.com",
    qrCode: "https://stiff-icebreaker.com",
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
    createdAt: "1704331087084",
    updatedAt: "1735654004218",
    tagId: "<id>",
    projectId: "<id>",
    webhookIds: [
      "<value 1>",
    ],
  },
  metadata: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `eventName`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `customer`                                                                           | [components.Customer](../../models/components/customer.md)                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `click`                                                                              | [components.LeadCreatedEventClick](../../models/components/leadcreatedeventclick.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `link`                                                                               | [components.LeadCreatedEventLink](../../models/components/leadcreatedeventlink.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `partner`                                                                            | [components.Partner](../../models/components/partner.md)                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `metadata`                                                                           | Record<string, *any*>                                                                | :heavy_check_mark:                                                                   | N/A                                                                                  |