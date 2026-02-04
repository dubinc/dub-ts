# Fields1

## Example Usage

```typescript
import { Fields1 } from "dub/models/components";

let value: Fields1 = {
  key: "<key>",
  label: "<value>",
  required: false,
  locked: true,
  position: 547268,
  type: "text",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `key`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `label`                                                          | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `required`                                                       | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `locked`                                                         | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `position`                                                       | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `type`                                                           | [components.FieldsType](../../models/components/fieldstype.md)   | :heavy_check_mark:                                               | N/A                                                              |
| `constraints`                                                    | [components.Constraints](../../models/components/constraints.md) | :heavy_minus_sign:                                               | N/A                                                              |