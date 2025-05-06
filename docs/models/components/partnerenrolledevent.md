# PartnerEnrolledEvent

Triggered when a partner is enrolled.

## Example Usage

```typescript
import { PartnerEnrolledEvent } from "dub/models/components";

let value: PartnerEnrolledEvent = {
  id: "<id>",
  event: "partner.enrolled",
  createdAt: "1729559056925",
  data: {
    id: "<id>",
    name: "<value>",
    email: "Aditya_Balistreri@hotmail.com",
    image: "https://picsum.photos/seed/FPQojeSAjJ/1197/310",
    country: "Tuvalu",
    paypalEmail: "<value>",
    stripeConnectId: "<id>",
    payoutsEnabledAt: "<value>",
    createdAt: "1744114338931",
    status: "rejected",
    programId: "<id>",
    tenantId: "<id>",
    links: [
      {
        id: "<id>",
        domain: "basic-pigpen.com",
        key: "<key>",
        shortLink: "https://webbed-pear.net/",
        url: "https://yummy-clamp.net/",
      },
    ],
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