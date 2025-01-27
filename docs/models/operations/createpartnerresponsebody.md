# CreatePartnerResponseBody

The created partner

## Example Usage

```typescript
import { CreatePartnerResponseBody } from "dub/models/operations";

let value: CreatePartnerResponseBody = {
  id: "<id>",
  name: "<value>",
  email: "Claude_Blick24@hotmail.com",
  image: "https://picsum.photos/seed/GyIFLzOTHm/1564/2518",
  country: "Estonia",
  bio: "<value>",
  stripeConnectId: "<id>",
  payoutsEnabled: false,
  createdAt: "1726559006519",
  updatedAt: "1737968874864",
  status: "approved",
  link: {
    id: "<id>",
    shortLink: "https://elegant-avalanche.com",
    domain: "querulous-lid.org",
    key: "<key>",
    url: "https://svelte-pear.biz/",
  },
  commissionAmount: 7369.06,
  earnings: 7413.34,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `email`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `image`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `country`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `bio`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `stripeConnectId`                                                                    | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `couponId`                                                                           | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `payoutsEnabled`                                                                     | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `createdAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `updatedAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `status`                                                                             | [operations.Status](../../models/operations/status.md)                               | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `link`                                                                               | [operations.CreatePartnerLink](../../models/operations/createpartnerlink.md)         | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `discount`                                                                           | [operations.CreatePartnerDiscount](../../models/operations/createpartnerdiscount.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `commissionAmount`                                                                   | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `earnings`                                                                           | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |