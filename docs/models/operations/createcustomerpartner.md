# CreateCustomerPartner

## Example Usage

```typescript
import { CreateCustomerPartner } from "dub/models/operations";

let value: CreateCustomerPartner = {
  id: "<id>",
  name: "<value>",
  email: "Gladys9@hotmail.com",
  image: "https://picsum.photos/seed/LBPnGAZ/3414/305",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | The partner's unique ID on Dub.                                   |
| `name`                                                            | *string*                                                          | :heavy_check_mark:                                                | The partner's full legal name.                                    |
| `email`                                                           | *string*                                                          | :heavy_check_mark:                                                | The partner's email address. Should be a unique value across Dub. |
| `image`                                                           | *string*                                                          | :heavy_check_mark:                                                | The partner's avatar image.                                       |