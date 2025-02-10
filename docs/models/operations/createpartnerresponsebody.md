# CreatePartnerResponseBody

The created partner

## Example Usage

```typescript
import { CreatePartnerResponseBody } from "dub/models/operations";

let value: CreatePartnerResponseBody = {
  id: "<id>",
  name: "<value>",
  email: "Garret9@yahoo.com",
  image: "https://picsum.photos/seed/Z99D2Onoz/765/2971",
  country: "Gibraltar",
  bio: "<value>",
  stripeConnectId: "<id>",
  payoutsEnabled: false,
  createdAt: "1717149779886",
  updatedAt: "1739148870796",
  status: "rejected",
  links: [
    {
      id: "<id>",
      domain: "soft-nucleotidase.biz",
      key: "<key>",
      shortLink: "https://cultivated-swath.info",
      url: "https://downright-object.org/",
    },
  ],
  commissionAmount: 5891.01,
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
| `links`                                                                              | [operations.Links](../../models/operations/links.md)[]                               | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `discount`                                                                           | [operations.CreatePartnerDiscount](../../models/operations/createpartnerdiscount.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `commissionAmount`                                                                   | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `earnings`                                                                           | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `clicks`                                                                             | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `leads`                                                                              | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `sales`                                                                              | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `saleAmount`                                                                         | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |