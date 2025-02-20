# Discount

## Example Usage

```typescript
import { Discount } from "dub/models/operations";

let value: Discount = {
  id: "<id>",
  couponId: "<id>",
  couponTestId: "<id>",
  amount: 5720.46,
  type: "percentage",
  duration: 3002.35,
  interval: "month",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `couponId`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `couponTestId`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `amount`                                                                           | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `type`                                                                             | [operations.Type](../../models/operations/type.md)                                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `duration`                                                                         | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `interval`                                                                         | [operations.GetCustomersInterval](../../models/operations/getcustomersinterval.md) | :heavy_check_mark:                                                                 | N/A                                                                                |