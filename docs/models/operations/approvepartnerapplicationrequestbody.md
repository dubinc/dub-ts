# ApprovePartnerApplicationRequestBody

## Example Usage

```typescript
import { ApprovePartnerApplicationRequestBody } from "dub/models/operations";

let value: ApprovePartnerApplicationRequestBody = {
  partnerId: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `partnerId`                                                                                                                                                                              | *string*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                       | The ID of the partner to approve.                                                                                                                                                        |
| `groupId`                                                                                                                                                                                | *string*                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                       | The ID of the group to assign the partner to. If not provided, the partner will be assigned to the group they applied to, or the program's default group if no application group is set. |