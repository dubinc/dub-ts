# Fields6

## Example Usage

```typescript
import { Fields6 } from "dub/models/operations";

let value: Fields6 = {
  key: "<key>",
  label: "<value>",
  required: true,
  locked: false,
  position: 930626,
  type: "multiSelect",
  options: [],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `label`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `required`                                                                                                     | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `locked`                                                                                                       | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `position`                                                                                                     | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `type`                                                                                                         | *"multiSelect"*                                                                                                | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `options`                                                                                                      | [operations.ListPartnersFieldsPartnersOptions](../../models/operations/listpartnersfieldspartnersoptions.md)[] | :heavy_check_mark:                                                                                             | N/A                                                                                                            |