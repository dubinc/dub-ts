# TrackLeadResponseBody

A lead was tracked.

## Example Usage

```typescript
import { TrackLeadResponseBody } from "dub/models/operations";

let value: TrackLeadResponseBody = {
    clickId: "<value>",
    eventName: "<value>",
    customerId: "<value>",
    customerName: "<value>",
    customerEmail: "<value>",
    customerAvatar: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `clickId`             | *string*              | :heavy_check_mark:    | N/A                   |
| `eventName`           | *string*              | :heavy_check_mark:    | N/A                   |
| `customerId`          | *string*              | :heavy_check_mark:    | N/A                   |
| `customerName`        | *string*              | :heavy_check_mark:    | N/A                   |
| `customerEmail`       | *string*              | :heavy_check_mark:    | N/A                   |
| `customerAvatar`      | *string*              | :heavy_check_mark:    | N/A                   |
| `metadata`            | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |