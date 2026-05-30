# ReapplicationTimeframe

The mode for reapplying for the program. `instant`: The partner can reapply immediately. `standard`: The partner can reapply after 30 days. `never`: The partner can never reapply for the program. Defaults to `standard` if undefined.

## Example Usage

```typescript
import { ReapplicationTimeframe } from "dub/models/operations";

let value: ReapplicationTimeframe = "standard";
```

## Values

```typescript
"instant" | "standard" | "never"
```