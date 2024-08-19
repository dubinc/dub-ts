# UpdateLinkRequest

## Example Usage

```typescript
import { UpdateLinkRequest } from "dub/models/operations";

let value: UpdateLinkRequest = {
    linkId: "<value>",
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `linkId`                                                                                                                              | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | The id of the link to update. You may use either `linkId` (obtained via `/links/info` endpoint) or `externalId` prefixed with `ext_`. |
| `requestBody`                                                                                                                         | [operations.UpdateLinkRequestBody](../../models/operations/updatelinkrequestbody.md)                                                  | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |