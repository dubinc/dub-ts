# AnalyticsDevices

## Example Usage

```typescript
import { AnalyticsDevices } from "dub/models/components";

let value: AnalyticsDevices = {
    device: "<value>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `device`                                   | *string*                                   | :heavy_check_mark:                         | The name of the device                     |
| `clicks`                                   | *number*                                   | :heavy_minus_sign:                         | The number of clicks from this device      |
| `leads`                                    | *number*                                   | :heavy_minus_sign:                         | The number of leads from this device       |
| `sales`                                    | *number*                                   | :heavy_minus_sign:                         | The number of sales from this device       |
| `saleAmount`                               | *number*                                   | :heavy_minus_sign:                         | The total amount of sales from this device |