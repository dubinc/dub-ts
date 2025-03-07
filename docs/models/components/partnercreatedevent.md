# PartnerCreatedEvent

Triggered when a partner is created.

## Example Usage

```typescript
import { PartnerCreatedEvent } from "dub/models/components";

let value: PartnerCreatedEvent = {
  id: "<id>",
  event: "partner.created",
  createdAt: "1737700474852",
  data: {
    id: "<id>",
    name: "<value>",
    email: "Itzel96@hotmail.com",
    image: "https://loremflickr.com/933/1058?lock=3672520512542365",
    country: "Cyprus",
    payoutsEnabled: false,
    createdAt: "1734745497866",
    status: "rejected",
    programId: "<id>",
    tenantId: "<id>",
    links: [
      {
        id: "<id>",
        domain: "sarcastic-accelerator.org",
        key: "<key>",
        shortLink: "https://ambitious-pacemaker.net/",
        url: "https://illustrious-straw.info",
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