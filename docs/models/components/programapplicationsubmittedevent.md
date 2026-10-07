# ~~ProgramApplicationSubmittedEvent~~

Deprecated: Use `program_application.created` instead. Triggered when a partner submits an application to join a program.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { ProgramApplicationSubmittedEvent } from "dub/models/components";

let value: ProgramApplicationSubmittedEvent = {
  id: "<id>",
  event: "partner.application_submitted",
  createdAt: "1705224880695",
  data: {
    id: "<id>",
    createdAt: "1735601986063",
    partner: {
      id: "<id>",
      name: "<value>",
      companyName: "Schowalter - Effertz",
      email: null,
      image: "https://picsum.photos/seed/fhTk2nM/3197/754",
      country: "Macao",
      status: "declined",
    },
    applicationFormData: [
      {
        label: "<value>",
        value: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `event`                                                                                                              | [components.ProgramApplicationSubmittedEventEvent](../../models/components/programapplicationsubmittedeventevent.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `createdAt`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.ProgramApplicationSubmittedEventData](../../models/components/programapplicationsubmittedeventdata.md)   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |