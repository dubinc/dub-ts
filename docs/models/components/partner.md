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