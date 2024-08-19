# ClicksCountries

## Example Usage

```typescript
import { ClicksCountries } from "dub/models/components";

let value: ClicksCountries = {
    country: "LB",
    clicks: 5096.24,
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `country`                                                                                                                   | [components.Country](../../models/components/country.md)                                                                    | :heavy_check_mark:                                                                                                          | The 2-letter ISO 3166-1 country code for the country associated with the location of the user. Learn more: https://d.to/geo |
| `clicks`                                                                                                                    | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | The number of clicks from this country                                                                                      |