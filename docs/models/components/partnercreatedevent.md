# PartnerCreatedEvent

Triggered when a partner is created.

## Example Usage

```typescript
import { PartnerCreatedEvent } from "dub/models/components";

let value: PartnerCreatedEvent = {
  id: "<id>",
  event: "partner.created",
  createdAt: "1739430950963",
  data: {
    id: "<id>",
    name: "<value>",
    email: "Rosalee_Stehr26@hotmail.com",
    image: "https://loremflickr.com/3028/2311?lock=3598426534101011",
    country: "Georgia",
    payoutsEnabled: false,
    createdAt: "1729483558248",
    status: "pending",
    programId: "<id>",
    tenantId: "<id>",
    links: [
      {
        id: "<id>",
        domain: "purple-sediment.net",
        key: "<key>",
        shortLink: "https://untimely-diagram.name",
        url: "https://eminent-curl.net",
      },
    ],
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `event`                                                                                    | [components.PartnerCreatedEventEvent](../../models/components/partnercreatedeventevent.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `createdAt`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `data`                                                                                     | [components.PartnerCreatedEventData](../../models/components/partnercreatedeventdata.md)   | :heavy_check_mark:                                                                         | N/A                                                                                        |