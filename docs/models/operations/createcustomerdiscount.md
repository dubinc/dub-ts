# CreateCustomerDiscount

## Example Usage

```typescript
import { CreateCustomerDiscount } from "dub/models/operations";

let value: CreateCustomerDiscount = {
  id: "<id>",
  amount: 9351.84,
  type: "flat",
  maxDuration: 8335.73,
  couponId: "<id>",
  couponTestId: null,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `amount`                                                                       | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `type`                                                                         | [operations.CreateCustomerType](../../models/operations/createcustomertype.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `maxDuration`                                                                  | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `couponId`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `couponTestId`                                                                 | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `description`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `partnersCount`                                                                | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |