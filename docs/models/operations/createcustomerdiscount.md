# CreateCustomerDiscount

## Example Usage

```typescript
import { CreateCustomerDiscount } from "dub/models/operations";

let value: CreateCustomerDiscount = {
  id: "<id>",
  couponId: "<id>",
  couponTestId: "<id>",
  amount: 3444.01,
  type: "percentage",
  duration: 8197.77,
  interval: "year",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `couponId`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `couponTestId`                                                                         | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `amount`                                                                               | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `type`                                                                                 | [operations.CreateCustomerType](../../models/operations/createcustomertype.md)         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `duration`                                                                             | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `interval`                                                                             | [operations.CreateCustomerInterval](../../models/operations/createcustomerinterval.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |