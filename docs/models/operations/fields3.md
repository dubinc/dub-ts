# Fields3

## Example Usage

```typescript
import { Fields3 } from "dub/models/operations";

let value: Fields3 = {
  key: "<key>",
  label: "<value>",
  required: false,
  locked: true,
  position: 316855,
  type: "select",
  options: [
    {
      label: "<value>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `key`                                                      | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `label`                                                    | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `required`                                                 | *boolean*                                                  | :heavy_check_mark:                                         | N/A                                                        |
| `locked`                                                   | *boolean*                                                  | :heavy_check_mark:                                         | N/A                                                        |
| `position`                                                 | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `type`                                                     | *"select"*                                                 | :heavy_check_mark:                                         | N/A                                                        |
| `options`                                                  | [operations.Options](../../models/operations/options.md)[] | :heavy_check_mark:                                         | N/A                                                        |