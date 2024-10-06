# Sort

The field to sort the links by. The default is `createdAt`, and sort order is always descending.

## Example Usage

```typescript
import { Sort } from "dub/models/operations";

let value: Sort = "createdAt";
```

## Values

```typescript
"createdAt" | "clicks" | "lastClicked"
```