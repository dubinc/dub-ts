# LeadsCountries

## Example Usage

```typescript
import { LeadsCountries } from "dub/models/components";

let value: LeadsCountries = {
    country: "VN",
    leads: 939.4,
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `country`                                                                                                                   | [components.LeadsCountriesCountry](../../models/components/leadscountriescountry.md)                                        | :heavy_check_mark:                                                                                                          | The 2-letter ISO 3166-1 country code for the country associated with the location of the user. Learn more: https://d.to/geo |
| `leads`                                                                                                                     | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | The number of leads from this country                                                                                       |