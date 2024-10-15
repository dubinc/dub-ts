# SaleCreatedEventData

## Example Usage

```typescript
import { SaleCreatedEventData } from "dub/models/components";

let value: SaleCreatedEventData = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    name: "<value>",
    email: "Buster.Schmeler60@gmail.com",
    avatar: "https://loremflickr.com/809/2476?lock=6445034684963916",
  },
  click: {
    id: "<id>",
    url: "https://flimsy-surface.net/",
    continent: "Africa",
    country: "Norway",
    city: "Fort Candidafurt",
    device: "Desktop",
    browser: "Safari",
    os: "Android",
    referer: "overcooked-celsius.info",
    refererUrl: "https://somber-masterpiece.net",
    ip: "670c:faf9:a39e:906e:89c5:dcb5:1630:6be8",
  },
  link: {
    id: "<id>",
    domain: "downright-metal.net",
    key: "<key>",
    url: "https://timely-dividend.name",
    externalId: "<id>",
    identifier: "<value>",
    expiresAt: "<value>",
    expiredUrl: "https://gloomy-pocket-watch.com/",
    password: "mEZI_sqjgb38l_s",
    title: "<value>",
    description: "definite unit supplier jazz gladly aha eyeliner meh",
    image: "https://picsum.photos/seed/n3CVoY/2365/2719",
    video: "https://picsum.videos/seed/FDbceJuF/2391/845",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "pink",
      },
    ],
    webhookIds: [
      "<value>",
    ],
    comments:
      "shush while gentle worth aha formal loaf gadzooks necklace mmm indeed but exacerbate accessorise",
    shortLink: "https://ruddy-hygienic.org/",
    qrCode: "https://flawed-gift.org",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "<value>",
    updatedAt: "<value>",
    projectId: "<id>",
  },
  sale: {
    amount: 5792.58,
    currency: "Rupiah",
    paymentProcessor: "<value>",
    invoiceId: "<id>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `eventName`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `customer`                                                                                 | [components.SaleCreatedEventCustomer](../../models/components/salecreatedeventcustomer.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `click`                                                                                    | [components.SaleCreatedEventClick](../../models/components/salecreatedeventclick.md)       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `link`                                                                                     | [components.SaleCreatedEventLink](../../models/components/salecreatedeventlink.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `sale`                                                                                     | [components.SaleCreatedEventSale](../../models/components/salecreatedeventsale.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |