# DeleteCustomerRequest

## Example Usage

```typescript
import { DeleteCustomerRequest } from "dub/models/operations";

let value: DeleteCustomerRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                                         | Type                                                                                                                                                                                                          | Required                                                                                                                                                                                                      | Description                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                          | *string*                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                            | The unique ID of the customer. You may use either the customer's `id` on Dub (obtained via `/customers` endpoint) or their `externalId` (unique ID within your system, prefixed with `ext_`, e.g. `ext_123`). |