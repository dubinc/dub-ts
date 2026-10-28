# Status

Useful for marking a commission as pending, refunded, duplicate, canceled, fraudulent, or on hold. Takes precedence over `saleAmount` and `modifySaleAmount`. When a commission is marked as pending, refunded, duplicate, canceled, fraudulent, or on hold, it will be omitted from the payout, and the payout amount will be recalculated accordingly. To release a commission on hold, mark it as pending. Marking a commission as on hold is only available on Advanced and Enterprise plans. Paid commissions cannot be updated.

## Example Usage

```typescript
import { Status } from "dub/models/operations";

let value: Status = "canceled";
```

## Values

```typescript
"pending" | "refunded" | "duplicate" | "canceled" | "fraud" | "hold"
```