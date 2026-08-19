# QueryParamStatus

Filter the list of commissions by their corresponding status.

## Example Usage

```typescript
import { QueryParamStatus } from "dub/models/operations";

let value: QueryParamStatus = "refunded";
```

## Values

```typescript
"pending" | "processed" | "paid" | "refunded" | "duplicate" | "fraud" | "canceled" | "hold"
```