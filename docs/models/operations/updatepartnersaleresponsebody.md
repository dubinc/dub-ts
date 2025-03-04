# UpdatePartnerSaleResponseBody

The updated sale.

## Example Usage

```typescript
import { UpdatePartnerSaleResponseBody } from "dub/models/operations";

let value: UpdatePartnerSaleResponseBody = {
  id: "<id>",
  amount: 3304.22,
  earnings: 2876.48,
  currency: "Australian Dollar",
  status: "refunded",
  createdAt: "1736098114604",
  updatedAt: "1741040411864",
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
| `createdAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updatedAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |