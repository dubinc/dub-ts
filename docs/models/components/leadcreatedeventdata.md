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
    createdAt: "1718308158489",
  },
  click: {
    id: "<id>",
    timestamp: "<value>",
    url: "https://palatable-encouragement.org/",
    country: "Japan",
    city: "Port Virgilborough",
    region: "<value>",
    continent: "Australia",
    device: "Mobile",
    browser: "Safari",
    os: "MacOS",
    referer: "tempting-pupil.com",
    refererUrl: "https://ambitious-kinase.name",
    ip: "e6c9:ebfb:dbdd:7f1d:a5b1:cc37:d797:a834",
  },
  link: {
    id: "<id>",
    domain: "bony-inspection.org",
    key: "<key>",
    url: "https://quick-hepatitis.org/",
    externalId: "<id>",
    tenantId: "<id>",
    programId: "<id>",
    partnerId: "<id>",
    expiresAt: "1752517713106",
    expiredUrl: "https://impish-maintainer.net",
    password: "ShYEqMtPTKlEv3y",
    title: "<value>",
    description: "except understanding ascribe upwardly qua indeed tuba",
    image: "https://picsum.photos/seed/07jczx/3521/2856",
    video: "https://picsum.videos/seed/v2qur0Ef2/1559/3202",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "blue",
      },
    ],
    folderId: "<id>",
    webhookIds: [
      "<value>",
    ],
    comments:
      "truly quirkily daily stock fooey meanwhile ravage likely tapioca phew strict pointless whoever responsibility acclaimed provided reasoning instantly notarize",
    shortLink: "https://golden-skeleton.name/",
    qrCode: "https://wealthy-humor.org",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "1727747459834",
    updatedAt: "1741008877086",
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