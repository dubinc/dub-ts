# SalesCities

## Example Usage

```typescript
import { SalesCities } from "dub/models/components";

let value: SalesCities = {
    city: "Aiyanaville",
    country: "TZ",
    sales: 3698.08,
    amount: 46.95,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `city`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | The name of the city                                                           |
| `country`                                                                      | [components.SalesCitiesCountry](../../models/components/salescitiescountry.md) | :heavy_check_mark:                                                             | The 2-letter country code of the city: https://d.to/geo                        |
| `sales`                                                                        | *number*                                                                       | :heavy_check_mark:                                                             | The number of sales from this city                                             |
| `amount`                                                                       | *number*                                                                       | :heavy_check_mark:                                                             | The total amount of sales from this city                                       |