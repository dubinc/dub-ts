# CreateCustomerResponseBody

The customer was created.

## Example Usage

```typescript
import { CreateCustomerResponseBody } from "dub/models/operations";

let value: CreateCustomerResponseBody = {
  id: "<id>",
  externalId: "<id>",
  name: "<value>",
  createdAt: "1731898517296",
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
| `link`                                                                                 | [operations.CreateCustomerLink](../../models/operations/createcustomerlink.md)         | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `partner`                                                                              | [operations.CreateCustomerPartner](../../models/operations/createcustomerpartner.md)   | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `discount`                                                                             | [operations.CreateCustomerDiscount](../../models/operations/createcustomerdiscount.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |