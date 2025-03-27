# UpdateCustomerDiscount

## Example Usage

```typescript
import { UpdateCustomerDiscount } from "dub/models/operations";

let value: UpdateCustomerDiscount = {
  id: "<id>",
  amount: 5221.85,
  type: "percentage",
  maxDuration: 7531.78,
  couponId: "<id>",
  couponTestId: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `amount`                                                                       | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `type`                                                                         | [operations.UpdateCustomerType](../../models/operations/updatecustomertype.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `maxDuration`                                                                  | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `description`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `couponId`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `couponTestId`                                                                 | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `partnersCount`                                                                | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |