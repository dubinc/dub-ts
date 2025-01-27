# CreatePartnerDiscount

## Example Usage

```typescript
import { CreatePartnerDiscount } from "dub/models/operations";

let value: CreatePartnerDiscount = {
  id: "<id>",
  couponId: "<id>",
  couponTestId: "<id>",
  amount: 3927.35,
  type: "percentage",
  duration: 1157.3,
  interval: "month",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `couponId`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `couponTestId`                                                                       | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `amount`                                                                             | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `type`                                                                               | [operations.CreatePartnerType](../../models/operations/createpartnertype.md)         | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `duration`                                                                           | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `interval`                                                                           | [operations.CreatePartnerInterval](../../models/operations/createpartnerinterval.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |