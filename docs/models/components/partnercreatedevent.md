# PartnerCreatedEvent

Triggered when a partner is created.

## Example Usage

```typescript
import { PartnerCreatedEvent } from "dub/models/components";

let value: PartnerCreatedEvent = {
  id: "<id>",
  event: "partner.created",
  createdAt: "1727687099585",
  data: {
    id: "<id>",
    name: "<value>",
    email: "Sherman.Braun41@yahoo.com",
    image: "https://loremflickr.com/3683/849?lock=4615125709318777",
    country: "Georgia",
    payoutsEnabled: false,
    createdAt: "1729269266391",
    status: "pending",
    programId: "<id>",
    tenantId: "<id>",
    links: [
      {
        id: "<id>",
        domain: "warped-sonata.name",
        key: "<key>",
        shortLink: "https://pleasing-opera.biz/",
        url: "https://miserable-exhaust.info/",
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