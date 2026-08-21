# SourcePartner

The source partner account that was merged away. Its enrollment in this program no longer exists; use `targetPartner.id` instead.

## Example Usage

```typescript
import { SourcePartner } from "dub/models/components";

let value: SourcePartner = {
  id: "<id>",
  tenantId: "<id>",
  email: "Esperanza75@gmail.com",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `id`                                   | *string*                               | :heavy_check_mark:                     | The partner's unique ID on Dub.        |
| `tenantId`                             | *string*                               | :heavy_check_mark:                     | The partner's unique ID in your system |
| `email`                                | *string*                               | :heavy_check_mark:                     | The partner's email address.           |