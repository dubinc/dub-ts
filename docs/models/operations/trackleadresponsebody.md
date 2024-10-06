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
    email: "Reilly18@hotmail.com",
    avatar: "https://picsum.photos/seed/ZRRCd/1015/659",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `click`                                                    | [operations.Click](../../models/operations/click.md)       | :heavy_check_mark:                                         | N/A                                                        |
| `customer`                                                 | [operations.Customer](../../models/operations/customer.md) | :heavy_check_mark:                                         | N/A                                                        |