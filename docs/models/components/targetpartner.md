# TargetPartner

The target partner account that the source account was merged into.

## Example Usage

```typescript
import { TargetPartner } from "dub/models/components";

let value: TargetPartner = {
  id: "<id>",
  tenantId: "<id>",
  email: "Hallie_Grady@hotmail.com",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `id`                                   | *string*                               | :heavy_check_mark:                     | The partner's unique ID on Dub.        |
| `tenantId`                             | *string*                               | :heavy_check_mark:                     | The partner's unique ID in your system |
| `email`                                | *string*                               | :heavy_check_mark:                     | The partner's email address.           |