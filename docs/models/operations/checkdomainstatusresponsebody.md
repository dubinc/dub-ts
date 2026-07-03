# CheckDomainStatusResponseBody

## Example Usage

```typescript
import { CheckDomainStatusResponseBody } from "dub/models/operations";

let value: CheckDomainStatusResponseBody = {
  domain: "peppery-thyme.biz",
  available: false,
  premium: false,
  prices: {
    registration: 2892.24,
    renewal: 7126.21,
  },
  price: "340.94",
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `domain`                                                                                                                                                   | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | The domain name.                                                                                                                                           |
| `available`                                                                                                                                                | *boolean*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                         | Whether the domain is available.                                                                                                                           |
| `premium`                                                                                                                                                  | *boolean*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                         | Whether the domain is a premium domain.                                                                                                                    |
| `prices`                                                                                                                                                   | [operations.Prices](../../models/operations/prices.md)                                                                                                     | :heavy_check_mark:                                                                                                                                         | Price details for the domain. Will be null if the domain is not available.                                                                                 |
| ~~`price`~~                                                                                                                                                | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: Use `prices` instead. |