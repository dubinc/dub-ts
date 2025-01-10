# AnalyticsTopUrls

## Example Usage

```typescript
import { AnalyticsTopUrls } from "dub/models/components";

let value: AnalyticsTopUrls = {
  url: "https://merry-declaration.com/",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `url`                                             | *string*                                          | :heavy_check_mark:                                | The destination URL                               |
| `clicks`                                          | *number*                                          | :heavy_minus_sign:                                | The number of clicks from this URL                |
| `leads`                                           | *number*                                          | :heavy_minus_sign:                                | The number of leads from this URL                 |
| `sales`                                           | *number*                                          | :heavy_minus_sign:                                | The number of sales from this URL                 |
| `saleAmount`                                      | *number*                                          | :heavy_minus_sign:                                | The total amount of sales from this URL, in cents |