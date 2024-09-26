# ListEventsResponseBody

A list of events

## Example Usage

```typescript
import { ListEventsResponseBody } from "dub/models/operations";

let value: ListEventsResponseBody = [
  {
    event: "sale",
    eventId: "<value>",
    eventName: "<value>",
    link: {
      id: "<id>",
      domain: "unimportant-shipper.com",
      key: "<key>",
      externalId: "<value>",
      url: "https://difficult-dream.name/",
      expiresAt: "<value>",
      expiredUrl: "https://salty-forager.com/",
      password: "u4ku0cpVNSMi11J",
      title: "<value>",
      description: "Function-based analyzing software",
      image: "https://picsum.photos/seed/LgmdM/3086/2176",
      video: "<value>",
      ios: "<value>",
      android: "<value>",
      geo: {},
      tagId: "<value>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "yellow",
        },
      ],
      comments: "<value>",
      shortLink: "https://quintessential-bakeware.net",
      qrCode: "https://unsung-republican.name",
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
    click: {
      id: "<id>",
      url: "https://flickering-management.biz",
      continent: "<value>",
      country: "Vietnam",
      city: "North Erica",
      device: "<value>",
      browser: "<value>",
      os: "<value>",
      referer: "<value>",
      refererUrl: "<value>",
      ip: "0cdf:dffc:da0d:fb73:bafd:c2a6:b6cc:6d9e",
    },
    customer: {
      id: "<id>",
      name: "<value>",
      email: "Maxie_Daniel-Douglas@gmail.com",
      avatar: "https://loremflickr.com/2439/851?lock=1009453761893957",
    },
    sale: {
      amount: 321422,
      paymentProcessor: "stripe",
    },
    saleAmount: 4446.25,
    invoiceId: "<value>",
    paymentProcessor: "<value>",
    clickId: "<value>",
    linkId: "<value>",
    domain: "vibrant-conservative.info",
    key: "<key>",
    url: "https://webbed-certification.org",
    continent: "<value>",
    country: "Belarus",
    city: "Jackelineberg",
    device: "<value>",
    browser: "<value>",
    os: "<value>",
    qr: 3474.60,
    ip: "221.244.132.222",
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

