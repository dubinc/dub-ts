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
  invoiceId: "<id>",
  description: "boohoo profuse aware hollow cassava aw",
  quantity: 751.17,
  createdAt: "1708756045705",
  updatedAt: "1735660652819",
  partner: {
    id: "<id>",
    name: "<value>",
    email: "Sheldon51@yahoo.com",
    image: "https://picsum.photos/seed/AyesdqG2l/1852/2789",
    payoutsEnabledAt: "<value>",
    country: "Cape Verde",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | The commission's unique ID on Dub.                                                       | cm_1JVR7XRCSR0EDBAF39FZ4PMYE                                                             |
| `type`                                                                                   | [operations.ListCommissionsType](../../models/operations/listcommissionstype.md)         | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `amount`                                                                                 | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `earnings`                                                                               | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `currency`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `status`                                                                                 | [operations.ListCommissionsStatus](../../models/operations/listcommissionsstatus.md)     | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `invoiceId`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `description`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `quantity`                                                                               | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `userId`                                                                                 | *string*                                                                                 | :heavy_minus_sign:                                                                       | The user who created the manual commission.                                              |                                                                                          |
| `createdAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `updatedAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `partner`                                                                                | [operations.ListCommissionsPartner](../../models/operations/listcommissionspartner.md)   | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `customer`                                                                               | [operations.ListCommissionsCustomer](../../models/operations/listcommissionscustomer.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |