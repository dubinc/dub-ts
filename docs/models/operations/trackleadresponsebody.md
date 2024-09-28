# TrackLeadResponseBody

A lead was tracked.

## Example Usage

```typescript
import { TrackLeadResponseBody } from "dub/models/operations";

let value: TrackLeadResponseBody = {
  click: {
    id: "<id>",
  },
  customer: {
    id: "<id>",
    name: "<value>",
    email: "Brenden.Stamm@gmail.com",
    avatar: "https://picsum.photos/seed/yIFLzOTHm/2518/2345",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `click`                                                    | [operations.Click](../../models/operations/click.md)       | :heavy_check_mark:                                         | N/A                                                        |
| `customer`                                                 | [operations.Customer](../../models/operations/customer.md) | :heavy_check_mark:                                         | N/A                                                        |