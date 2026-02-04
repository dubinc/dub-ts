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
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the bounty submission                                                                    |
| `bountyId`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the bounty                                                                               |
| `partnerId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the partner                                                                              |
| `description`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The description of the submission                                                                  |
| `urls`                                                                                             | *string*[]                                                                                         | :heavy_check_mark:                                                                                 | The URLs submitted for the submission                                                              |
| `files`                                                                                            | [operations.RejectBountySubmissionFiles](../../models/operations/rejectbountysubmissionfiles.md)[] | :heavy_check_mark:                                                                                 | The files uploaded for the submission                                                              |
| `status`                                                                                           | [operations.RejectBountySubmissionStatus](../../models/operations/rejectbountysubmissionstatus.md) | :heavy_check_mark:                                                                                 | The status of the submission                                                                       |
| `performanceCount`                                                                                 | *number*                                                                                           | :heavy_check_mark:                                                                                 | The performance count of the submission                                                            |
| `createdAt`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | The date and time the submission was created                                                       |
| `completedAt`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The date and time the submission was completed                                                     |
| `reviewedAt`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | The date and time the submission was reviewed                                                      |
| `rejectionReason`                                                                                  | *string*                                                                                           | :heavy_check_mark:                                                                                 | The reason for rejecting the submission                                                            |
| `rejectionNote`                                                                                    | *string*                                                                                           | :heavy_check_mark:                                                                                 | The note for rejecting the submission                                                              |