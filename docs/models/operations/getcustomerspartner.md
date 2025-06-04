# GetCustomersPartner

## Example Usage

```typescript
import { GetCustomersPartner } from "dub/models/operations";

let value: GetCustomersPartner = {
  id: "<id>",
  name: "<value>",
  email: "Tobin_Leffler-Hoeger75@gmail.com",
  image: "https://loremflickr.com/837/765?lock=5173319329109691",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | The partner's unique ID on Dub.                                   |
| `name`                                                            | *string*                                                          | :heavy_check_mark:                                                | The partner's full legal name.                                    |
| `email`                                                           | *string*                                                          | :heavy_check_mark:                                                | The partner's email address. Should be a unique value across Dub. |
| `image`                                                           | *string*                                                          | :heavy_check_mark:                                                | The partner's avatar image.                                       |