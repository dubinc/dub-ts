# WebhookEvent

Webhook event schema

## Example Usage

```typescript
import { WebhookEvent } from "dub/models/components";

let value: WebhookEvent = {
  id: "<id>",
  event: "sale.created",
  createdAt: "<value>",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      name: "<value>",
      email: "Margarete53@yahoo.com",
      avatar: "https://loremflickr.com/640/480",
    },
    click: {
      id: "<id>",
      url: "http://cautious-species.info",
      continent: "<value>",
      country: "San Marino",
      city: "Earlborough",
      device: "<value>",
      browser: "<value>",
      os: "<value>",
      referer: "<value>",
      ip: "182.7.143.188",
    },
    link: {
      id: "<id>",
      domain: "icky-brow.name",
      key: "<key>",
      externalId: "<value>",
      url: "https://both-prow.name",
      expiresAt: "<value>",
      expiredUrl: "https://ambitious-violin.org",
      password: "asuSzGRlC3BqRjq",
      title: "<value>",
      description: "Re-contextualized explicit migration",
      image: "https://loremflickr.com/640/480",
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
      shortLink: "http://blushing-mandarin.com",
      qrCode: "http://easy-going-adapter.com",
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
    sale: {
      amount: 249.44,
      currency: "Falkland Islands Pound",
      paymentProcessor: "<value>",
      invoiceId: "<value>",
    },
  },
};
```

## Supported Types

### `components.One`

```typescript
const value: components.One = /* values here */
```

### `components.Two`

```typescript
const value: components.Two = /* values here */
```

### `components.Three`

```typescript
const value: components.Three = /* values here */
```

### `components.Four`

```typescript
const value: components.Four = /* values here */
```

