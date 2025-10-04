# Discount

## Example Usage

```typescript
import { Discount } from "dub/models/operations";

let value: Discount = {
  id: "<id>",
  amount: 5865.89,
  type: "flat",
  maxDuration: 2716.09,
  couponId: "<id>",
  couponTestId: "<id>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `amount`                                                                   | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `type`                                                                     | [operations.GetCustomersType](../../models/operations/getcustomerstype.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `maxDuration`                                                              | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `couponId`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `couponTestId`                                                             | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `description`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `partnersCount`                                                            | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |