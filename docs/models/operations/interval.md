# Interval

The interval to retrieve analytics for. If undefined, defaults to 24h.

## Example Usage

```typescript
import { Interval } from "dub/models/operations";

let value: Interval = "ytd";
```

## Values

```typescript
"24h" | "7d" | "30d" | "90d" | "ytd" | "1y" | "all" | "all_unfiltered"
```