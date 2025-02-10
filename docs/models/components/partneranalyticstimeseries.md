# PartnerAnalyticsTimeseries

## Example Usage

```typescript
import { PartnerAnalyticsTimeseries } from "dub/models/components";

let value: PartnerAnalyticsTimeseries = {
  start: "<value>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `start`                                             | *string*                                            | :heavy_check_mark:                                  | The starting timestamp of the interval              |
| `clicks`                                            | *number*                                            | :heavy_minus_sign:                                  | The number of clicks in the interval                |
| `leads`                                             | *number*                                            | :heavy_minus_sign:                                  | The number of leads in the interval                 |
| `sales`                                             | *number*                                            | :heavy_minus_sign:                                  | The number of sales in the interval                 |
| `saleAmount`                                        | *number*                                            | :heavy_minus_sign:                                  | The total amount of sales in the interval, in cents |
| `earnings`                                          | *number*                                            | :heavy_minus_sign:                                  | N/A                                                 |