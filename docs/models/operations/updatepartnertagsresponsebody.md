# UpdatePartnerTagsResponseBody

The number of tags added and removed

## Example Usage

```typescript
import { UpdatePartnerTagsResponseBody } from "dub/models/operations";

let value: UpdatePartnerTagsResponseBody = {
  added: 1260.19,
  removed: 2920.41,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `added`                                                                     | *number*                                                                    | :heavy_check_mark:                                                          | The number of tags added to partners, counted once per partner and tag.     |
| `removed`                                                                   | *number*                                                                    | :heavy_check_mark:                                                          | The number of tags removed from partners, counted once per partner and tag. |