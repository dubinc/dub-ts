# FolderSchema

## Example Usage

```typescript
import { FolderSchema } from "dub/models/components";

let value: FolderSchema = {
  id: "<id>",
  name: "<value>",
  description: "flustered dramatic bright variable hydrolyse relieve as bend",
  type: "mega",
  createdAt: "1710159476719",
  updatedAt: "1735623576792",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | The unique ID of the folder.                                     |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | The name of the folder.                                          |
| `description`                                                    | *string*                                                         | :heavy_check_mark:                                               | The description of the folder.                                   |
| `type`                                                           | [components.Type](../../models/components/type.md)               | :heavy_check_mark:                                               | N/A                                                              |
| `accessLevel`                                                    | [components.AccessLevel](../../models/components/accesslevel.md) | :heavy_minus_sign:                                               | The access level of the folder within the workspace.             |
| `createdAt`                                                      | *string*                                                         | :heavy_check_mark:                                               | The date the folder was created.                                 |
| `updatedAt`                                                      | *string*                                                         | :heavy_check_mark:                                               | The date the folder was updated.                                 |