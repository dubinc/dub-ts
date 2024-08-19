# SalesDevices

## Example Usage

```typescript
import { SalesDevices } from "dub/models/components";

let value: SalesDevices = {
    device: "<value>",
    sales: 3960.98,
    amount: 5920.42,
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `device`                                   | *string*                                   | :heavy_check_mark:                         | The name of the device                     |
| `sales`                                    | *number*                                   | :heavy_check_mark:                         | The number of sales from this device       |
| `amount`                                   | *number*                                   | :heavy_check_mark:                         | The total amount of sales from this device |