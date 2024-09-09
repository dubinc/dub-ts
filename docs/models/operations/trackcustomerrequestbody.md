# TrackCustomerRequestBody

## Example Usage

```typescript
import { TrackCustomerRequestBody } from "dub/models/operations";

let value: TrackCustomerRequestBody = {
  customerId: "<value>",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `customerId`                                                                                                      | *string*                                                                                                          | :heavy_check_mark:                                                                                                | This is the unique identifier for the customer in the client's app. This is used to track the customer's journey. |
| `customerName`                                                                                                    | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Name of the customer in the client's app.                                                                         |
| `customerEmail`                                                                                                   | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Email of the customer in the client's app.                                                                        |
| `customerAvatar`                                                                                                  | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Avatar of the customer in the client's app.                                                                       |