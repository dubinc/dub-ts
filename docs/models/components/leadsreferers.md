# LeadsReferers

## Example Usage

```typescript
import { LeadsReferers } from "dub/models/components";

let value: LeadsReferers = {
    referer: "<value>",
    leads: 8423.42,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `referer`                                                    | *string*                                                     | :heavy_check_mark:                                           | The name of the referer. If unknown, this will be `(direct)` |
| `leads`                                                      | *number*                                                     | :heavy_check_mark:                                           | The number of leads from this referer                        |