# IdentityVerificationStatus

The partner's identity verification status. Null means not yet initiated.

## Example Usage

```typescript
import { IdentityVerificationStatus } from "dub/models/components";

let value: IdentityVerificationStatus = "started";
```

## Values

```typescript
"started" | "submitted" | "approved" | "declined" | "resubmissionRequested" | "expired" | "abandoned" | "review"
```