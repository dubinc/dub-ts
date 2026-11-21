# CreateMessageAttachments

## Example Usage

```typescript
import { CreateMessageAttachments } from "dub/models/operations";

let value: CreateMessageAttachments = {
  name: "<value>",
  size: 2374.83,
  type: "<value>",
  url: "https://foolhardy-exhaust.name/",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `name`                                     | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `size`                                     | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `type`                                     | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `url`                                      | *string*                                   | :heavy_check_mark:                         | A download link that expires after 1 hour. |