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
    email: "Lucius97@hotmail.com",
    avatar: "https://loremflickr.com/512/1542?lock=1642658364555166",
  },
  sale: {
    amount: 7042.84,
    currency: "Tunisian Dinar",
    paymentProcessor: "<value>",
    invoiceId: "<id>",
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