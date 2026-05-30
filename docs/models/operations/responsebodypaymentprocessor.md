# ResponseBodyPaymentProcessor

The payment processor via which the sale was made.

## Example Usage

```typescript
import { ResponseBodyPaymentProcessor } from "dub/models/operations";

let value: ResponseBodyPaymentProcessor = "paddle";
```

## Values

```typescript
"stripe" | "shopify" | "polar" | "paddle" | "apple" | "revenuecat" | "dub" | "custom"
```