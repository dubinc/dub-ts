# GetCustomerPartner

## Example Usage

```typescript
import { GetCustomerPartner } from "dub/models/operations";

let value: GetCustomerPartner = {
  id: "<id>",
  name: "<value>",
  email: "Janie65@yahoo.com",
  image: "https://loremflickr.com/2751/2642?lock=3495421641354271",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | The partner's unique ID on Dub.                                   |
| `name`                                                            | *string*                                                          | :heavy_check_mark:                                                | The partner's full legal name.                                    |
| `email`                                                           | *string*                                                          | :heavy_check_mark:                                                | The partner's email address. Should be a unique value across Dub. |
| `image`                                                           | *string*                                                          | :heavy_check_mark:                                                | The partner's avatar image.                                       |