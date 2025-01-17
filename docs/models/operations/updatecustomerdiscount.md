# UpdateCustomerDiscount

## Example Usage

```typescript
import { UpdateCustomerDiscount } from "dub/models/operations";

let value: UpdateCustomerDiscount = {
  id: "<id>",
  couponId: "<id>",
  couponTestId: "<id>",
  amount: 5977.67,
  type: "flat",
  duration: 5004.94,
  interval: "month",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `couponId`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `couponTestId`                                                                         | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `amount`                                                                               | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `type`                                                                                 | [operations.UpdateCustomerType](../../models/operations/updatecustomertype.md)         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `duration`                                                                             | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `interval`                                                                             | [operations.UpdateCustomerInterval](../../models/operations/updatecustomerinterval.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |