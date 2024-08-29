# ClicksCities

## Example Usage

```typescript
import { ClicksCities } from "dub/models/components";

let value: ClicksCities = {
    city: "Aufderhartown",
    country: "KI",
    clicks: 2828.07,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `city`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | The name of the city                                                             |
| `country`                                                                        | [components.ClicksCitiesCountry](../../models/components/clickscitiescountry.md) | :heavy_check_mark:                                                               | The 2-letter country code of the city: https://d.to/geo                          |
| `clicks`                                                                         | *number*                                                                         | :heavy_check_mark:                                                               | The number of clicks from this city                                              |