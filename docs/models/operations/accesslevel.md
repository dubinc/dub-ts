# AccessLevel

The workspace-level access level settings for the folder. Default is `write` which allows full access to the folder for all team members. The other options are `read` (view-only access) and `null` (no access) and are only available on Business plans and above.

## Example Usage

```typescript
import { AccessLevel } from "dub/models/operations";

let value: AccessLevel = "write";
```

## Values

```typescript
"write" | "read"
```