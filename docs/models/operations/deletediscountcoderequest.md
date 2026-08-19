# DeleteDiscountCodeRequest

## Example Usage

```typescript
import { DeleteDiscountCodeRequest } from "dub/models/operations";

let value: DeleteDiscountCodeRequest = {
  idOrCode: "dcode_1JVR7XRCSR0EDBAF39FZ4PMYE",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `idOrCode`                                                                                            | *string*                                                                                              | :heavy_check_mark:                                                                                    | The unique ID (e.g. `dcode_...`) or alphanumeric code (e.g. `ABC123`) of the discount code to delete. | dcode_1JVR7XRCSR0EDBAF39FZ4PMYE                                                                       |