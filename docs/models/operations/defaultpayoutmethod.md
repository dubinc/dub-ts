# DefaultPayoutMethod

The partner's default payout method. Connect: Bank account payouts via Stripe Connect; Stablecoin: USDC payouts directly to a crypto wallet; PayPal: Payouts via PayPal

## Example Usage

```typescript
import { DefaultPayoutMethod } from "dub/models/operations";

let value: DefaultPayoutMethod = "connect";
```

## Values

```typescript
"connect" | "stablecoin" | "paypal"
```