# AnalyticsTopUrls

## Example Usage

```typescript
import { AnalyticsTopUrls } from "dub/models/components";

let value: AnalyticsTopUrls = {
  url: "https://apprehensive-waist.info",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `url`                                                 | *string*                                              | :heavy_check_mark:                                    | The full destination URL (including query parameters) |
| `clicks`                                              | *number*                                              | :heavy_minus_sign:                                    | The number of clicks from this URL                    |
| `leads`                                               | *number*                                              | :heavy_minus_sign:                                    | The number of leads from this URL                     |
| `sales`                                               | *number*                                              | :heavy_minus_sign:                                    | The number of sales from this URL                     |
| `saleAmount`                                          | *number*                                              | :heavy_minus_sign:                                    | The total amount of sales from this URL, in cents     |