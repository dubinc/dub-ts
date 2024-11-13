# UpdateCustomerRequestBody

## Example Usage

```typescript
import { UpdateCustomerRequestBody } from "dub/models/operations";

let value: UpdateCustomerRequestBody = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `email`                                                                                     | *string*                                                                                    | :heavy_minus_sign:                                                                          | Email of the customer in the client's app.                                                  |
| `name`                                                                                      | *string*                                                                                    | :heavy_minus_sign:                                                                          | Name of the customer in the client's app. If not provided, a random name will be generated. |
| `avatar`                                                                                    | *string*                                                                                    | :heavy_minus_sign:                                                                          | Avatar URL of the customer in the client's app.                                             |
| `externalId`                                                                                | *string*                                                                                    | :heavy_minus_sign:                                                                          | Unique identifier for the customer in the client's app.                                     |