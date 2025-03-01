# ListFoldersRequest

## Example Usage

```typescript
import { ListFoldersRequest } from "dub/models/operations";

let value: ListFoldersRequest = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `search`                                           | *string*                                           | :heavy_minus_sign:                                 | The search term to filter the folders by.          |                                                    |
| `includeLinkCount`                                 | *boolean*                                          | :heavy_minus_sign:                                 | Whether to include the link count in the response. |                                                    |
| `page`                                             | *number*                                           | :heavy_minus_sign:                                 | The page number for pagination.                    | 1                                                  |
| `pageSize`                                         | *number*                                           | :heavy_minus_sign:                                 | The number of items per page.                      | 50                                                 |