# FolderSchema

## Example Usage

```typescript
import { FolderSchema } from "dub/models/components";

let value: FolderSchema = {
  id: "<id>",
  name: "<value>",
  createdAt: "1715815260178",
  updatedAt: "1739825987991",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | The unique ID of the folder.                                     |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | The name of the folder.                                          |
| `accessLevel`                                                    | [components.AccessLevel](../../models/components/accesslevel.md) | :heavy_minus_sign:                                               | The access level of the folder within the workspace.             |
| `linkCount`                                                      | *number*                                                         | :heavy_minus_sign:                                               | The number of links in the folder.                               |
| `createdAt`                                                      | *string*                                                         | :heavy_check_mark:                                               | The date the folder was created.                                 |
| `updatedAt`                                                      | *string*                                                         | :heavy_check_mark:                                               | The date the folder was updated.                                 |