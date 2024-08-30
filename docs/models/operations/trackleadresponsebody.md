# TrackLeadResponseBody

A lead was tracked.

## Example Usage

```typescript
import { TrackLeadResponseBody } from "dub/models/operations";

let value: TrackLeadResponseBody = {
    eventName: "<value>",
    customer: {
        id: "<id>",
        name: "<value>",
        email: "Elena68@yahoo.com",
        avatar: "https://loremflickr.com/640/480",
    },
    click: {
        url: "http://unacceptable-hare.org",
        ip: "16.55.177.144",
        continent: "<value>",
        country: "Mayotte",
        city: "East Orange",
        device: "<value>",
        browser: "<value>",
        os: "<value>",
        ua: "<value>",
        bot: false,
        qr: false,
        referer: "<value>",
        id: "<id>",
    },
    link: {
        id: "<id>",
        domain: "lumpy-loincloth.org",
        key: "<key>",
        externalId: "<value>",
        url: "http://vain-moose.com",
        expiresAt: "<value>",
        expiredUrl: "https://feline-eve.com",
        password: "qep2FXU0oDaWcfJ",
        title: "<value>",
        description: "Ergonomic radical local area network",
        image: "https://loremflickr.com/640/480",
        video: "<value>",
        ios: "<value>",
        android: "<value>",
        geo: {},
        comments: "<value>",
        shortLink: "http://optimistic-tenth.name",
        qrCode: "https://edible-tectonics.org",
        utmSource: "<value>",
        utmMedium: "<value>",
        utmCampaign: "<value>",
        utmTerm: "<value>",
        utmContent: "<value>",
        userId: "<value>",
        workspaceId: "<value>",
        lastClicked: "<value>",
        createdAt: "<value>",
        updatedAt: "<value>",
    },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `eventName`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `customer`                                                 | [operations.Customer](../../models/operations/customer.md) | :heavy_check_mark:                                         | N/A                                                        |
| `click`                                                    | [operations.Click](../../models/operations/click.md)       | :heavy_check_mark:                                         | N/A                                                        |
| `link`                                                     | [operations.Link](../../models/operations/link.md)         | :heavy_check_mark:                                         | N/A                                                        |