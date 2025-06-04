# GetTagsRequest

## Example Usage

```typescript
import { GetTagsRequest } from "dub/models/operations";

let value: GetTagsRequest = {
  pageSize: 50,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `sortBy`                                                                                       | [operations.GetTagsQueryParamSortBy](../../models/operations/gettagsqueryparamsortby.md)       | :heavy_minus_sign:                                                                             | The field to sort the tags by.                                                                 |                                                                                                |
| `sortOrder`                                                                                    | [operations.GetTagsQueryParamSortOrder](../../models/operations/gettagsqueryparamsortorder.md) | :heavy_minus_sign:                                                                             | The order to sort the tags by.                                                                 |                                                                                                |
| `search`                                                                                       | *string*                                                                                       | :heavy_minus_sign:                                                                             | The search term to filter the tags by.                                                         |                                                                                                |
| `ids`                                                                                          | *operations.Ids*                                                                               | :heavy_minus_sign:                                                                             | IDs of tags to filter by.                                                                      |                                                                                                |
| `page`                                                                                         | *number*                                                                                       | :heavy_minus_sign:                                                                             | The page number for pagination.                                                                | 1                                                                                              |
| `pageSize`                                                                                     | *number*                                                                                       | :heavy_minus_sign:                                                                             | The number of items per page.                                                                  | 50                                                                                             |