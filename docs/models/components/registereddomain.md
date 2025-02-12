# RegisteredDomain

The registered domain record.

## Example Usage

```typescript
import { RegisteredDomain } from "dub/models/components";

let value: RegisteredDomain = {
  id: "<id>",
  createdAt: "1735875204083",
  expiresAt: "1764741991978",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `id`                                    | *string*                                | :heavy_check_mark:                      | The ID of the registered domain record. |
| `createdAt`                             | *string*                                | :heavy_check_mark:                      | The date the domain was created.        |
| `expiresAt`                             | *string*                                | :heavy_check_mark:                      | The date the domain expires.            |