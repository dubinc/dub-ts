# Trigger

The trigger to retrieve analytics for. If undefined, return both QR and link clicks.

## Example Usage

```typescript
import { Trigger } from "dub/models/operations";

let value: Trigger = "link";
```

## Values

```typescript
"qr" | "link" | "pageview" | "deeplink"
```