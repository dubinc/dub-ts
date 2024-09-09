# RateLimitExceededError

## Example Usage

```typescript
import { RateLimitExceededError } from "dub/models/errors";

let value: RateLimitExceededError = {
  code: "rate_limit_exceeded",
  message: "The requested resource was not found.",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `code`                                                                       | [errors.RateLimitExceededCode](../../models/errors/ratelimitexceededcode.md) | :heavy_check_mark:                                                           | A short code indicating the error code returned.                             | rate_limit_exceeded                                                          |
| `message`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | A human readable explanation of what went wrong.                             | The requested resource was not found.                                        |
| `docUrl`                                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | A link to our documentation with more details about this error code          | https://dub.co/docs/api-reference/errors#rate-limit_exceeded                 |