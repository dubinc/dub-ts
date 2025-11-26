# PartnerApplicationSubmittedEvent

Triggered when a partner submits an application to join a program.

## Example Usage

```typescript
import { PartnerApplicationSubmittedEvent } from "dub/models/components";

let value: PartnerApplicationSubmittedEvent = {
  id: "<id>",
  event: "partner.application_submitted",
  createdAt: "1728987158922",
  data: {
    id: "<id>",
    createdAt: "1723110420262",
    partner: {
      id: "<id>",
      name: "<value>",
      companyName: "Gottlieb LLC",
      email: "Kraig17@hotmail.com",
      image: "https://picsum.photos/seed/9eRYaSj/2354/2034",
      country: "Sierra Leone",
      status: "approved",
    },
    applicationFormData: [
      {
        label: "<value>",
        value: null,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `event`                                                                                                              | [components.PartnerApplicationSubmittedEventEvent](../../models/components/partnerapplicationsubmittedeventevent.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `createdAt`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.PartnerApplicationSubmittedEventData](../../models/components/partnerapplicationsubmittedeventdata.md)   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |