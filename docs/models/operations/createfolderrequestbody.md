# CreateFolderRequestBody

## Example Usage

```typescript
import { CreateFolderRequestBody } from "dub/models/operations";

let value: CreateFolderRequestBody = {
  name: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | The name of the folder.                                          |
| `description`                                                    | *string*                                                         | :heavy_minus_sign:                                               | The description of the folder.                                   |
| `accessLevel`                                                    | [operations.AccessLevel](../../models/operations/accesslevel.md) | :heavy_minus_sign:                                               | The access level of the folder within the workspace.             |