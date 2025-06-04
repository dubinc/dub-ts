# CheckDomainStatusResponseBody

## Example Usage

```typescript
import { CheckDomainStatusResponseBody } from "dub/models/operations";

let value: CheckDomainStatusResponseBody = {
  domain: "peppery-thyme.biz",
  available: false,
  price: "732.19",
  premium: true,
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `domain`                                | *string*                                | :heavy_check_mark:                      | The domain name.                        |
| `available`                             | *boolean*                               | :heavy_check_mark:                      | Whether the domain is available.        |
| `price`                                 | *string*                                | :heavy_check_mark:                      | The price description.                  |
| `premium`                               | *boolean*                               | :heavy_check_mark:                      | Whether the domain is a premium domain. |