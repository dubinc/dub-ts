# Sale

## Example Usage

```typescript
import { Sale } from "dub/models/components";

let value: Sale = {
  amount: 738152,
  paymentProcessor: "paddle",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `amount`                                                                   | *number*                                                                   | :heavy_check_mark:                                                         | The amount of the sale. Should be passed in cents.                         |
| `invoiceId`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | The invoice ID of the sale.                                                |
| `paymentProcessor`                                                         | [components.PaymentProcessor](../../models/components/paymentprocessor.md) | :heavy_check_mark:                                                         | The payment processor via which the sale was made.                         |