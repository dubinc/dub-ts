# Discount

## Example Usage

```typescript
import { Discount } from "dub/models/components";

let value: Discount = {
  id: "<id>",
  amount: 5865.89,
  type: "flat",
  maxDuration: 2716.09,
  provider: "shopify",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `amount`                                                                                           | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `type`                                                                                             | [components.DiscountCodeWebhookEventType](../../models/components/discountcodewebhookeventtype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `maxDuration`                                                                                      | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `provider`                                                                                         | [components.Provider](../../models/components/provider.md)                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |