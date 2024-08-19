# ClicksReferers

## Example Usage

```typescript
import { ClicksReferers } from "dub/models/components";

let value: ClicksReferers = {
    referer: "<value>",
    clicks: 1201.96,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `referer`                                                    | *string*                                                     | :heavy_check_mark:                                           | The name of the referer. If unknown, this will be `(direct)` |
| `clicks`                                                     | *number*                                                     | :heavy_check_mark:                                           | The number of clicks from this referer                       |