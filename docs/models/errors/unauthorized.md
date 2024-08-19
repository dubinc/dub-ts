# Unauthorized

Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.

## Example Usage

```typescript
import { Unauthorized } from "dub/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `error`                                                              | [errors.UnauthorizedError](../../models/errors/unauthorizederror.md) | :heavy_check_mark:                                                   | N/A                                                                  |