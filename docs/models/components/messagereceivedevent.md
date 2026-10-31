# MessageReceivedEvent

Triggered when a partner sends a message to a program.

## Example Usage

```typescript
import { MessageReceivedEvent } from "dub/models/components";

let value: MessageReceivedEvent = {
  id: "<id>",
  event: "message.received",
  createdAt: "1707737768691",
  data: {
    id: "<id>",
    text: "<value>",
    readInApp: null,
    readInEmail: "<value>",
    createdAt: "1725915170102",
    updatedAt: "1735625782119",
    attachments: [],
    sourceType: "program",
    partner: {
      id: "<id>",
      name: "<value>",
      email: null,
      image: "https://loremflickr.com/903/3982?lock=7791735311306908",
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `event`                                                                                      | [components.MessageReceivedEventEvent](../../models/components/messagereceivedeventevent.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `createdAt`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `data`                                                                                       | [components.MessageReceivedEventData](../../models/components/messagereceivedeventdata.md)   | :heavy_check_mark:                                                                           | N/A                                                                                          |