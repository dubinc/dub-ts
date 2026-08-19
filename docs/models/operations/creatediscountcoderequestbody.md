# CreateDiscountCodeRequestBody

## Example Usage

```typescript
import { CreateDiscountCodeRequestBody } from "dub/models/operations";

let value: CreateDiscountCodeRequestBody = {
  partnerId: "<id>",
  linkId: "<id>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                 | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | The discount code to create. If omitted, a unique code will be generated automatically from the partner's name.        |
| `partnerId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the partner to create a discount code for.                                                                   |
| `linkId`                                                                                                               | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the partner's referral link to associate this discount code with. Each link can only have one discount code. |