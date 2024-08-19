# SalesOS

## Example Usage

```typescript
import { SalesOS } from "dub/models/components";

let value: SalesOS = {
    os: "<value>",
    sales: 6389.21,
    amount: 2230.81,
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `os`                                   | *string*                               | :heavy_check_mark:                     | The name of the OS                     |
| `sales`                                | *number*                               | :heavy_check_mark:                     | The number of sales from this OS       |
| `amount`                               | *number*                               | :heavy_check_mark:                     | The total amount of sales from this OS |