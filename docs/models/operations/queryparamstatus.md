# QueryParamStatus

Filter the list of partners by their status for your program. `discover` returns the partners that are not in your program and that you have not ignored, ranked by relevance.

## Example Usage

```typescript
import { QueryParamStatus } from "dub/models/operations";

let value: QueryParamStatus = "invited";
```

## Values

```typescript
"discover" | "invited" | "recruited" | "ignored"
```