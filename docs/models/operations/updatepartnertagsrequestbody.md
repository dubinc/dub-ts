# UpdatePartnerTagsRequestBody

## Example Usage

```typescript
import { UpdatePartnerTagsRequestBody } from "dub/models/operations";

let value: UpdatePartnerTagsRequestBody = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `partnerIds`                                                                                               | *string*[]                                                                                                 | :heavy_minus_sign:                                                                                         | The IDs of the partners to update, up to 100. Provide either `partnerIds` or `tenantIds`, not both.        |
| `tenantIds`                                                                                                | *string*[]                                                                                                 | :heavy_minus_sign:                                                                                         | The tenant IDs of the partners to update, up to 100. Provide either `partnerIds` or `tenantIds`, not both. |
| `addTagIds`                                                                                                | *string*[]                                                                                                 | :heavy_minus_sign:                                                                                         | The IDs of the partner tags to add to the partners, up to 10.                                              |
| `removeTagIds`                                                                                             | *string*[]                                                                                                 | :heavy_minus_sign:                                                                                         | The IDs of the partner tags to remove from the partners, up to 10.                                         |