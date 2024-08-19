# SalesCountries

## Example Usage

```typescript
import { SalesCountries } from "dub/models/components";

let value: SalesCountries = {
    country: "ET",
    sales: 7037.37,
    amount: 7351.94,
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `country`                                                                                                                   | [components.SalesCountriesCountry](../../models/components/salescountriescountry.md)                                        | :heavy_check_mark:                                                                                                          | The 2-letter ISO 3166-1 country code for the country associated with the location of the user. Learn more: https://d.to/geo |
| `sales`                                                                                                                     | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | The number of sales from this country                                                                                       |
| `amount`                                                                                                                    | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | The total amount of sales from this country                                                                                 |