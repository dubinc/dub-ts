# ListCommissionsResponseBody

## Example Usage

```typescript
import { ListCommissionsResponseBody } from "dub/models/operations";

let value: ListCommissionsResponseBody = {
  id: "cm_1JVR7XRCSR0EDBAF39FZ4PMYE",
  amount: 7467.2,
  earnings: 5050.12,
  currency: "Australian Dollar",
  status: "duplicate",
  createdAt: "1710581770649",
  updatedAt: "1735639185944",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The commission's unique ID on Dub.                                                   | cm_1JVR7XRCSR0EDBAF39FZ4PMYE                                                         |
| `type`                                                                               | [operations.ListCommissionsType](../../models/operations/listcommissionstype.md)     | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `amount`                                                                             | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `earnings`                                                                           | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `currency`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `status`                                                                             | [operations.ListCommissionsStatus](../../models/operations/listcommissionsstatus.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `invoiceId`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `createdAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `updatedAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |