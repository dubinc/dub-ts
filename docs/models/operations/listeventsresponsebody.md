# ListEventsResponseBody

A list of events

## Example Usage

```typescript
import { ListEventsResponseBody } from "dub/models/operations";

let value: ListEventsResponseBody = [
  {
    event: "click",
    click: {
      id: "<id>",
      url: "https://pointed-going.net/",
      continent: "<value>",
      country: "Greenland",
      city: "West Shayleeworth",
      device: "<value>",
      browser: "<value>",
      os: "<value>",
      referer: "<value>",
      refererUrl: "<value>",
      ip: "201.69.227.42",
    },
    link: {
      id: "<id>",
      domain: "rapid-blossom.org",
      key: "<key>",
      externalId: "<value>",
      url: "https://tempting-mentor.info",
      expiresAt: "<value>",
      expiredUrl: "https://motionless-institute.net",
      password: "11JqjTiD5kp_nvh",
      title: "<value>",
      description: "Organic stable data-warehouse",
      image: "https://picsum.photos/seed/0kv1yS/2188/1175",
      video: "<value>",
      ios: "<value>",
      android: "<value>",
      geo: {},
      tagId: "<value>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "purple",
        },
      ],
      comments: "<value>",
      shortLink: "https://well-off-velocity.net",
      qrCode: "https://lucky-adult.name",
      utmSource: "<value>",
      utmMedium: "<value>",
      utmCampaign: "<value>",
      utmTerm: "<value>",
      utmContent: "<value>",
      userId: "<value>",
      workspaceId: "<value>",
      lastClicked: "<value>",
      createdAt: "<value>",
      updatedAt: "<value>",
      projectId: "<value>",
    },
    clickId: "<value>",
    linkId: "<value>",
    domain: "wrong-skyline.info",
    key: "<key>",
    url: "https://spiffy-reorganisation.org/",
    continent: "<value>",
    country: "Taiwan",
    city: "Barrettmouth",
    device: "<value>",
    browser: "<value>",
    os: "<value>",
    qr: 3136.95,
    ip: "6cc6:d9e4:ff34:fbad:4a27:69e3:8de2:e1aa",
  },
];
```

## Supported Types

### `components.ClickEvent[]`

```typescript
const value: components.ClickEvent[] = /* values here */
```

### `components.LeadEvent[]`

```typescript
const value: components.LeadEvent[] = /* values here */
```

### `components.SaleEvent[]`

```typescript
const value: components.SaleEvent[] = /* values here */
```

