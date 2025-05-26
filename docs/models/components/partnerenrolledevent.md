# PartnerEnrolledEvent

Triggered when a partner is enrolled.

## Example Usage

```typescript
import { PartnerEnrolledEvent } from "dub/models/components";

let value: PartnerEnrolledEvent = {
  id: "<id>",
  event: "partner.enrolled",
  createdAt: "1731276953888",
  data: {
    id: "<id>",
    name: "<value>",
    email: "Aditya_Balistreri@hotmail.com",
    image: "https://picsum.photos/seed/FPQojeSAjJ/1197/310",
    country: "Tuvalu",
    website: "<value>",
    youtube: "<value>",
    twitter: "<value>",
    linkedin: "<value>",
    instagram: "<value>",
    tiktok: "<value>",
    paypalEmail: "<value>",
    stripeConnectId: "<id>",
    payoutsEnabledAt: "<value>",
    createdAt: "1745832235896",
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