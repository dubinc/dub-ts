# SaleCreatedEventCustomer

## Example Usage

```typescript
import { SaleCreatedEventCustomer } from "dub/models/components";

let value: SaleCreatedEventCustomer = {
  id: "<id>",
  externalId: "<id>",
  name: "<value>",
  createdAt: "1706648443711",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | The unique identifier of the customer in Dub.                                              |
| `externalId`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | Unique identifier for the customer in the client's app.                                    |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | Name of the customer.                                                                      |
| `email`                                                                                    | *string*                                                                                   | :heavy_minus_sign:                                                                         | Email of the customer.                                                                     |
| `avatar`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | Avatar URL of the customer.                                                                |
| `country`                                                                                  | *string*                                                                                   | :heavy_minus_sign:                                                                         | Country of the customer.                                                                   |
| `createdAt`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | The date the customer was created.                                                         |
| `link`                                                                                     | [components.SaleCreatedEventDataLink](../../models/components/salecreatedeventdatalink.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `partner`                                                                                  | [components.SaleCreatedEventPartner](../../models/components/salecreatedeventpartner.md)   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `discount`                                                                                 | [components.SaleCreatedEventDiscount](../../models/components/salecreatedeventdiscount.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |