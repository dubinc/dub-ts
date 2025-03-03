# UpdatePartnerSaleRequestBody

## Example Usage

```typescript
import { UpdatePartnerSaleRequestBody } from "dub/models/operations";

let value: UpdatePartnerSaleRequestBody = {
  programId: "<id>",
  invoiceId: "<id>",
  amount: 8426.52,
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `programId`                  | *string*                     | :heavy_check_mark:           | N/A                          |
| `invoiceId`                  | *string*                     | :heavy_check_mark:           | N/A                          |
| `amount`                     | *number*                     | :heavy_check_mark:           | The new amount for the sale. |