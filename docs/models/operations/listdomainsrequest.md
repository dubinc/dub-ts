# ListDomainsRequest

## Example Usage

```typescript
import { ListDomainsRequest } from "dub/models/operations";

let value: ListDomainsRequest = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `archived`                                                                                | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | Whether to include archived domains in the response. Defaults to `false` if not provided. |                                                                                           |
| `search`                                                                                  | *string*                                                                                  | :heavy_minus_sign:                                                                        | The search term to filter the domains by.                                                 |                                                                                           |
| `page`                                                                                    | *number*                                                                                  | :heavy_minus_sign:                                                                        | The page number for pagination.                                                           | 1                                                                                         |
| `pageSize`                                                                                | *number*                                                                                  | :heavy_minus_sign:                                                                        | The number of items per page.                                                             | 50                                                                                        |