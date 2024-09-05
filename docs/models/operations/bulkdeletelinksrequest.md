# BulkDeleteLinksRequest

## Example Usage

```typescript
import { BulkDeleteLinksRequest } from "dub/models/operations";

let value: BulkDeleteLinksRequest = {
    linkIds: ["clux0rgak00011...", "clux0rgak00022..."],
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `linkIds`                                                                                         | *string*[]                                                                                        | :heavy_check_mark:                                                                                | Comma-separated list of link IDs to delete. Maximum of 100 IDs. Non-existing IDs will be ignored. | [<br/>"clux0rgak00011...",<br/>"clux0rgak00022..."<br/>]                                          |