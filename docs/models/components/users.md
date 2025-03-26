# Users

## Example Usage

```typescript
import { Users } from "dub/models/components";

let value: Users = {
  role: "member",
  defaultFolderId: "<id>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `role`                                                      | [components.Role](../../models/components/role.md)          | :heavy_check_mark:                                          | The role of the authenticated user in the workspace.        |
| `defaultFolderId`                                           | *string*                                                    | :heavy_check_mark:                                          | The ID of the default folder for the user in the workspace. |