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
    name: "<value>",
    email: "Jennings6@gmail.com",
    avatar: "https://loremflickr.com/53/1338?lock=6681021692555985",
    externalId: "<id>",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `click`                                                    | [operations.Click](../../models/operations/click.md)       | :heavy_check_mark:                                         | N/A                                                        |
| `customer`                                                 | [operations.Customer](../../models/operations/customer.md) | :heavy_check_mark:                                         | N/A                                                        |