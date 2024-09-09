# TrackSaleResponseBody

A sale was tracked.

## Example Usage

```typescript
import { TrackSaleResponseBody } from "dub/models/operations";

let value: TrackSaleResponseBody = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    name: "<value>",
    email: "Brendon_OConnell28@hotmail.com",
    avatar: "https://loremflickr.com/640/480",
  },
  sale: {
    amount: 2647.3,
    currency: "Cuban Peso",
    paymentProcessor: "<value>",
    invoiceId: "<value>",
    metadata: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `eventName`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `customer`                                                                   | [operations.TrackSaleCustomer](../../models/operations/tracksalecustomer.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `sale`                                                                       | [operations.Sale](../../models/operations/sale.md)                           | :heavy_check_mark:                                                           | N/A                                                                          |