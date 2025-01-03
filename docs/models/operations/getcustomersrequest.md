# GetCustomersRequest

## Example Usage

```typescript
import { GetCustomersRequest } from "dub/models/operations";

let value: GetCustomersRequest = {};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `email`                                                                                                     | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | A case-sensitive filter on the list based on the customer's `email` field. The value must be a string.      |
| `externalId`                                                                                                | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | A case-sensitive filter on the list based on the customer's `externalId` field. The value must be a string. |
| `includeExpandedFields`                                                                                     | *boolean*                                                                                                   | :heavy_minus_sign:                                                                                          | Whether to include expanded fields on the customer (`link`, `partner`, `discount`).                         |