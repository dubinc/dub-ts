# LeadCreatedEventCustomer

## Example Usage

```typescript
import { LeadCreatedEventCustomer } from "dub/models/components";

let value: LeadCreatedEventCustomer = {
  id: "<id>",
  externalId: "<id>",
  name: "<value>",
  createdAt: "1720265470610",
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
| `link`                                                                                     | [components.LeadCreatedEventDataLink](../../models/components/leadcreatedeventdatalink.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `partner`                                                                                  | [components.LeadCreatedEventPartner](../../models/components/leadcreatedeventpartner.md)   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `discount`                                                                                 | [components.LeadCreatedEventDiscount](../../models/components/leadcreatedeventdiscount.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |