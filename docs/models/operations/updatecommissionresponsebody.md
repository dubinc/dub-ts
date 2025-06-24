# UpdateCommissionResponseBody

The updated commission.

## Example Usage

```typescript
import { UpdateCommissionResponseBody } from "dub/models/operations";

let value: UpdateCommissionResponseBody = {
  id: "cm_1JVR7XRCSR0EDBAF39FZ4PMYE",
  amount: 8786.35,
  earnings: 1486.93,
  currency: "Rand",
  status: "fraud",
  createdAt: "1710879809528",
  updatedAt: "1735668214306",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | The commission's unique ID on Dub.                                                     | cm_1JVR7XRCSR0EDBAF39FZ4PMYE                                                           |
| `type`                                                                                 | [operations.UpdateCommissionType](../../models/operations/updatecommissiontype.md)     | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `amount`                                                                               | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `earnings`                                                                             | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `currency`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `status`                                                                               | [operations.UpdateCommissionStatus](../../models/operations/updatecommissionstatus.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `invoiceId`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `description`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `createdAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `updatedAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |