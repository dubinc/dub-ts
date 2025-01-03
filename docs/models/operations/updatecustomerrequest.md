# UpdateCustomerRequest

## Example Usage

```typescript
import { UpdateCustomerRequest } from "dub/models/operations";

let value: UpdateCustomerRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | The unique identifier of the customer in Dub.                                                |
| `includeExpandedFields`                                                                      | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Whether to include expanded fields on the customer (`link`, `partner`, `discount`).          |
| `requestBody`                                                                                | [operations.UpdateCustomerRequestBody](../../models/operations/updatecustomerrequestbody.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |