# SalesReferers

## Example Usage

```typescript
import { SalesReferers } from "dub/models/components";

let value: SalesReferers = {
    referer: "<value>",
    sales: 8915.55,
    amount: 9527.49,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `referer`                                                    | *string*                                                     | :heavy_check_mark:                                           | The name of the referer. If unknown, this will be `(direct)` |
| `sales`                                                      | *number*                                                     | :heavy_check_mark:                                           | The number of sales from this referer                        |
| `amount`                                                     | *number*                                                     | :heavy_check_mark:                                           | The total amount of sales from this referer                  |