# GetCustomerDiscount

## Example Usage

```typescript
import { GetCustomerDiscount } from "dub/models/operations";

let value: GetCustomerDiscount = {
  id: "<id>",
  amount: 8336.01,
  type: "flat",
  maxDuration: 954.69,
  couponId: null,
  couponTestId: "<id>",
  default: false,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `amount`                                                                 | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `type`                                                                   | [operations.GetCustomerType](../../models/operations/getcustomertype.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `maxDuration`                                                            | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `description`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `couponId`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `couponTestId`                                                           | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `partnersCount`                                                          | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `default`                                                                | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |