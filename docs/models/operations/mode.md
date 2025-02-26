# Mode

The mode to use for tracking the lead event. `async` will not block the request; `wait` will block the request until the lead event is fully recorded in Dub.

## Example Usage

```typescript
import { Mode } from "dub/models/operations";

let value: Mode = "async";
```

## Values

```typescript
"async" | "wait"
```