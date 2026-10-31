# Attachments

## Example Usage

```typescript
import { Attachments } from "dub/models/components";

let value: Attachments = {
  name: "<value>",
  size: 7564.86,
  type: "<value>",
  url: "https://improbable-atrium.biz",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `name`                                     | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `size`                                     | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `type`                                     | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `url`                                      | *string*                                   | :heavy_check_mark:                         | A download link that expires after 1 hour. |