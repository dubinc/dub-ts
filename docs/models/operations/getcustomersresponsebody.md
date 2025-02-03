# GetCustomersResponseBody

## Example Usage

```typescript
import { GetCustomersResponseBody } from "dub/models/operations";

let value: GetCustomersResponseBody = {
  id: "<id>",
  externalId: "<id>",
  name: "<value>",
  createdAt: "1734448542179",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `id`                                                       | *string*                                                   | :heavy_check_mark:                                         | The unique identifier of the customer in Dub.              |
| `externalId`                                               | *string*                                                   | :heavy_check_mark:                                         | Unique identifier for the customer in the client's app.    |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | Name of the customer.                                      |
| `email`                                                    | *string*                                                   | :heavy_minus_sign:                                         | Email of the customer.                                     |
| `avatar`                                                   | *string*                                                   | :heavy_minus_sign:                                         | Avatar URL of the customer.                                |
| `country`                                                  | *string*                                                   | :heavy_minus_sign:                                         | Country of the customer.                                   |
| `createdAt`                                                | *string*                                                   | :heavy_check_mark:                                         | The date the customer was created.                         |
| `link`                                                     | [operations.Link](../../models/operations/link.md)         | :heavy_minus_sign:                                         | N/A                                                        |
| `partner`                                                  | [operations.Partner](../../models/operations/partner.md)   | :heavy_minus_sign:                                         | N/A                                                        |
| `discount`                                                 | [operations.Discount](../../models/operations/discount.md) | :heavy_minus_sign:                                         | N/A                                                        |