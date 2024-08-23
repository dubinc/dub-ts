# ClicksTimeseries

## Example Usage

```typescript
import { ClicksTimeseries } from "dub/models/components";

let value: ClicksTimeseries = {
    start: "<value>",
    clicks: 3687.25,
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `start`                                | *string*                               | :heavy_check_mark:                     | The starting timestamp of the interval |
| `clicks`                               | *number*                               | :heavy_check_mark:                     | The number of clicks in the interval   |