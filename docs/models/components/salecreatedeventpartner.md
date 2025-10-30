# SaleCreatedEventPartner

## Example Usage

```typescript
import { SaleCreatedEventPartner } from "dub/models/components";

let value: SaleCreatedEventPartner = {
  id: "<id>",
  name: "<value>",
  email: "Maxwell.Torphy@yahoo.com",
  image: "https://loremflickr.com/1144/1696?lock=7389602776434991",
  payoutsEnabledAt: "<value>",
  country: "Sint Maarten",
  totalClicks: 345.79,
  totalLeads: 2567.08,
  totalConversions: 748.7,
  totalSales: 9041.34,
  totalSaleAmount: 3543.1,
  totalCommissions: 9044.32,
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