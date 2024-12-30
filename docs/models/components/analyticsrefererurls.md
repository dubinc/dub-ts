# AnalyticsRefererUrls

## Example Usage

```typescript
import { AnalyticsRefererUrls } from "dub/models/components";

let value: AnalyticsRefererUrls = {
  refererUrl: "https://frank-steak.name",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `refererUrl`                                                      | *string*                                                          | :heavy_check_mark:                                                | The full URL of the referer. If unknown, this will be `(direct)`  |
| `clicks`                                                          | *number*                                                          | :heavy_minus_sign:                                                | The number of clicks from this referer to this URL                |
| `leads`                                                           | *number*                                                          | :heavy_minus_sign:                                                | The number of leads from this referer to this URL                 |
| `sales`                                                           | *number*                                                          | :heavy_minus_sign:                                                | The number of sales from this referer to this URL                 |
| `saleAmount`                                                      | *number*                                                          | :heavy_minus_sign:                                                | The total amount of sales from this referer to this URL, in cents |