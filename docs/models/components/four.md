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
      email: "Flo_Reynolds@yahoo.com",
      avatar: "https://loremflickr.com/3116/3182?lock=6943404518465259",
    },
    click: {
      id: "<id>",
      url: "https://coordinated-subsidy.info",
      continent: "<value>",
      country: "Kyrgyz Republic",
      city: "Kenyonfurt",
      device: "<value>",
      browser: "<value>",
      os: "<value>",
      referer: "<value>",
      ip: "221.160.102.106",
    },
    link: {
      id: "<id>",
      domain: "stunning-follower.biz",
      key: "<key>",
      externalId: "<value>",
      url: "https://ugly-tool.com/",
      expiresAt: "<value>",
      expiredUrl: "https://defensive-captain.org/",
      password: "sVCAh_ROvUoej5v",
      title: "<value>",
      description: "Automated empowering architecture",
      image: "https://loremflickr.com/1902/3280?lock=1359500694574422",
      video: "<value>",
      ios: "<value>",
      android: "<value>",
      geo: {},
      tagId: "<value>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "green",
        },
      ],
      comments: "<value>",
      shortLink: "https://cooperative-deduction.com",
      qrCode: "https://immense-experience.net",
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
      amount: 3359.78,
      currency: "Saudi Riyal",
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