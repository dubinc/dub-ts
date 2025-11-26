# PartnerApplicationSubmittedEventData

## Example Usage

```typescript
import { PartnerApplicationSubmittedEventData } from "dub/models/components";

let value: PartnerApplicationSubmittedEventData = {
  id: "<id>",
  createdAt: "1726165178265",
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
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                     | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `createdAt`                                                                                                              | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `partner`                                                                                                                | [components.PartnerApplicationSubmittedEventPartner](../../models/components/partnerapplicationsubmittedeventpartner.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `applicationFormData`                                                                                                    | [components.ApplicationFormData](../../models/components/applicationformdata.md)[]                                       | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |