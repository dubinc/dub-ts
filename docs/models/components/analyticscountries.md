# AnalyticsCountries

## Example Usage

```typescript
import { AnalyticsCountries } from "dub/models/components";

let value: AnalyticsCountries = {
  country: "Vanuatu",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `country`                                                                         | *string*                                                                          | :heavy_check_mark:                                                                | The 2-letter ISO 3166-1 country code of the country. Learn more: https://d.to/geo |
| `region`                                                                          | [components.Region](../../models/components/region.md)                            | :heavy_minus_sign:                                                                | N/A                                                                               |
| `city`                                                                            | [components.City](../../models/components/city.md)                                | :heavy_minus_sign:                                                                | N/A                                                                               |
| `clicks`                                                                          | *number*                                                                          | :heavy_minus_sign:                                                                | The number of clicks from this country                                            |
| `leads`                                                                           | *number*                                                                          | :heavy_minus_sign:                                                                | The number of leads from this country                                             |
| `sales`                                                                           | *number*                                                                          | :heavy_minus_sign:                                                                | The number of sales from this country                                             |
| `saleAmount`                                                                      | *number*                                                                          | :heavy_minus_sign:                                                                | The total amount of sales from this country, in cents                             |