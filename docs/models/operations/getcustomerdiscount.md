# GetCustomerDiscount

## Example Usage

```typescript
import { GetCustomerDiscount } from "dub/models/operations";

let value: GetCustomerDiscount = {
  id: "<id>",
  couponId: "<id>",
  couponTestId: "<id>",
  amount: 9322.52,
  type: "flat",
  duration: 2804.18,
  interval: "month",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `couponId`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `couponTestId`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `amount`                                                                         | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `type`                                                                           | [operations.GetCustomerType](../../models/operations/getcustomertype.md)         | :heavy_check_mark:                                                               | N/A                                                                              |
| `duration`                                                                       | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `interval`                                                                       | [operations.GetCustomerInterval](../../models/operations/getcustomerinterval.md) | :heavy_check_mark:                                                               | N/A                                                                              |