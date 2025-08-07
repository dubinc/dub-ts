# RegisteredDomain

The registered domain record.

## Example Usage

```typescript
import { RegisteredDomain } from "dub/models/components";

let value: RegisteredDomain = {
  id: "<id>",
  autoRenewalDisabledAt: "<value>",
  createdAt: "1712810186636",
  expiresAt: "1765280780027",
  renewalFee: 7443.9,
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `id`                                        | *string*                                    | :heavy_check_mark:                          | The ID of the registered domain record.     |
| `autoRenewalDisabledAt`                     | *string*                                    | :heavy_check_mark:                          | The date the domain auto-renew is disabled. |
| `createdAt`                                 | *string*                                    | :heavy_check_mark:                          | The date the domain was created.            |
| `expiresAt`                                 | *string*                                    | :heavy_check_mark:                          | The date the domain expires.                |
| `renewalFee`                                | *number*                                    | :heavy_check_mark:                          | The fee to renew the domain.                |