# CommissionCreatedEventPartner

## Example Usage

```typescript
import { CommissionCreatedEventPartner } from "dub/models/components";

let value: CommissionCreatedEventPartner = {
  id: "<id>",
  name: "<value>",
  email: "Skylar.Lemke3@yahoo.com",
  image: "https://picsum.photos/seed/0Wf4rtPCM/393/115",
  payoutsEnabledAt: "<value>",
  country: "Bolivia",
  totalClicks: 2875.88,
  totalLeads: 3001.13,
  totalConversions: 6496.93,
  totalSales: 3562.05,
  totalSaleAmount: 4894.44,
  totalCommissions: 1594.37,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | The partner's unique ID on Dub.                                   |
| `name`                                                            | *string*                                                          | :heavy_check_mark:                                                | The partner's full legal name.                                    |
| `email`                                                           | *string*                                                          | :heavy_check_mark:                                                | The partner's email address. Should be a unique value across Dub. |
| `image`                                                           | *string*                                                          | :heavy_check_mark:                                                | The partner's avatar image.                                       |
| `payoutsEnabledAt`                                                | *string*                                                          | :heavy_check_mark:                                                | The date when the partner enabled payouts.                        |
| `country`                                                         | *string*                                                          | :heavy_check_mark:                                                | The partner's country (required for tax purposes).                |
| `totalClicks`                                                     | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `totalLeads`                                                      | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `totalConversions`                                                | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `totalSales`                                                      | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `totalSaleAmount`                                                 | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `totalCommissions`                                                | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |