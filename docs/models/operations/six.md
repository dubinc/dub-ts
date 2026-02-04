# Six

## Example Usage

```typescript
import { Six } from "dub/models/operations";

let value: Six = {
  key: "<key>",
  label: "<value>",
  required: false,
  locked: true,
  position: 880951,
  type: "multiSelect",
  options: [],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `key`                                                                  | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `label`                                                                | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `required`                                                             | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `locked`                                                               | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `position`                                                             | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `type`                                                                 | *"multiSelect"*                                                        | :heavy_check_mark:                                                     | N/A                                                                    |
| `options`                                                              | [operations.FieldsOptions](../../models/operations/fieldsoptions.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |