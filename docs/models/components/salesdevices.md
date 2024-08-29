# SalesDevices

## Example Usage

```typescript
import { SalesDevices } from "dub/models/components";

let value: SalesDevices = {
    device: "<value>",
    sales: 8960.39,
    amount: 5722.52,
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `device`                                   | *string*                                   | :heavy_check_mark:                         | The name of the device                     |
| `sales`                                    | *number*                                   | :heavy_check_mark:                         | The number of sales from this device       |
| `amount`                                   | *number*                                   | :heavy_check_mark:                         | The total amount of sales from this device |