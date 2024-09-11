# Four

## Example Usage

```typescript
import { Four } from "dub/models/components";

let value: Four = {
  id: "<id>",
  event: "sale.created",
  createdAt: "<value>",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      name: "<value>",
      email: "Dasia.Morar52@gmail.com",
      avatar: "https://loremflickr.com/640/480",
    },
    click: {
      id: "<id>",
      url: "http://majestic-hippopotamus.name",
      continent: "<value>",
      country: "Bahrain",
      city: "Demondtown",
      device: "<value>",
      browser: "<value>",
      os: "<value>",
      referer: "<value>",
      ip: "56.148.64.197",
    },
    link: {
      id: "<id>",
      domain: "common-garage.com",
      key: "<key>",
      externalId: "<value>",
      url: "http://chief-wifi.name",
      expiresAt: "<value>",
      expiredUrl: "http://winged-gall-bladder.org",
      password: "G0omOCkm7a_E8yR",
      title: "<value>",
      description: "Synchronised full-range initiative",
      image: "https://loremflickr.com/640/480",
      video: "<value>",
      ios: "<value>",
      android: "<value>",
      geo: {},
      tagId: "<value>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "blue",
        },
      ],
      comments: "<value>",
      shortLink: "http://flaky-softball.net",
      qrCode: "https://immense-icing.info",
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
      projectId: "<value>",
    },
    sale: {
      amount: 9689.04,
      currency: "Hryvnia",
      paymentProcessor: "<value>",
      invoiceId: "<value>",
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `event`                                                                        | [components.WebhookEvent4Event](../../models/components/webhookevent4event.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [components.WebhookEvent4Data](../../models/components/webhookevent4data.md)   | :heavy_check_mark:                                                             | N/A                                                                            |