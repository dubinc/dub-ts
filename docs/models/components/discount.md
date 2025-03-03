# Discount

## Example Usage

```typescript
import { Discount } from "dub/models/components";

let value: Discount = {
  id: "<id>",
  couponId: "<id>",
  couponTestId: "<id>",
  amount: 1272.94,
  type: "flat",
  duration: 1418.17,
  interval: "month",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `couponId`                                                           | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `couponTestId`                                                       | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `amount`                                                             | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `type`                                                               | [components.LeadEventType](../../models/components/leadeventtype.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `duration`                                                           | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `interval`                                                           | [components.Interval](../../models/components/interval.md)           | :heavy_check_mark:                                                   | N/A                                                                  |