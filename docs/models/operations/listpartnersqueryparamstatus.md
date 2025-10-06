# ListPartnersQueryParamStatus

A filter on the list based on the partner's `status` field.

## Example Usage

```typescript
import { ListPartnersQueryParamStatus } from "dub/models/operations";

let value: ListPartnersQueryParamStatus = "approved";
```

## Values

```typescript
"pending" | "approved" | "rejected" | "invited" | "declined" | "deactivated" | "banned" | "archived"
```