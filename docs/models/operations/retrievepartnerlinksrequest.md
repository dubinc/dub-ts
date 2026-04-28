# RetrievePartnerLinksRequest

## Example Usage

```typescript
import { RetrievePartnerLinksRequest } from "dub/models/operations";

let value: RetrievePartnerLinksRequest = {};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `partnerId`                                                                                                         | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The ID of the partner to create a link for. Will take precedence over `tenantId` if provided.                       |
| `tenantId`                                                                                                          | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The ID of the partner in your system. If both `partnerId` and `tenantId` are not provided, an error will be thrown. |