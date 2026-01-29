# ApproveBountySubmissionResponseBody

The approved bounty submission.

## Example Usage

```typescript
import { ApproveBountySubmissionResponseBody } from "dub/models/operations";

let value: ApproveBountySubmissionResponseBody = {
  id: "<id>",
  bountyId: "<id>",
  partnerId: "<id>",
  description: "er drat next dependent and onto hmph except",
  urls: [],
  files: [],
  status: "submitted",
  performanceCount: 2193.4,
  createdAt: "1704931115369",
  completedAt: null,
  reviewedAt: "<value>",
  rejectionReason: "<value>",
  rejectionNote: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the bounty submission                                                                      |
| `bountyId`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the bounty                                                                                 |
| `partnerId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the partner                                                                                |
| `description`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The description of the submission                                                                    |
| `urls`                                                                                               | *string*[]                                                                                           | :heavy_check_mark:                                                                                   | The URLs submitted for the submission                                                                |
| `files`                                                                                              | [operations.ApproveBountySubmissionFiles](../../models/operations/approvebountysubmissionfiles.md)[] | :heavy_check_mark:                                                                                   | The files uploaded for the submission                                                                |
| `status`                                                                                             | [operations.ApproveBountySubmissionStatus](../../models/operations/approvebountysubmissionstatus.md) | :heavy_check_mark:                                                                                   | The status of the submission                                                                         |
| `performanceCount`                                                                                   | *number*                                                                                             | :heavy_check_mark:                                                                                   | The performance count of the submission                                                              |
| `createdAt`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | The date and time the submission was created                                                         |
| `completedAt`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The date and time the submission was completed                                                       |
| `reviewedAt`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | The date and time the submission was reviewed                                                        |
| `rejectionReason`                                                                                    | *string*                                                                                             | :heavy_check_mark:                                                                                   | The reason for rejecting the submission                                                              |
| `rejectionNote`                                                                                      | *string*                                                                                             | :heavy_check_mark:                                                                                   | The note for rejecting the submission                                                                |