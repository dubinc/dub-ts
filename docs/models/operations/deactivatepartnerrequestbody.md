# DeactivatePartnerRequestBody

## Example Usage

```typescript
import { DeactivatePartnerRequestBody } from "dub/models/operations";

let value: DeactivatePartnerRequestBody = {};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `partnerId`                                                                                                         | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The ID of the partner to create a link for. Will take precedence over `tenantId` if provided.                       |
| `tenantId`                                                                                                          | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The ID of the partner in your system. If both `partnerId` and `tenantId` are not provided, an error will be thrown. |