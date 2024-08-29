# SalesBrowsers

## Example Usage

```typescript
import { SalesBrowsers } from "dub/models/components";

let value: SalesBrowsers = {
    browser: "<value>",
    sales: 6389.21,
    amount: 2230.81,
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `browser`                                   | *string*                                    | :heavy_check_mark:                          | The name of the browser                     |
| `sales`                                     | *number*                                    | :heavy_check_mark:                          | The number of sales from this browser       |
| `amount`                                    | *number*                                    | :heavy_check_mark:                          | The total amount of sales from this browser |