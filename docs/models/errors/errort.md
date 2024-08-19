# ErrorT

## Example Usage

```typescript
import { ErrorT } from "dub/models/errors";

let value: ErrorT = {
    code: "bad_request",
    message: "The requested resource was not found.",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `code`                                                              | [errors.Code](../../models/errors/code.md)                          | :heavy_check_mark:                                                  | A short code indicating the error code returned.                    | bad_request                                                         |
| `message`                                                           | *string*                                                            | :heavy_check_mark:                                                  | A human readable explanation of what went wrong.                    | The requested resource was not found.                               |
| `docUrl`                                                            | *string*                                                            | :heavy_minus_sign:                                                  | A link to our documentation with more details about this error code | https://dub.co/docs/api-reference/errors#bad-request                |