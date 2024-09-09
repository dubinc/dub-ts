# QueryParamInterval

The interval to retrieve events for. Takes precedence over start and end. If undefined, defaults to 24h.

## Example Usage

```typescript
import { QueryParamInterval } from "dub/models/operations";

let value: QueryParamInterval = "7d";
```

## Values

```typescript
"24h" | "7d" | "30d" | "90d" | "ytd" | "1y" | "all"
```