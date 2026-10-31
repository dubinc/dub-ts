# CreateMessageResponseBody

The sent message.

## Example Usage

```typescript
import { CreateMessageResponseBody } from "dub/models/operations";

let value: CreateMessageResponseBody = {
  id: "<id>",
  text: "<value>",
  readInApp: "<value>",
  readInEmail: "<value>",
  createdAt: "1720654658395",
  updatedAt: "1735646848801",
  attachments: [
    {
      name: "<value>",
      size: 5316.81,
      type: "<value>",
      url: "https://afraid-tomatillo.com/",
    },
  ],
  sourceType: "partner",
  partner: {
    id: "<id>",
    name: "<value>",
    email: "Palma4@hotmail.com",
    image: "https://loremflickr.com/2345/1222?lock=8383941683732242",
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                              | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `text`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `readInApp`                                                                                                       | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `readInEmail`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `createdAt`                                                                                                       | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `updatedAt`                                                                                                       | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `attachments`                                                                                                     | [operations.CreateMessageAttachments](../../models/operations/createmessageattachments.md)[]                      | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `sourceType`                                                                                                      | [operations.CreateMessageSourceType](../../models/operations/createmessagesourcetype.md)                          | :heavy_check_mark:                                                                                                | Whether your program or the partner sent the message.                                                             |
| `partner`                                                                                                         | [operations.CreateMessagePartner](../../models/operations/createmessagepartner.md)                                | :heavy_check_mark:                                                                                                | The partner in the conversation. `email` is `null` for partners from the network who haven't joined your program. |