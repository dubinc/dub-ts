# QueryParamTrigger

The trigger to retrieve analytics for. If undefined, return both QR and link clicks.

## Example Usage

```typescript
import { QueryParamTrigger } from "dub/models/operations";

let value: QueryParamTrigger = "link";
```

## Values

```typescript
"qr" | "link" | "pageview" | "deeplink"
```