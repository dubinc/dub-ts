# ListPayoutsResponseBody

## Example Usage

```typescript
import { ListPayoutsResponseBody } from "dub/models/operations";

let value: ListPayoutsResponseBody = {
  id: "<id>",
  invoiceId: "<id>",
  amount: 4110.29,
  currency: "Brazilian Real",
  status: "canceled",
  periodStart: "<value>",
  periodEnd: "<value>",
  createdAt: "1704178992024",
  initiatedAt: "<value>",
  paidAt: null,
  mode: null,
  partner: {
    id: "<id>",
    name: "<value>",
    email: "Loren12@hotmail.com",
    image: "https://loremflickr.com/1427/2811?lock=4985653675743413",
    payoutsEnabledAt: "<value>",
    country: "Virgin Islands, U.S.",
    tenantId: "<id>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `invoiceId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `amount`                                                                       | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `currency`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `status`                                                                       | [operations.ListPayoutsStatus](../../models/operations/listpayoutsstatus.md)   | :heavy_check_mark:                                                             | N/A                                                                            |
| `description`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `periodStart`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `periodEnd`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `initiatedAt`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `paidAt`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `failureReason`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `mode`                                                                         | [operations.ListPayoutsMode](../../models/operations/listpayoutsmode.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
| `partner`                                                                      | [operations.ListPayoutsPartner](../../models/operations/listpayoutspartner.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `user`                                                                         | [operations.User](../../models/operations/user.md)                             | :heavy_minus_sign:                                                             | N/A                                                                            |