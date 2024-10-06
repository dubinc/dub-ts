# AnalyticsCities

## Example Usage

```typescript
import { AnalyticsCities } from "dub/models/components";

let value: AnalyticsCities = {
  city: "Emardshire",
  country: "WS",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `city`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | The name of the city                                                                   |
| `country`                                                                              | [components.AnalyticsCitiesCountry](../../models/components/analyticscitiescountry.md) | :heavy_check_mark:                                                                     | The 2-letter country code of the city: https://d.to/geo                                |
| `clicks`                                                                               | *number*                                                                               | :heavy_minus_sign:                                                                     | The number of clicks from this city                                                    |
| `leads`                                                                                | *number*                                                                               | :heavy_minus_sign:                                                                     | The number of leads from this city                                                     |
| `sales`                                                                                | *number*                                                                               | :heavy_minus_sign:                                                                     | The number of sales from this city                                                     |
| `saleAmount`                                                                           | *number*                                                                               | :heavy_minus_sign:                                                                     | The total amount of sales from this city, in cents                                     |