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
    email: "Eunice.Olson@hotmail.com",
    avatar: "https://picsum.photos/seed/1bEu1mCZc/3042/1302",
    externalId: "<id>",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `click`                                                    | [operations.Click](../../models/operations/click.md)       | :heavy_check_mark:                                         | N/A                                                        |
| `customer`                                                 | [operations.Customer](../../models/operations/customer.md) | :heavy_check_mark:                                         | N/A                                                        |