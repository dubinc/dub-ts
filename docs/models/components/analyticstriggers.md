# AnalyticsTriggers

## Example Usage

```typescript
import { AnalyticsTriggers } from "dub/models/components";

let value: AnalyticsTriggers = {
  trigger: "qr",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `trigger`                                                    | [components.Trigger](../../models/components/trigger.md)     | :heavy_check_mark:                                           | The type of trigger method: link click or QR scan            |
| `clicks`                                                     | *number*                                                     | :heavy_minus_sign:                                           | The number of clicks from this trigger method                |
| `leads`                                                      | *number*                                                     | :heavy_minus_sign:                                           | The number of leads from this trigger method                 |
| `sales`                                                      | *number*                                                     | :heavy_minus_sign:                                           | The number of sales from this trigger method                 |
| `saleAmount`                                                 | *number*                                                     | :heavy_minus_sign:                                           | The total amount of sales from this trigger method, in cents |