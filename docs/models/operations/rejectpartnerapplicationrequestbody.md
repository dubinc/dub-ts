# RejectPartnerApplicationRequestBody

## Example Usage

```typescript
import { RejectPartnerApplicationRequestBody } from "dub/models/operations";

let value: RejectPartnerApplicationRequestBody = {
  partnerId: "<id>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `partnerId`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | The ID of the partner to reject.                                                                  |
| `rejectionReason`                                                                                 | [operations.RejectionReason](../../models/operations/rejectionreason.md)                          | :heavy_minus_sign:                                                                                | The reason for rejecting the partner application. This will be shared with the partner via email. |
| `rejectionNote`                                                                                   | *string*                                                                                          | :heavy_minus_sign:                                                                                | Additional details about the rejection. This will be shared with the partner via email.           |
| `allowImmediateReapply`                                                                           | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | When true, pending enrollment is removed so the partner can submit a new application immediately. |