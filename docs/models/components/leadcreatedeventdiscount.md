# LeadCreatedEventDiscount

## Example Usage

```typescript
import { LeadCreatedEventDiscount } from "dub/models/components";

let value: LeadCreatedEventDiscount = {
  id: "<id>",
  couponId: "<id>",
  couponTestId: "<id>",
  amount: 2196.34,
  type: "flat",
  duration: 3369.61,
  interval: "month",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `couponId`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `couponTestId`                                                                             | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `amount`                                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `type`                                                                                     | [components.LeadCreatedEventType](../../models/components/leadcreatedeventtype.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `duration`                                                                                 | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `interval`                                                                                 | [components.LeadCreatedEventInterval](../../models/components/leadcreatedeventinterval.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |