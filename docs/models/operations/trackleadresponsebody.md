# TrackLeadResponseBody

A lead was tracked.

## Example Usage

```typescript
import { TrackLeadResponseBody } from "dub/models/operations";

let value: TrackLeadResponseBody = {
  click: {
    id: "<id>",
  },
  link: {
    id: "<id>",
    domain: "ignorant-outrun.info",
    key: "<key>",
    shortLink: "https://normal-innovation.org",
    url: "https://spirited-chow.com/",
    partnerId: "<id>",
    programId: "<id>",
    tenantId: "<id>",
    externalId: "<id>",
  },
  customer: {
    name: "<value>",
    email: "Emmy8@hotmail.com",
    avatar: "https://loremflickr.com/2520/643?lock=1623178356501000",
    externalId: "<id>",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `click`                                                    | [operations.Click](../../models/operations/click.md)       | :heavy_check_mark:                                         | N/A                                                        |
| `link`                                                     | [operations.Link](../../models/operations/link.md)         | :heavy_check_mark:                                         | N/A                                                        |
| `customer`                                                 | [operations.Customer](../../models/operations/customer.md) | :heavy_check_mark:                                         | N/A                                                        |