# BanPartnerRequestBody

## Example Usage

```typescript
import { BanPartnerRequestBody } from "dub/models/operations";

let value: BanPartnerRequestBody = {
  reason: "tos_violation",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `partnerId`                                                                                                         | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The ID of the partner to create a link for. Will take precedence over `tenantId` if provided.                       |
| `tenantId`                                                                                                          | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The ID of the partner in your system. If both `partnerId` and `tenantId` are not provided, an error will be thrown. |
| `reason`                                                                                                            | [operations.Reason](../../models/operations/reason.md)                                                              | :heavy_check_mark:                                                                                                  | The reason for banning the partner.                                                                                 |
| `flagForFraud`                                                                                                      | *boolean*                                                                                                           | :heavy_minus_sign:                                                                                                  | Whether to flag the partner for fraud review by the Dub team.                                                       |
| `flagForFraudReason`                                                                                                | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The reason for flagging the partner for fraud. Required when flagForFraud is true.                                  |