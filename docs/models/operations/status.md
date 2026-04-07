# Status

Useful for marking a commission as pending, refunded, duplicate, canceled, or fraudulent. Takes precedence over `saleAmount` and `modifySaleAmount`. When a commission is marked as pending, refunded, duplicate, canceled, or fraudulent, it will be omitted from the payout, and the payout amount will be recalculated accordingly. Paid commissions cannot be updated.

## Example Usage

```typescript
import { Status } from "dub/models/operations";

let value: Status = "canceled";
```

## Values

```typescript
"pending" | "refunded" | "duplicate" | "canceled" | "fraud"
```