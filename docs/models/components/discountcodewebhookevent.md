# DiscountCodeWebhookEvent

Triggered when a discount code is created or deleted.

## Example Usage

```typescript
import { DiscountCodeWebhookEvent } from "dub/models/components";

let value: DiscountCodeWebhookEvent = {
  id: "<id>",
  event: "discount_code.created",
  createdAt: "1718465391393",
  data: {
    id: "dcode_1JVR7XRCSR0EDBAF39FZ4PMYE",
    code: "PARTNER10OFF",
    partnerId: "<id>",
    linkId: "<id>",
    discount: null,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `event`                                                                                            | *components.DiscountCodeWebhookEventEvent*                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `createdAt`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `data`                                                                                             | [components.DiscountCodeWebhookEventData](../../models/components/discountcodewebhookeventdata.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |