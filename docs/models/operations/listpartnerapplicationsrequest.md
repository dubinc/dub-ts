# ListPartnerApplicationsRequest

## Example Usage

```typescript
import { ListPartnerApplicationsRequest } from "dub/models/operations";

let value: ListPartnerApplicationsRequest = {
  pageSize: 50,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `country`                                                    | *string*                                                     | :heavy_minus_sign:                                           | A filter on the list based on the partner's `country` field. | US                                                           |
| `groupId`                                                    | *string*                                                     | :heavy_minus_sign:                                           | A filter on the list based on the partner's `groupId` field. | grp_123                                                      |
| `page`                                                       | *number*                                                     | :heavy_minus_sign:                                           | The page number for pagination.                              | 1                                                            |
| `pageSize`                                                   | *number*                                                     | :heavy_minus_sign:                                           | The number of items per page.                                | 50                                                           |