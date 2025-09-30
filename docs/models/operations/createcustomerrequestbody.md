# CreateCustomerRequestBody

## Example Usage

```typescript
import { CreateCustomerRequestBody } from "dub/models/operations";

let value: CreateCustomerRequestBody = {
  externalId: "<id>",
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `email`                                                                                                                   | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Email of the customer in the client's app.                                                                                |
| `name`                                                                                                                    | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Name of the customer in the client's app. If not provided, a random name will be generated.                               |
| `avatar`                                                                                                                  | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Avatar URL of the customer in the client's app.                                                                           |
| `externalId`                                                                                                              | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | Unique identifier for the customer in the client's app.                                                                   |
| `stripeCustomerId`                                                                                                        | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | The customer's Stripe customer ID. Useful for attribution recurring sale events to the partner who referred the customer. |