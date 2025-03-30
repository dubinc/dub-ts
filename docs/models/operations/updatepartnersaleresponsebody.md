# UpdatePartnerSaleResponseBody

The updated sale.

## Example Usage

```typescript
import { UpdatePartnerSaleResponseBody } from "dub/models/operations";

let value: UpdatePartnerSaleResponseBody = {
  id: "<id>",
  amount: 20.11,
  earnings: 9736.27,
  currency: "Hong Kong Dollar",
  status: "paid",
  createdAt: "1723353964140",
  updatedAt: "1743281259251",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `amount`                                                                                 | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `earnings`                                                                               | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `currency`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `status`                                                                                 | [operations.UpdatePartnerSaleStatus](../../models/operations/updatepartnersalestatus.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `invoiceId`                                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `createdAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updatedAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |