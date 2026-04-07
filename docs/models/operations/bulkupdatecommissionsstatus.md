# BulkUpdateCommissionsStatus

The status to apply to every commission in the batch.

## Example Usage

```typescript
import { BulkUpdateCommissionsStatus } from "dub/models/operations";

let value: BulkUpdateCommissionsStatus = "duplicate";
```

## Values

```typescript
"pending" | "refunded" | "duplicate" | "canceled" | "fraud"
```