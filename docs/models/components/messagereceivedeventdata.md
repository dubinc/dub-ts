# MessageReceivedEventData

## Example Usage

```typescript
import { MessageReceivedEventData } from "dub/models/components";

let value: MessageReceivedEventData = {
  id: "<id>",
  text: "<value>",
  readInApp: "<value>",
  readInEmail: "<value>",
  createdAt: "1715551095480",
  updatedAt: "1735672989196",
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
    email: null,
    image: "https://loremflickr.com/903/3982?lock=7791735311306908",
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
| `attachments`                                                                                                     | [components.Attachments](../../models/components/attachments.md)[]                                                | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `sourceType`                                                                                                      | [components.SourceType](../../models/components/sourcetype.md)                                                    | :heavy_check_mark:                                                                                                | Whether your program or the partner sent the message.                                                             |
| `partner`                                                                                                         | [components.MessageReceivedEventPartner](../../models/components/messagereceivedeventpartner.md)                  | :heavy_check_mark:                                                                                                | The partner in the conversation. `email` is `null` for partners from the network who haven't joined your program. |