# ListEventsResponseBody

A list of events

## Example Usage

```typescript
import { ListEventsResponseBody } from "dub/models/operations";

let value: ListEventsResponseBody = [
    {
        event: "lead",
        timestamp: "<value>",
        eventId: "<value>",
        eventName: "<value>",
        customerName: "<value>",
        customerEmail: "<value>",
        customerAvatar: "<value>",
        clickId: "<value>",
        linkId: "<value>",
        domain: "wary-thistle.net",
        key: "<key>",
        url: "http://grown-opposite.info",
        continent: "<value>",
        country: "Trinidad and Tobago",
        city: "Boyleton",
        device: "<value>",
        browser: "<value>",
        os: "<value>",
        referer: "<value>",
        qr: 9698.1,
        ip: "170.167.171.43",
    },
];
```

## Supported Types

### `components.ClickEvent[]`

```typescript
const value: components.ClickEvent[] = /* values here */
```

### `components.LeadEvent[]`

```typescript
const value: components.LeadEvent[] = /* values here */
```

### `components.SaleEvent[]`

```typescript
const value: components.SaleEvent[] = /* values here */
```

