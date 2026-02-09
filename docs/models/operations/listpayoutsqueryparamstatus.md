# ListPayoutsQueryParamStatus

Filter the list of payouts by their corresponding status.

## Example Usage

```typescript
import { ListPayoutsQueryParamStatus } from "dub/models/operations";

let value: ListPayoutsQueryParamStatus = "canceled";
```

## Values

```typescript
"pending" | "processing" | "processed" | "sent" | "completed" | "failed" | "canceled"
```