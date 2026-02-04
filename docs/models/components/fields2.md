# Fields2

## Example Usage

```typescript
import { Fields2 } from "dub/models/components";

let value: Fields2 = {
  key: "<key>",
  label: "<value>",
  required: false,
  locked: true,
  position: 352683,
  type: "textarea",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `key`                                                                                                  | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `label`                                                                                                | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `required`                                                                                             | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `locked`                                                                                               | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `position`                                                                                             | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | [components.PartnerEnrolledEventFieldsType](../../models/components/partnerenrolledeventfieldstype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `constraints`                                                                                          | [components.FieldsConstraints](../../models/components/fieldsconstraints.md)                           | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |