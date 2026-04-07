# BulkUpdateCommissionsRequestBody

## Example Usage

```typescript
import { BulkUpdateCommissionsRequestBody } from "dub/models/operations";

let value: BulkUpdateCommissionsRequestBody = {
  commissionIds: [],
  status: "refunded",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `commissionIds`                                                                                  | *string*[]                                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `status`                                                                                         | [operations.BulkUpdateCommissionsStatus](../../models/operations/bulkupdatecommissionsstatus.md) | :heavy_check_mark:                                                                               | The status to apply to every commission in the batch.                                            |