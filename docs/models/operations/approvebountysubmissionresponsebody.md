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
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `bountyId`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `partnerId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `description`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `urls`                                                                                               | *string*[]                                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `files`                                                                                              | [operations.ApproveBountySubmissionFiles](../../models/operations/approvebountysubmissionfiles.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `status`                                                                                             | [operations.ApproveBountySubmissionStatus](../../models/operations/approvebountysubmissionstatus.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `performanceCount`                                                                                   | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `createdAt`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `completedAt`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `reviewedAt`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `rejectionReason`                                                                                    | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `rejectionNote`                                                                                      | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |