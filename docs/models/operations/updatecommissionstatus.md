# UpdateCommissionStatus

The current status of the commission.

## Example Usage

```typescript
import { UpdateCommissionStatus } from "dub/models/operations";

let value: UpdateCommissionStatus = "refunded";
```

## Values

```typescript
"pending" | "processed" | "paid" | "refunded" | "duplicate" | "fraud" | "canceled" | "hold"
```