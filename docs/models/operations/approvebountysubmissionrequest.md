# ApproveBountySubmissionRequest

## Example Usage

```typescript
import { ApproveBountySubmissionRequest } from "dub/models/operations";

let value: ApproveBountySubmissionRequest = {
  bountyId: "<id>",
  submissionId: "<id>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `bountyId`                                                                                                     | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The ID of the bounty                                                                                           |
| `submissionId`                                                                                                 | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The ID of the bounty submission                                                                                |
| `requestBody`                                                                                                  | [operations.ApproveBountySubmissionRequestBody](../../models/operations/approvebountysubmissionrequestbody.md) | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |