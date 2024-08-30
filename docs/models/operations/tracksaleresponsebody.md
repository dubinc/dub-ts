# TrackSaleResponseBody

A sale was tracked.

## Example Usage

```typescript
import { TrackSaleResponseBody } from "dub/models/operations";

let value: TrackSaleResponseBody = {
    eventName: "<value>",
    customer: {
        id: "<id>",
        name: "<value>",
        email: "Felix_Ratke@hotmail.com",
        avatar: "https://loremflickr.com/640/480",
    },
    sale: {
        amount: 8411.4,
        paymentProcessor: "<value>",
        invoiceId: "<value>",
        currency: "Congolese Franc",
    },
    click: {
        url: "https://triangular-apprehension.com",
        ip: "130.157.42.31",
        continent: "<value>",
        country: "Sao Tome and Principe",
        city: "Sterling Heights",
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
        domain: "steel-handicap.name",
        key: "<key>",
        externalId: "<value>",
        url: "http://illegal-antique.com",
        expiresAt: "<value>",
        expiredUrl: "https://rewarding-future.info",
        password: "HesCr6iCzfh1ARO",
        title: "<value>",
        description: "Balanced encompassing complexity",
        image: "https://loremflickr.com/640/480",
        video: "<value>",
        ios: "<value>",
        android: "<value>",
        geo: {},
        comments: "<value>",
        shortLink: "http://aggravating-clogs.net",
        qrCode: "http://educated-surprise.info",
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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `eventName`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `customer`                                                                   | [operations.TrackSaleCustomer](../../models/operations/tracksalecustomer.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `sale`                                                                       | [operations.Sale](../../models/operations/sale.md)                           | :heavy_check_mark:                                                           | N/A                                                                          |
| `click`                                                                      | [operations.TrackSaleClick](../../models/operations/tracksaleclick.md)       | :heavy_check_mark:                                                           | N/A                                                                          |
| `link`                                                                       | [operations.TrackSaleLink](../../models/operations/tracksalelink.md)         | :heavy_check_mark:                                                           | N/A                                                                          |