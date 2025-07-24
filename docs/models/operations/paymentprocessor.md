# PaymentProcessor

The payment processor via which the sale was made.

## Example Usage

```typescript
import { PaymentProcessor } from "dub/models/operations";

let value: PaymentProcessor = "revenuecat";
```

## Values

```typescript
"stripe" | "shopify" | "polar" | "paddle" | "revenuecat" | "custom"
```