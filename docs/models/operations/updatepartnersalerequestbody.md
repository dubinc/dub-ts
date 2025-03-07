# UpdatePartnerSaleRequestBody

## Example Usage

```typescript
import { UpdatePartnerSaleRequestBody } from "dub/models/operations";

let value: UpdatePartnerSaleRequestBody = {
  programId: "<id>",
  invoiceId: "<id>",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `programId`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `invoiceId`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `amount`                                                                                                    | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | The new absolute amount for the sale.                                                                       |
| `modifyAmount`                                                                                              | *number*                                                                                                    | :heavy_minus_sign:                                                                                          | Modify the current sale amount: use positive values to increase the amount, negative values to decrease it. |
| `currency`                                                                                                  | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The currency of the sale amount to update. Accepts ISO 4217 currency codes.                                 |