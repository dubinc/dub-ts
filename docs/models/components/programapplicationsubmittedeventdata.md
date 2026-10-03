# ProgramApplicationSubmittedEventData

## Example Usage

```typescript
import { ProgramApplicationSubmittedEventData } from "dub/models/components";

let value: ProgramApplicationSubmittedEventData = {
  id: "<id>",
  createdAt: "1735601212889",
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
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                     | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `createdAt`                                                                                                              | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `partner`                                                                                                                | [components.ProgramApplicationSubmittedEventPartner](../../models/components/programapplicationsubmittedeventpartner.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `applicationFormData`                                                                                                    | [components.ApplicationFormData](../../models/components/applicationformdata.md)[]                                       | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |