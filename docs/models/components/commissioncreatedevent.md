# CommissionCreatedEvent

Triggered when a commission is created for a partner.

## Example Usage

```typescript
import { CommissionCreatedEvent } from "dub/models/components";

let value: CommissionCreatedEvent = {
  id: "<id>",
  event: "commission.created",
  createdAt: "1708661168082",
  data: {
    id: "cm_1JVR7XRCSR0EDBAF39FZ4PMYE",
    type: "lead",
    amount: 5362.14,
    earnings: 8017.64,
    currency: "Taka",
    status: "canceled",
    invoiceId: "<id>",
    description: "oh pointed foretell norm",
    quantity: 9144.01,
    metadata: {},
    createdAt: "1733923320586",
    updatedAt: "1735646409906",
    partner: {
      id: "<id>",
      name: "<value>",
      email: "Rowena95@hotmail.com",
      image: "https://picsum.photos/seed/8GV3zH5uV/3049/5",
      payoutsEnabledAt: "<value>",
      country: "Tajikistan",
      totalClicks: 5726.54,
      totalLeads: 8652.1,
      totalConversions: 8447.98,
      totalSales: 991.26,
      totalSaleAmount: 3318.84,
      totalCommissions: 4366.14,
    },
    link: {
      id: "<id>",
      shortLink: "https://likable-thyme.org/",
      domain: "firsthand-swine.info",
      key: "<key>",
    },
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `event`                                                                                          | [components.CommissionCreatedEventEvent](../../models/components/commissioncreatedeventevent.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `createdAt`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `data`                                                                                           | [components.CommissionCreatedEventData](../../models/components/commissioncreatedeventdata.md)   | :heavy_check_mark:                                                                               | N/A                                                                                              |