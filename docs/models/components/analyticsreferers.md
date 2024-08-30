# AnalyticsReferers

## Example Usage

```typescript
import { AnalyticsReferers } from "dub/models/components";

let value: AnalyticsReferers = {
    referer: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `referer`                                                    | *string*                                                     | :heavy_check_mark:                                           | The name of the referer. If unknown, this will be `(direct)` |
| `clicks`                                                     | *number*                                                     | :heavy_minus_sign:                                           | The number of clicks from this referer                       |
| `leads`                                                      | *number*                                                     | :heavy_minus_sign:                                           | The number of leads from this referer                        |
| `sales`                                                      | *number*                                                     | :heavy_minus_sign:                                           | The number of sales from this referer                        |
| `saleAmount`                                                 | *number*                                                     | :heavy_minus_sign:                                           | The total amount of sales from this referer                  |