# GetCustomerPartner

## Example Usage

```typescript
import { GetCustomerPartner } from "dub/models/operations";

let value: GetCustomerPartner = {
  id: "<id>",
  name: "<value>",
  email: "Karine_Gerlach@gmail.com",
  image: "https://picsum.photos/seed/goJLrf2s/3402/1144",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | The partner's unique ID on Dub.                                   |
| `name`                                                            | *string*                                                          | :heavy_check_mark:                                                | The partner's full legal name.                                    |
| `email`                                                           | *string*                                                          | :heavy_check_mark:                                                | The partner's email address. Should be a unique value across Dub. |
| `image`                                                           | *string*                                                          | :heavy_check_mark:                                                | The partner's avatar image.                                       |