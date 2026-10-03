# ListProgramApplicationsResponseBody

## Example Usage

```typescript
import { ListProgramApplicationsResponseBody } from "dub/models/operations";

let value: ListProgramApplicationsResponseBody = {
  id: "<id>",
  createdAt: "1729830377868",
  partner: {
    id: "<id>",
    name: "<value>",
    companyName: "Zemlak, Keebler and Steuber",
    email: "Nils91@gmail.com",
    image: "https://picsum.photos/seed/PdSynIR/3571/1388",
    country: "Kuwait",
    status: "pending",
    networkStatus: "draft",
    defaultPayoutMethod: "connect",
    payoutsEnabledAt: "<value>",
  },
  applicationFormData: [],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `createdAt`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `partner`                                                                                              | [operations.ListProgramApplicationsPartner](../../models/operations/listprogramapplicationspartner.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `applicationFormData`                                                                                  | [operations.ApplicationFormData](../../models/operations/applicationformdata.md)[]                     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |