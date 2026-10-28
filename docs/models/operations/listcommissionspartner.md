# ListCommissionsPartner

## Example Usage

```typescript
import { ListCommissionsPartner } from "dub/models/operations";

let value: ListCommissionsPartner = {
  id: "<id>",
  name: "<value>",
  email: "Dell_Moore47@gmail.com",
  image: "https://loremflickr.com/3288/311?lock=5188501535538451",
  payoutsEnabledAt: "<value>",
  networkStatus: "rejected",
  country: "Czechia",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | The partner's unique ID on Dub.                                                                    |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | The partner's full legal name.                                                                     |
| `email`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | The partner's email address. Should be a unique value across Dub.                                  |
| `image`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | The partner's avatar image.                                                                        |
| `payoutsEnabledAt`                                                                                 | *string*                                                                                           | :heavy_check_mark:                                                                                 | The date when the partner enabled payouts.                                                         |
| `networkStatus`                                                                                    | [operations.ListCommissionsNetworkStatus](../../models/operations/listcommissionsnetworkstatus.md) | :heavy_check_mark:                                                                                 | The partner's network status on Dub.                                                               |
| `country`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | The partner's country (required for tax purposes).                                                 |
| `groupId`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The partner's group ID on Dub.                                                                     |