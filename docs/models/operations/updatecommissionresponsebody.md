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
  invoiceId: "<id>",
  description: "terribly unknown innocent ah ouch brand",
  quantity: 4338.66,
  createdAt: "1720752859158",
  updatedAt: "1735665935076",
  partner: {
    id: "<id>",
    name: "<value>",
    email: "Emile_Robel38@gmail.com",
    image: "https://picsum.photos/seed/FsFnX0o3/2976/2787",
    payoutsEnabledAt: null,
    country: "New Caledonia",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | The commission's unique ID on Dub.                                                         | cm_1JVR7XRCSR0EDBAF39FZ4PMYE                                                               |
| `type`                                                                                     | [operations.UpdateCommissionType](../../models/operations/updatecommissiontype.md)         | :heavy_minus_sign:                                                                         | N/A                                                                                        |                                                                                            |
| `amount`                                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
| `earnings`                                                                                 | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
| `currency`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
| `status`                                                                                   | [operations.UpdateCommissionStatus](../../models/operations/updatecommissionstatus.md)     | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
| `invoiceId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
| `description`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
| `quantity`                                                                                 | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
| `userId`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | The user who created the manual commission.                                                |                                                                                            |
| `createdAt`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
| `updatedAt`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
| `partner`                                                                                  | [operations.UpdateCommissionPartner](../../models/operations/updatecommissionpartner.md)   | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
| `customer`                                                                                 | [operations.UpdateCommissionCustomer](../../models/operations/updatecommissioncustomer.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |                                                                                            |