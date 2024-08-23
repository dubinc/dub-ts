# SalesTopUrls

## Example Usage

```typescript
import { SalesTopUrls } from "dub/models/components";

let value: SalesTopUrls = {
    url: "http://unimportant-venture.net",
    sales: 4471.25,
    amount: 4491.98,
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `url`                                   | *string*                                | :heavy_check_mark:                      | The destination URL                     |
| `sales`                                 | *number*                                | :heavy_check_mark:                      | The number of sales from this URL       |
| `amount`                                | *number*                                | :heavy_check_mark:                      | The total amount of sales from this URL |