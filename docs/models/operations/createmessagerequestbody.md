# CreateMessageRequestBody

## Example Usage

```typescript
import { CreateMessageRequestBody } from "dub/models/operations";

let value: CreateMessageRequestBody = {
  text: "<value>",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `partnerId`                                                                                                         | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The ID of the partner to message. Takes precedence over `tenantId` if both are provided.                            |
| `tenantId`                                                                                                          | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The ID of the partner in your system. If both `partnerId` and `tenantId` are not provided, an error will be thrown. |
| `text`                                                                                                              | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The text of the message.                                                                                            |