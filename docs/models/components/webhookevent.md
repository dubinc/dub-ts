# WebhookEvent

Webhook event schema

## Example Usage

```typescript
import { WebhookEvent } from "dub/models/components";

let value: WebhookEvent = {
  id: "<id>",
  event: "lead.created",
  createdAt: "<value>",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      name: "<value>",
      email: "Odessa_Reichel@hotmail.com",
      avatar: "https://picsum.photos/seed/JOnc6/2353/138",
    },
    click: {
      id: "<id>",
      url: "https://kooky-pronoun.org",
      continent: "<value>",
      country: "Burundi",
      city: "Huntington Park",
      device: "<value>",
      browser: "<value>",
      os: "<value>",
      referer: "<value>",
      ip: "241.253.50.168",
    },
    link: {
      id: "<id>",
      domain: "cavernous-pear.net",
      key: "<key>",
      externalId: "<value>",
      url: "https://inferior-godparent.info",
      expiresAt: "<value>",
      expiredUrl: "https://unconscious-travel.com",
      password: "23AQfu_qjtLm2HR",
      title: "<value>",
      description: "Multi-channelled responsive time-frame",
      image: "https://picsum.photos/seed/e9cwF/3196/312",
      video: "<value>",
      ios: "<value>",
      android: "<value>",
      geo: {},
      tagId: "<value>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "blue",
        },
      ],
      comments: "<value>",
      shortLink: "https://exalted-role.org",
      qrCode: "https://lasting-necklace.info",
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

