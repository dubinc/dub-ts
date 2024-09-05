# ClickEvent

## Example Usage

```typescript
import { ClickEvent } from "dub/models/components";

let value: ClickEvent = {
    event: "click",
    timestamp: "<value>",
    clickId: "<value>",
    linkId: "<value>",
    domain: "costly-poncho.name",
    key: "<key>",
    url: "http://rotating-relationship.biz",
    continent: "<value>",
    country: "Vanuatu",
    city: "Deloresfort",
    device: "<value>",
    browser: "<value>",
    os: "<value>",
    referer: "<value>",
    ip: "147.101.151.229",
    qr: 5722.52,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `event`                                              | [components.Event](../../models/components/event.md) | :heavy_check_mark:                                   | N/A                                                  |
| `timestamp`                                          | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `clickId`                                            | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `linkId`                                             | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `domain`                                             | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `key`                                                | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `url`                                                | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `continent`                                          | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `country`                                            | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `city`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `device`                                             | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `browser`                                            | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `os`                                                 | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `referer`                                            | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `ip`                                                 | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `qr`                                                 | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |