# Customer

## Example Usage

```typescript
import { Customer } from "dub/models/components";

let value: Customer = {
  id: "<id>",
  externalId: "<id>",
  name: "<value>",
  createdAt: "<value>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `id`                                                    | *string*                                                | :heavy_check_mark:                                      | The unique identifier of the customer in Dub.           |
| `externalId`                                            | *string*                                                | :heavy_check_mark:                                      | Unique identifier for the customer in the client's app. |
| `name`                                                  | *string*                                                | :heavy_check_mark:                                      | Name of the customer.                                   |
| `email`                                                 | *string*                                                | :heavy_minus_sign:                                      | Email of the customer.                                  |
| `avatar`                                                | *string*                                                | :heavy_minus_sign:                                      | Avatar URL of the customer.                             |
| `createdAt`                                             | *string*                                                | :heavy_check_mark:                                      | The date the customer was created.                      |