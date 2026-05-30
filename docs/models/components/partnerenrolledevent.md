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
    username: "Reed_Jacobs",
    email: "Gerda41@gmail.com",
    image: "https://picsum.photos/seed/8RrOo/1283/193",
    country: "Lesotho",
    companyName: "Kassulke - Renner",
    networkStatus: "trusted",
    defaultPayoutMethod: "connect",
    paypalEmail: "<value>",
    stripeConnectId: "<id>",
    payoutsEnabledAt: "<value>",
    identityVerifiedAt: "<value>",
    programId: "<id>",
    partnerId: "<id>",
    tenantId: "<id>",
    createdAt: "1709378397355",
    status: "deactivated",
    links: [
      {
        id: "<id>",
        domain: "worthwhile-pop.org",
        key: "<key>",
        shortLink: "https://colossal-extent.name",
        url: "https://cooperative-netsuke.com/",
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