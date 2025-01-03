# GetCustomerRequest

## Example Usage

```typescript
import { GetCustomerRequest } from "dub/models/operations";

let value: GetCustomerRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `id`                                                                                | *string*                                                                            | :heavy_check_mark:                                                                  | The unique identifier of the customer in Dub.                                       |
| `includeExpandedFields`                                                             | *boolean*                                                                           | :heavy_minus_sign:                                                                  | Whether to include expanded fields on the customer (`link`, `partner`, `discount`). |