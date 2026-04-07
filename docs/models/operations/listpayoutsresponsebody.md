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
  method: "paypal",
  partner: {
    id: "<id>",
    name: "<value>",
    email: "Will_Cassin@hotmail.com",
    image: "https://picsum.photos/seed/YqHOiVtyX/1234/2214",
    defaultPayoutMethod: "connect",
    payoutsEnabledAt: "<value>",
    country: "Libyan Arab Jamahiriya",
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
| `updatedAt`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `initiatedAt`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `paidAt`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `failureReason`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `mode`                                                                         | [operations.ListPayoutsMode](../../models/operations/listpayoutsmode.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
| `method`                                                                       | [operations.Method](../../models/operations/method.md)                         | :heavy_check_mark:                                                             | N/A                                                                            |
| `traceId`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `partner`                                                                      | [operations.ListPayoutsPartner](../../models/operations/listpayoutspartner.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `user`                                                                         | [operations.User](../../models/operations/user.md)                             | :heavy_minus_sign:                                                             | N/A                                                                            |