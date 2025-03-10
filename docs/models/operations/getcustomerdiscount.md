# GetCustomerDiscount

## Example Usage

```typescript
import { GetCustomerDiscount } from "dub/models/operations";

let value: GetCustomerDiscount = {
  id: "<id>",
  amount: 3830.12,
  type: "flat",
  maxDuration: 4850.68,
  couponId: "<id>",
  couponTestId: "<id>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `amount`                                                                 | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `type`                                                                   | [operations.GetCustomerType](../../models/operations/getcustomertype.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `maxDuration`                                                            | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `couponId`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `couponTestId`                                                           | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `partnersCount`                                                          | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |