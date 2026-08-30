# AnalyticsEventNames

## Example Usage

```typescript
import { AnalyticsEventNames } from "dub/models/components";

let value: AnalyticsEventNames = {
  eventName: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `eventName`                                              | *string*                                                 | :heavy_check_mark:                                       | The name of the conversion event (lead or sale)          |
| `clicks`                                                 | *number*                                                 | :heavy_minus_sign:                                       | The number of clicks from this event name                |
| `leads`                                                  | *number*                                                 | :heavy_minus_sign:                                       | The number of leads from this event name                 |
| `sales`                                                  | *number*                                                 | :heavy_minus_sign:                                       | The number of sales from this event name                 |
| `saleAmount`                                             | *number*                                                 | :heavy_minus_sign:                                       | The total amount of sales from this event name, in cents |