# LeadsTimeseries

## Example Usage

```typescript
import { LeadsTimeseries } from "dub/models/components";

let value: LeadsTimeseries = {
    start: "<value>",
    leads: 5089.69,
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `start`                                | *string*                               | :heavy_check_mark:                     | The starting timestamp of the interval |
| `leads`                                | *number*                               | :heavy_check_mark:                     | The number of leads in the interval    |