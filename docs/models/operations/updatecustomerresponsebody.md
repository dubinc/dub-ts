# UpdateCustomerResponseBody

The customer was updated.

## Example Usage

```typescript
import { UpdateCustomerResponseBody } from "dub/models/operations";

let value: UpdateCustomerResponseBody = {
  id: "<id>",
  externalId: "<id>",
  name: "<value>",
  createdAt: "1707950081257",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | The unique identifier of the customer in Dub.                                          |
| `externalId`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | Unique identifier for the customer in the client's app.                                |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | Name of the customer.                                                                  |
| `email`                                                                                | *string*                                                                               | :heavy_minus_sign:                                                                     | Email of the customer.                                                                 |
| `avatar`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | Avatar URL of the customer.                                                            |
| `country`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | Country of the customer.                                                               |
| `createdAt`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | The date the customer was created.                                                     |
| `link`                                                                                 | [operations.UpdateCustomerLink](../../models/operations/updatecustomerlink.md)         | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `partner`                                                                              | [operations.UpdateCustomerPartner](../../models/operations/updatecustomerpartner.md)   | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `discount`                                                                             | [operations.UpdateCustomerDiscount](../../models/operations/updatecustomerdiscount.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |