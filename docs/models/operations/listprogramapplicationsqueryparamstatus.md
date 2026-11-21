# ListProgramApplicationsQueryParamStatus

Filter applications by status. One of `pending`, `approved`, or `rejected`. Defaults to `pending`.

## Example Usage

```typescript
import { ListProgramApplicationsQueryParamStatus } from "dub/models/operations";

let value: ListProgramApplicationsQueryParamStatus = "pending";
```

## Values

```typescript
"pending" | "approved" | "rejected"
```