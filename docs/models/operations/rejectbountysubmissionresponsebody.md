# RejectBountySubmissionResponseBody

The rejected bounty submission.

## Example Usage

```typescript
import { RejectBountySubmissionResponseBody } from "dub/models/operations";

let value: RejectBountySubmissionResponseBody = {
  id: "<id>",
  bountyId: "<id>",
  partnerId: "<id>",
  description: "opposite uncork before any boohoo bah",
  urls: null,
  files: [],
  status: "rejected",
  performanceCount: 1189.56,
  createdAt: "1730283071757",
  completedAt: "<value>",
  reviewedAt: "<value>",
  rejectionReason: "<value>",
  rejectionNote: null,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `bountyId`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `partnerId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `description`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `urls`                                                                                             | *string*[]                                                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `files`                                                                                            | [operations.RejectBountySubmissionFiles](../../models/operations/rejectbountysubmissionfiles.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | [operations.RejectBountySubmissionStatus](../../models/operations/rejectbountysubmissionstatus.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `performanceCount`                                                                                 | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `createdAt`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `completedAt`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `reviewedAt`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `rejectionReason`                                                                                  | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `rejectionNote`                                                                                    | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |