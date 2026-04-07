# Application

Linked program application, including review outcome when applicable.

## Example Usage

```typescript
import { Application } from "dub/models/operations";

let value: Application = {
  rejectionReason: "notTheRightFit",
  rejectionNote: "<value>",
  reviewedAt: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `rejectionReason`                                                                                | [operations.ListPartnersRejectionReason](../../models/operations/listpartnersrejectionreason.md) | :heavy_check_mark:                                                                               | Preset reason when the application was rejected.                                                 |
| `rejectionNote`                                                                                  | *string*                                                                                         | :heavy_check_mark:                                                                               | Free-form note when the application was rejected.                                                |
| `reviewedAt`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | When the application was approved or rejected.                                                   |