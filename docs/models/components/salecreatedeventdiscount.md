# SaleCreatedEventDiscount

## Example Usage

```typescript
import { SaleCreatedEventDiscount } from "dub/models/components";

let value: SaleCreatedEventDiscount = {
  id: "<id>",
  couponId: "<id>",
  couponTestId: "<id>",
  amount: 5295.29,
  type: "flat",
  duration: 6662.73,
  interval: "year",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `couponId`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `couponTestId`                                                                             | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `amount`                                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `type`                                                                                     | [components.SaleCreatedEventType](../../models/components/salecreatedeventtype.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `duration`                                                                                 | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `interval`                                                                                 | [components.SaleCreatedEventInterval](../../models/components/salecreatedeventinterval.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |