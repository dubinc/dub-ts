# SalesTopUrls

## Example Usage

```typescript
import { SalesTopUrls } from "dub/models/components";

let value: SalesTopUrls = {
    url: "http://quizzical-synergy.biz",
    sales: 5812.73,
    amount: 3132.18,
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `url`                                   | *string*                                | :heavy_check_mark:                      | The destination URL                     |
| `sales`                                 | *number*                                | :heavy_check_mark:                      | The number of sales from this URL       |
| `amount`                                | *number*                                | :heavy_check_mark:                      | The total amount of sales from this URL |