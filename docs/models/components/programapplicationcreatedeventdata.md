# ProgramApplicationCreatedEventData

## Example Usage

```typescript
import { ProgramApplicationCreatedEventData } from "dub/models/components";

let value: ProgramApplicationCreatedEventData = {
  id: "<id>",
  createdAt: "1734425282048",
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
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                           | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `createdAt`                                                                                                                                    | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `partner`                                                                                                                                      | [components.ProgramApplicationCreatedEventPartner](../../models/components/programapplicationcreatedeventpartner.md)                           | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `applicationFormData`                                                                                                                          | [components.ProgramApplicationCreatedEventApplicationFormData](../../models/components/programapplicationcreatedeventapplicationformdata.md)[] | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |