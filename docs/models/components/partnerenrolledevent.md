# PartnerEnrolledEvent

Triggered when a partner is enrolled.

## Example Usage

```typescript
import { PartnerEnrolledEvent } from "dub/models/components";

let value: PartnerEnrolledEvent = {
  id: "<id>",
  event: "partner.enrolled",
  createdAt: "1710696633481",
  data: {
    id: "<id>",
    name: "<value>",
    email: "Lucile_Lebsack@hotmail.com",
    image: "https://picsum.photos/seed/pQJj2H4/1538/1429",
    country: "Switzerland",
    paypalEmail: "<value>",
    stripeConnectId: "<id>",
    payoutsEnabledAt: "<value>",
    programId: "<id>",
    partnerId: "<id>",
    tenantId: "<id>",
    createdAt: "1720109851453",
    status: "rejected",
    links: [],
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `event`                                                                                      | [components.PartnerEnrolledEventEvent](../../models/components/partnerenrolledeventevent.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `createdAt`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `data`                                                                                       | [components.PartnerEnrolledEventData](../../models/components/partnerenrolledeventdata.md)   | :heavy_check_mark:                                                                           | N/A                                                                                          |