# BulkUpdateLinksRequestBody

## Example Usage

```typescript
import { BulkUpdateLinksRequestBody } from "dub/models/operations";

let value: BulkUpdateLinksRequestBody = {
  data: {},
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `linkIds`                                                            | *string*[]                                                           | :heavy_minus_sign:                                                   | The IDs of the links to update. Takes precedence over `externalIds`. |
| `externalIds`                                                        | *string*[]                                                           | :heavy_minus_sign:                                                   | The external IDs of the links to update as stored in your database.  |
| `data`                                                               | [operations.Data](../../models/operations/data.md)                   | :heavy_check_mark:                                                   | N/A                                                                  |