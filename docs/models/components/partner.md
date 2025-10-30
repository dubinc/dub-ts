# Partner

## Example Usage

```typescript
import { Partner } from "dub/models/components";

let value: Partner = {
  id: "<id>",
  name: "<value>",
  email: "Sammie79@hotmail.com",
  image: "https://picsum.photos/seed/zZ9tKq6TWE/1719/3289",
  payoutsEnabledAt: "<value>",
  country: null,
  totalClicks: 2118.44,
  totalLeads: 1582.91,
  totalConversions: 3164.01,
  totalSales: 8254.1,
  totalSaleAmount: 9649.66,
  totalCommissions: 5477.98,
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
| `groupId`                                                         | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `totalClicks`                                                     | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `totalLeads`                                                      | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `totalConversions`                                                | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `totalSales`                                                      | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `totalSaleAmount`                                                 | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `totalCommissions`                                                | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |