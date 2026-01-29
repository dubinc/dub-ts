# Files

## Example Usage

```typescript
import { Files } from "dub/models/operations";

let value: Files = {
  url: "https://unlawful-nudge.net/",
  fileName: "example.file",
  size: 4823.65,
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `url`                         | *string*                      | :heavy_check_mark:            | The URL of the uploaded file. |
| `fileName`                    | *string*                      | :heavy_check_mark:            | The original file name.       |
| `size`                        | *number*                      | :heavy_check_mark:            | The file size in bytes.       |