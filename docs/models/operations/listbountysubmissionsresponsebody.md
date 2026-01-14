# ListBountySubmissionsResponseBody

## Example Usage

```typescript
import { ListBountySubmissionsResponseBody } from "dub/models/operations";

let value: ListBountySubmissionsResponseBody = {
  id: "<id>",
  bountyId: "<id>",
  partnerId: "<id>",
  description: "the under playfully",
  urls: null,
  files: [],
  status: "submitted",
  performanceCount: 7681.96,
  createdAt: "1706806913263",
  completedAt: "<value>",
  reviewedAt: "<value>",
  rejectionReason: "<value>",
  rejectionNote: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `bountyId`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `partnerId`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `description`                                                                                    | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `urls`                                                                                           | *string*[]                                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `files`                                                                                          | [operations.Files](../../models/operations/files.md)[]                                           | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `status`                                                                                         | [operations.ListBountySubmissionsStatus](../../models/operations/listbountysubmissionsstatus.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `performanceCount`                                                                               | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `createdAt`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `completedAt`                                                                                    | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `reviewedAt`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `rejectionReason`                                                                                | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `rejectionNote`                                                                                  | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |