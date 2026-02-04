# RejectBountySubmissionRequest

## Example Usage

```typescript
import { RejectBountySubmissionRequest } from "dub/models/operations";

let value: RejectBountySubmissionRequest = {
  bountyId: "<id>",
  submissionId: "<id>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `bountyId`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the bounty                                                                                         |
| `submissionId`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the bounty submission                                                                              |
| `requestBody`                                                                                                | [operations.RejectBountySubmissionRequestBody](../../models/operations/rejectbountysubmissionrequestbody.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |