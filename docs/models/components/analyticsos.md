# AnalyticsOS

## Example Usage

```typescript
import { AnalyticsOS } from "dub/models/components";

let value: AnalyticsOS = {
  os: "Windows",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `os`                                             | *string*                                         | :heavy_check_mark:                               | The name of the OS                               |
| `clicks`                                         | *number*                                         | :heavy_minus_sign:                               | The number of clicks from this OS                |
| `leads`                                          | *number*                                         | :heavy_minus_sign:                               | The number of leads from this OS                 |
| `sales`                                          | *number*                                         | :heavy_minus_sign:                               | The number of sales from this OS                 |
| `saleAmount`                                     | *number*                                         | :heavy_minus_sign:                               | The total amount of sales from this OS, in cents |