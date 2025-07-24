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
    amount: 3818.04,
    earnings: 5362.14,
    currency: "Dobra",
    status: "pending",
    invoiceId: "<id>",
    description:
      "in unearth whose notwithstanding store worse reboot very buzzing",
    quantity: 3318.84,
    createdAt: "1717922655598",
    updatedAt: "1735647472347",
    partner: {
      id: "<id>",
      name: "<value>",
      email: "Tanner_Goodwin36@yahoo.com",
      image: "https://loremflickr.com/887/2527?lock=8475978227242498",
      payoutsEnabledAt: "<value>",
      country: "Vanuatu",
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