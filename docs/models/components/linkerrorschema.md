# LinkErrorSchema

## Example Usage

```typescript
import { LinkErrorSchema } from "dub/models/components";

let value: LinkErrorSchema = {
  error: "<value>",
  code: "not_found",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `link`                                             | *any*                                              | :heavy_minus_sign:                                 | The link that caused the error.                    |
| `error`                                            | *string*                                           | :heavy_check_mark:                                 | The error message.                                 |
| `code`                                             | [components.Code](../../models/components/code.md) | :heavy_check_mark:                                 | The error code.                                    |