# AnalyticsRegions

## Example Usage

```typescript
import { AnalyticsRegions } from "dub/models/components";

let value: AnalyticsRegions = {
  country: "Czechia",
  region: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `country`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | The 2-letter ISO 3166-1 country code of the country. Learn more: https://d.to/geo  |
| `region`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | The 2-letter ISO 3166-2 region code of the region.                                 |
| `city`                                                                             | [components.AnalyticsRegionsCity](../../models/components/analyticsregionscity.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `clicks`                                                                           | *number*                                                                           | :heavy_minus_sign:                                                                 | The number of clicks from this region                                              |
| `leads`                                                                            | *number*                                                                           | :heavy_minus_sign:                                                                 | The number of leads from this region                                               |
| `sales`                                                                            | *number*                                                                           | :heavy_minus_sign:                                                                 | The number of sales from this region                                               |
| `saleAmount`                                                                       | *number*                                                                           | :heavy_minus_sign:                                                                 | The total amount of sales from this region, in cents                               |