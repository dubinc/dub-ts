# RegisterDomainRequestBody

## Example Usage

```typescript
import { RegisterDomainRequestBody } from "dub/models/operations";

let value: RegisterDomainRequestBody = {
  domain: "acme.link",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `domain`                                                    | *string*                                                    | :heavy_check_mark:                                          | The domain to claim. We only support .link domains for now. | acme.link                                                   |