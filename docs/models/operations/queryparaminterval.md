# QueryParamInterval

The interval to retrieve analytics for. If undefined, defaults to 24h.

## Example Usage

```typescript
import { QueryParamInterval } from "dub/models/operations";

let value: QueryParamInterval = "all";
```

## Values

```typescript
"24h" | "7d" | "30d" | "90d" | "1y" | "mtd" | "qtd" | "ytd" | "all"
```