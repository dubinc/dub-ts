# UnauthorizedError

## Example Usage

```typescript
import { UnauthorizedError } from "dub/models/errors";

let value: UnauthorizedError = {
  code: "unauthorized",
  message: "The requested resource was not found.",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `code`                                                              | [errors.UnauthorizedCode](../../models/errors/unauthorizedcode.md)  | :heavy_check_mark:                                                  | A short code indicating the error code returned.                    | unauthorized                                                        |
| `message`                                                           | *string*                                                            | :heavy_check_mark:                                                  | A human readable explanation of what went wrong.                    | The requested resource was not found.                               |
| `docUrl`                                                            | *string*                                                            | :heavy_minus_sign:                                                  | A link to our documentation with more details about this error code | https://dub.co/docs/api-reference/errors#unauthorized               |