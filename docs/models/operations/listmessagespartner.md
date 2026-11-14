# ListMessagesPartner

The partner in the conversation. `email` is `null` for partners from the network who haven't joined your program.

## Example Usage

```typescript
import { ListMessagesPartner } from "dub/models/operations";

let value: ListMessagesPartner = {
  id: "<id>",
  name: "<value>",
  email: "Alan.Bechtelar@yahoo.com",
  image: "https://loremflickr.com/1629/3796?lock=5765779829326381",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | The partner's unique ID on Dub.                                   |
| `name`                                                            | *string*                                                          | :heavy_check_mark:                                                | The partner's full legal name.                                    |
| `email`                                                           | *string*                                                          | :heavy_check_mark:                                                | The partner's email address. Should be a unique value across Dub. |
| `image`                                                           | *string*                                                          | :heavy_check_mark:                                                | The partner's avatar image.                                       |