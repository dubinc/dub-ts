# Mode

The mode to use for tracking the lead event. `async` will not block the request; `wait` will block the request until the lead event is fully recorded in Dub; `deferred` will defer the lead event creation to a subsequent request.

## Example Usage

```typescript
import { Mode } from "dub/models/operations";

let value: Mode = "deferred";
```

## Values

```typescript
"async" | "wait" | "deferred"
```