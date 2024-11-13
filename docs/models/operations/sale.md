# Sale

## Example Usage

```typescript
import { Sale } from "dub/models/operations";

let value: Sale = {
  amount: 6928.04,
  currency: "Colombian Peso",
  paymentProcessor: "<value>",
  invoiceId: "<id>",
  metadata: {
    "key": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `amount`              | *number*              | :heavy_check_mark:    | N/A                   |
| `currency`            | *string*              | :heavy_check_mark:    | N/A                   |
| `paymentProcessor`    | *string*              | :heavy_check_mark:    | N/A                   |
| `invoiceId`           | *string*              | :heavy_check_mark:    | N/A                   |
| `metadata`            | Record<string, *any*> | :heavy_check_mark:    | N/A                   |