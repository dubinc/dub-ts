# LinkErrorSchema

## Example Usage

```typescript
import { LinkErrorSchema } from "dub/models/components";

let value: LinkErrorSchema = {
  link: "<value>",
  error: "<value>",
  code: "unauthorized",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `link`                                             | *any*                                              | :heavy_check_mark:                                 | The link that caused the error.                    |
| `error`                                            | *string*                                           | :heavy_check_mark:                                 | The error message.                                 |
| `code`                                             | [components.Code](../../models/components/code.md) | :heavy_check_mark:                                 | The error code.                                    |