# RequestBody1

## Example Usage

```typescript
import { RequestBody1 } from "dub/models/operations";

let value: RequestBody1 = {
  type: "custom",
  partnerId: "<id>",
  amount: 9.57,
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `type`                                              | *"custom"*                                          | :heavy_check_mark:                                  | N/A                                                 |
| `partnerId`                                         | *string*                                            | :heavy_check_mark:                                  | The ID of the partner to create the commission for. |
| `amount`                                            | *number*                                            | :heavy_check_mark:                                  | The commission amount in cents.                     |
| `date`                                              | *string*                                            | :heavy_minus_sign:                                  | If not provided, the current date will be used.     |
| `description`                                       | *string*                                            | :heavy_minus_sign:                                  | The description of the commission.                  |