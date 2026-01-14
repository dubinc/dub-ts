# RejectionReason

The reason for rejecting the submission.

## Example Usage

```typescript
import { RejectionReason } from "dub/models/operations";

let value: RejectionReason = "didNotMeetCriteria";
```

## Values

```typescript
"invalidProof" | "duplicateSubmission" | "outOfTimeWindow" | "didNotMeetCriteria" | "other"
```