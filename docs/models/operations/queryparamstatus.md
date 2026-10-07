# QueryParamStatus

Filter applications by status. One of `pending`, `approved`, or `rejected`. Defaults to `pending`.

## Example Usage

```typescript
import { QueryParamStatus } from "dub/models/operations";

let value: QueryParamStatus = "approved";
```

## Values

```typescript
"pending" | "approved" | "rejected"
```