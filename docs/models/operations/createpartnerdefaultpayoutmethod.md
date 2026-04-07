# CreatePartnerDefaultPayoutMethod

The partner's default payout method. Connect: Bank account payouts via Stripe Connect; Stablecoin: USDC payouts directly to a crypto wallet; PayPal: Payouts via PayPal

## Example Usage

```typescript
import { CreatePartnerDefaultPayoutMethod } from "dub/models/operations";

let value: CreatePartnerDefaultPayoutMethod = "connect";
```

## Values

```typescript
"connect" | "stablecoin" | "paypal"
```