# MessageReceivedEventPartner

The partner in the conversation. `email` is `null` for partners from the network who haven't joined your program.

## Example Usage

```typescript
import { MessageReceivedEventPartner } from "dub/models/components";

let value: MessageReceivedEventPartner = {
  id: "<id>",
  name: "<value>",
  email: "Hayden87@hotmail.com",
  image: "https://picsum.photos/seed/oX9bs2W2Q/2752/3309",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | The partner's unique ID on Dub.                                   |
| `name`                                                            | *string*                                                          | :heavy_check_mark:                                                | The partner's full legal name.                                    |
| `email`                                                           | *string*                                                          | :heavy_check_mark:                                                | The partner's email address. Should be a unique value across Dub. |
| `image`                                                           | *string*                                                          | :heavy_check_mark:                                                | The partner's avatar image.                                       |