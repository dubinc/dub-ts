# SalesOS

## Example Usage

```typescript
import { SalesOS } from "dub/models/components";

let value: SalesOS = {
    os: "<value>",
    sales: 8915.55,
    amount: 9527.49,
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `os`                                   | *string*                               | :heavy_check_mark:                     | The name of the OS                     |
| `sales`                                | *number*                               | :heavy_check_mark:                     | The number of sales from this OS       |
| `amount`                               | *number*                               | :heavy_check_mark:                     | The total amount of sales from this OS |