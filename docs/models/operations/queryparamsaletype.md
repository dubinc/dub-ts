# QueryParamSaleType

Filter sales by type: 'new' for first-time purchases, 'recurring' for repeat purchases. If undefined, returns both.

## Example Usage

```typescript
import { QueryParamSaleType } from "dub/models/operations";

let value: QueryParamSaleType = "recurring";
```

## Values

```typescript
"new" | "recurring"
```