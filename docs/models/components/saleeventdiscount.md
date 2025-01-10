# SaleEventDiscount

## Example Usage

```typescript
import { SaleEventDiscount } from "dub/models/components";

let value: SaleEventDiscount = {
  id: "<id>",
  couponId: "<id>",
  couponTestId: "<id>",
  amount: 4939.45,
  type: "flat",
  duration: 6672.15,
  interval: "year",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `couponId`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `couponTestId`                                                               | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `amount`                                                                     | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `type`                                                                       | [components.SaleEventType](../../models/components/saleeventtype.md)         | :heavy_check_mark:                                                           | N/A                                                                          |
| `duration`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `interval`                                                                   | [components.SaleEventInterval](../../models/components/saleeventinterval.md) | :heavy_check_mark:                                                           | N/A                                                                          |