# SaleEventCustomer

## Example Usage

```typescript
import { SaleEventCustomer } from "dub/models/components";

let value: SaleEventCustomer = {
  id: "<id>",
  externalId: "<id>",
  name: "<value>",
  createdAt: "1722913726738",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The unique identifier of the customer in Dub.                                        |
| `externalId`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | Unique identifier for the customer in the client's app.                              |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | Name of the customer.                                                                |
| `email`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | Email of the customer.                                                               |
| `avatar`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | Avatar URL of the customer.                                                          |
| `country`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | Country of the customer.                                                             |
| `createdAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | The date the customer was created.                                                   |
| `link`                                                                               | [components.SaleEventCustomerLink](../../models/components/saleeventcustomerlink.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `partner`                                                                            | [components.SaleEventPartner](../../models/components/saleeventpartner.md)           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `discount`                                                                           | [components.SaleEventDiscount](../../models/components/saleeventdiscount.md)         | :heavy_minus_sign:                                                                   | N/A                                                                                  |