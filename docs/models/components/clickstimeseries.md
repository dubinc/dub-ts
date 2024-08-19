# ClicksTimeseries

## Example Usage

```typescript
import { ClicksTimeseries } from "dub/models/components";

let value: ClicksTimeseries = {
    start: "<value>",
    clicks: 9764.6,
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `start`                                | *string*                               | :heavy_check_mark:                     | The starting timestamp of the interval |
| `clicks`                               | *number*                               | :heavy_check_mark:                     | The number of clicks in the interval   |