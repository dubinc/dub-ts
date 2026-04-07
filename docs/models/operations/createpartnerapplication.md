# CreatePartnerApplication

Linked program application, including review outcome when applicable.

## Example Usage

```typescript
import { CreatePartnerApplication } from "dub/models/operations";

let value: CreatePartnerApplication = {
  rejectionReason: "needsMoreDetail",
  rejectionNote: "<value>",
  reviewedAt: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `rejectionReason`                                                                                  | [operations.CreatePartnerRejectionReason](../../models/operations/createpartnerrejectionreason.md) | :heavy_check_mark:                                                                                 | Preset reason when the application was rejected.                                                   |
| `rejectionNote`                                                                                    | *string*                                                                                           | :heavy_check_mark:                                                                                 | Free-form note when the application was rejected.                                                  |
| `reviewedAt`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | When the application was approved or rejected.                                                     |