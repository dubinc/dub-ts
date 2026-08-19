# ListDiscountCodesRequest

## Example Usage

```typescript
import { ListDiscountCodesRequest } from "dub/models/operations";

let value: ListDiscountCodesRequest = {
  pageSize: 50,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `partnerId`                                                                                                     | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | The ID of the partner to retrieve discount codes for. If omitted, returns discount codes for the whole program. |                                                                                                                 |
| `discountId`                                                                                                    | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Filter discount codes by discount ID.                                                                           |                                                                                                                 |
| `page`                                                                                                          | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | The page number for pagination. The first page is `1`.                                                          | 1                                                                                                               |
| `pageSize`                                                                                                      | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | The number of items per page.                                                                                   | 50                                                                                                              |