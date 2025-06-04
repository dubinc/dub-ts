# CheckDomainStatusRequest

## Example Usage

```typescript
import { CheckDomainStatusRequest } from "dub/models/operations";

let value: CheckDomainStatusRequest = {
  domains: [],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `domains`                                                     | *operations.Domains*                                          | :heavy_check_mark:                                            | The domains to search. We only support .link domains for now. |