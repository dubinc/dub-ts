# UpdateCustomerPartner

## Example Usage

```typescript
import { UpdateCustomerPartner } from "dub/models/operations";

let value: UpdateCustomerPartner = {
  id: "<id>",
  name: "<value>",
  email: "Nikita.Gerlach@yahoo.com",
  image: "https://picsum.photos/seed/zpoUQ0OZL/3431/1326",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | The partner's unique ID on Dub.                                   |
| `name`                                                            | *string*                                                          | :heavy_check_mark:                                                | The partner's full legal name.                                    |
| `email`                                                           | *string*                                                          | :heavy_check_mark:                                                | The partner's email address. Should be a unique value across Dub. |
| `image`                                                           | *string*                                                          | :heavy_check_mark:                                                | The partner's avatar image.                                       |