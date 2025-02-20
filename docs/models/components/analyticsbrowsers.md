# AnalyticsBrowsers

## Example Usage

```typescript
import { AnalyticsBrowsers } from "dub/models/components";

let value: AnalyticsBrowsers = {
  browser: "Safari",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `browser`                                             | *string*                                              | :heavy_check_mark:                                    | The name of the browser                               |
| `clicks`                                              | *number*                                              | :heavy_minus_sign:                                    | The number of clicks from this browser                |
| `leads`                                               | *number*                                              | :heavy_minus_sign:                                    | The number of leads from this browser                 |
| `sales`                                               | *number*                                              | :heavy_minus_sign:                                    | The number of sales from this browser                 |
| `saleAmount`                                          | *number*                                              | :heavy_minus_sign:                                    | The total amount of sales from this browser, in cents |