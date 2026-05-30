# Type

Filter the list of commissions by type. Supports advanced filtering: single value, multiple values (comma-separated), or exclusion (prefix with `-`). Examples: `sale`, `sale,lead`, `-click`.

## Example Usage

```typescript
import { Type } from "dub/models/operations";

let value: Type = "click";
```

## Values

```typescript
"click" | "lead" | "sale" | "referral" | "custom"
```