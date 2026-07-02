# Prices

Price details for the domain. Will be null if the domain is not available.

## Example Usage

```typescript
import { Prices } from "dub/models/operations";

let value: Prices = {
  registration: 662.96,
  renewal: 8570.49,
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `registration`                                | *number*                                      | :heavy_check_mark:                            | The domain's registration price in USD cents. |
| `renewal`                                     | *number*                                      | :heavy_check_mark:                            | The domain's renewal price in USD cents.      |