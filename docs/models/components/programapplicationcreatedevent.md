# ProgramApplicationCreatedEvent

Triggered when a partner submits an application to join a program.

## Example Usage

```typescript
import { ProgramApplicationCreatedEvent } from "dub/models/components";

let value: ProgramApplicationCreatedEvent = {
  id: "<id>",
  event: "program_application.created",
  createdAt: "1734668537256",
  data: {
    id: "<id>",
    createdAt: "1726367512089",
    partner: {
      id: "<id>",
      name: "<value>",
      companyName: "Padberg LLC",
      email: null,
      image: "https://picsum.photos/seed/LZRDzeKRf/1417/2335",
      country: "Morocco",
      status: "declined",
      networkStatus: "trusted",
      defaultPayoutMethod: null,
      payoutsEnabledAt: "<value>",
    },
    applicationFormData: [],
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `event`                                                                                                          | [components.ProgramApplicationCreatedEventEvent](../../models/components/programapplicationcreatedeventevent.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `createdAt`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `data`                                                                                                           | [components.ProgramApplicationCreatedEventData](../../models/components/programapplicationcreatedeventdata.md)   | :heavy_check_mark:                                                                                               | N/A                                                                                                              |