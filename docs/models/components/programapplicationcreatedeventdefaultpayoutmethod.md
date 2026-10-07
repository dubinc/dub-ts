# ProgramApplicationCreatedEventDefaultPayoutMethod

The partner's default payout method. Connect: Bank account payouts via Stripe Connect; Stablecoin: USDC payouts directly to a crypto wallet; PayPal: Payouts via PayPal

## Example Usage

```typescript
import { ProgramApplicationCreatedEventDefaultPayoutMethod } from "dub/models/components";

let value: ProgramApplicationCreatedEventDefaultPayoutMethod = "connect";
```

## Values

```typescript
"connect" | "stablecoin" | "paypal" | "tremendous"
```