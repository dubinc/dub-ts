# ApproveBountySubmissionFiles

## Example Usage

```typescript
import { ApproveBountySubmissionFiles } from "dub/models/operations";

let value: ApproveBountySubmissionFiles = {
  url: "https://fantastic-airman.net",
  fileName: "example.file",
  size: 1459.83,
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `url`                         | *string*                      | :heavy_check_mark:            | The URL of the uploaded file. |
| `fileName`                    | *string*                      | :heavy_check_mark:            | The original file name.       |
| `size`                        | *number*                      | :heavy_check_mark:            | The file size in bytes.       |