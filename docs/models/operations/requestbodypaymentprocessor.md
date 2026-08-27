# RequestBodyPaymentProcessor

The payment processor via which the sale was made.

## Example Usage

```typescript
import { RequestBodyPaymentProcessor } from "dub/models/operations";

let value: RequestBodyPaymentProcessor = "polar";
```

## Values

```typescript
"stripe" | "shopify" | "polar" | "paddle" | "apple" | "revenuecat" | "lemonsqueezy" | "dub" | "custom"
```