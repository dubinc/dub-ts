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
      email: "Bessie.Rosenbaum@gmail.com",
      avatar: "https://picsum.photos/seed/zC4XwN3qfg/1543/2126",
    },
    click: {
      id: "<id>",
      url: "https://posh-hunger.com",
      continent: "South America",
      country: "Vanuatu",
      city: "North Justina",
      device: "Mobile",
      browser: "Safari",
      os: "Windows Phone",
      referer: "frozen-filter.org",
      refererUrl: "https://competent-digestive.biz/",
      ip: "118.234.171.18",
    },
    link: {
      id: "<id>",
      domain: "accurate-dulcimer.info",
      key: "<key>",
      externalId: "<id>",
      url: "https://wide-eyed-government.net",
      expiresAt: "<value>",
      expiredUrl: "https://silver-ownership.com",
      password: "w4qcCSTdRjG9Wv1",
      title: "<value>",
      description: "rudely aware within reckless in",
      image: "https://picsum.photos/seed/YfIvt/2483/3332",
      video: "https://loremflickr.com/976/2888?lock=8921210309936519",
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
      comments:
        "deployment circa trolley from deduction yummy pish cluttered whose manipulate sweet for badly",
      shortLink: "https://digital-cutover.info/",
      qrCode: "https://white-forage.org/",
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
      amount: 1810.42,
      currency: "Singapore Dollar",
      paymentProcessor: "<value>",
      invoiceId: "<id>",
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