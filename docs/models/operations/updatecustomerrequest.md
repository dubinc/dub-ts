# UpdateCustomerRequest

## Example Usage

```typescript
import { UpdateCustomerRequest } from "dub/models/operations";

let value: UpdateCustomerRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                                                                                                                         | Type                                                                                                                                                                                                          | Required                                                                                                                                                                                                      | Description                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                          | *string*                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                            | The unique ID of the customer. You may use either the customer's `id` on Dub (obtained via `/customers` endpoint) or their `externalId` (unique ID within your system, prefixed with `ext_`, e.g. `ext_123`). |
| `includeExpandedFields`                                                                                                                                                                                       | *boolean*                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                            | Whether to include expanded fields on the customer (`link`, `partner`, `discount`).                                                                                                                           |
| `requestBody`                                                                                                                                                                                                 | [operations.UpdateCustomerRequestBody](../../models/operations/updatecustomerrequestbody.md)                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                            | N/A                                                                                                                                                                                                           |