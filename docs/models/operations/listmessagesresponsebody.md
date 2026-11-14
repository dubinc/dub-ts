# ListMessagesResponseBody

## Example Usage

```typescript
import { ListMessagesResponseBody } from "dub/models/operations";

let value: ListMessagesResponseBody = {
  id: "<id>",
  text: "<value>",
  readInApp: "<value>",
  readInEmail: "<value>",
  createdAt: "1719227090306",
  updatedAt: "1735685201163",
  attachments: [
    {
      name: "<value>",
      size: 7564.86,
      type: "<value>",
      url: "https://improbable-atrium.biz",
    },
  ],
  sourceType: "partner",
  partner: {
    id: "<id>",
    name: "<value>",
    email: "Benny.Schaefer@yahoo.com",
    image: "https://loremflickr.com/2549/1552?lock=7717321247434791",
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
| `attachments`                                                                                                     | [operations.Attachments](../../models/operations/attachments.md)[]                                                | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `sourceType`                                                                                                      | [operations.ListMessagesSourceType](../../models/operations/listmessagessourcetype.md)                            | :heavy_check_mark:                                                                                                | Whether your program or the partner sent the message.                                                             |
| `partner`                                                                                                         | [operations.ListMessagesPartner](../../models/operations/listmessagespartner.md)                                  | :heavy_check_mark:                                                                                                | The partner in the conversation. `email` is `null` for partners from the network who haven't joined your program. |