# LeadCreatedEventData

## Example Usage

```typescript
import { LeadCreatedEventData } from "dub/models/components";

let value: LeadCreatedEventData = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    externalId: "<id>",
    name: "<value>",
    createdAt: "1738810478373",
  },
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://dreary-understanding.org/",
    country: "Namibia",
    city: "Corpus Christi",
    region: "<value>",
    continent: "South America",
    device: "Mobile",
    browser: "Chrome",
    os: "Chrome OS",
    referer: "vengeful-platter.name",
    refererUrl: "https://filthy-wasabi.info",
    ip: "186.155.87.77",
  },
  link: {
    id: "<id>",
    domain: "easy-bidet.name",
    key: "<key>",
    url: "https://essential-awareness.com",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1762506768566",
    expiredUrl: "https://fearless-advancement.com/",
    password: "t709sIbuplOVaNG",
    title: "<value>",
    description:
      "gadzooks fooey pulp except scout mortally stall claw if where",
    image: "https://picsum.photos/seed/0RzpwPIvuT/3525/1275",
    video: "https://picsum.videos/seed/zgiCgukve/930/383",
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
    webhookIds: [
      "<value>",
    ],
    comments:
      "embody until barring per fen through testify prime grave who modulo oh nor unused furthermore quietly",
    shortLink: "https://infamous-flame.info/",
    qrCode: "https://courageous-council.com/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1722429593503",
    updatedAt: "1739204202738",
    projectId: "<id>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `eventName`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `customer`                                                                                 | [components.LeadCreatedEventCustomer](../../models/components/leadcreatedeventcustomer.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `click`                                                                                    | [components.LeadCreatedEventClick](../../models/components/leadcreatedeventclick.md)       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `link`                                                                                     | [components.LeadCreatedEventLink](../../models/components/leadcreatedeventlink.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |