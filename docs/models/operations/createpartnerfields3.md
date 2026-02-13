# CreatePartnerFields3

## Example Usage

```typescript
import { CreatePartnerFields3 } from "dub/models/operations";

let value: CreatePartnerFields3 = {
  key: "<key>",
  label: "<value>",
  required: false,
  locked: true,
  position: 128121,
  type: "select",
  options: [],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `key`                                                                                            | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `label`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `required`                                                                                       | *boolean*                                                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `locked`                                                                                         | *boolean*                                                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `position`                                                                                       | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `type`                                                                                           | *"select"*                                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `options`                                                                                        | [operations.CreatePartnerFieldsOptions](../../models/operations/createpartnerfieldsoptions.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |