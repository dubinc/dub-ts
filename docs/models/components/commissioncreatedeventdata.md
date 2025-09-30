# CommissionCreatedEventData

## Example Usage

```typescript
import { CommissionCreatedEventData } from "dub/models/components";

let value: CommissionCreatedEventData = {
  id: "cm_1JVR7XRCSR0EDBAF39FZ4PMYE",
  amount: 28.03,
  earnings: 9813.81,
  currency: "Rand",
  status: "pending",
  invoiceId: "<id>",
  description:
    "freckle safeguard only gosh bah failing optimistically if at well-to-do",
  quantity: 912.88,
  createdAt: "1721181340774",
  updatedAt: "1735684304094",
  partner: {
    id: "<id>",
    name: "<value>",
    email: "Tanner_Goodwin36@yahoo.com",
    image: "https://loremflickr.com/887/2527?lock=8475978227242498",
    payoutsEnabledAt: "<value>",
    country: "Vanuatu",
    totalClicks: 4338.81,
    totalLeads: 9031.25,
    totalConversions: 7982.05,
    totalSales: 4176.67,
    totalSaleAmount: 6883.26,
    totalCommissions: 6180.26,
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | The commission's unique ID on Dub.                                                                     | cm_1JVR7XRCSR0EDBAF39FZ4PMYE                                                                           |
| `type`                                                                                                 | [components.CommissionCreatedEventType](../../models/components/commissioncreatedeventtype.md)         | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `amount`                                                                                               | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `earnings`                                                                                             | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `currency`                                                                                             | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `status`                                                                                               | [components.CommissionCreatedEventStatus](../../models/components/commissioncreatedeventstatus.md)     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `invoiceId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `description`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `quantity`                                                                                             | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `userId`                                                                                               | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The user who created the manual commission.                                                            |                                                                                                        |
| `createdAt`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `updatedAt`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `partner`                                                                                              | [components.CommissionCreatedEventPartner](../../models/components/commissioncreatedeventpartner.md)   | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |
| `customer`                                                                                             | [components.CommissionCreatedEventCustomer](../../models/components/commissioncreatedeventcustomer.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |                                                                                                        |