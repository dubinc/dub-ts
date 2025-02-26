# Sale

## Example Usage

```typescript
import { Sale } from "dub/models/components";

let value: Sale = {
  amount: 956545,
  paymentProcessor: "paddle",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                   | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | The amount of the sale. Should be passed in cents.                                                                         |
| `invoiceId`                                                                                                                | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The invoice ID of the sale. Can be used as a idempotency key – only one sale event can be recorded for a given invoice ID. |
| `paymentProcessor`                                                                                                         | [components.PaymentProcessor](../../models/components/paymentprocessor.md)                                                 | :heavy_check_mark:                                                                                                         | The payment processor via which the sale was made.                                                                         |