# UpdatePartnerSaleResponseBody

The updated sale.

## Example Usage

```typescript
import { UpdatePartnerSaleResponseBody } from "dub/models/operations";

let value: UpdatePartnerSaleResponseBody = {
  id: "<id>",
  amount: 9951.67,
  earnings: 5522.56,
  currency: "Algerian Dinar",
  status: "refunded",
  createdAt: "1732913782963",
  updatedAt: "1741193056401",
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