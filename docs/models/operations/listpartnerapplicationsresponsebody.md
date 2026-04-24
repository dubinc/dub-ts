# ListPartnerApplicationsResponseBody

## Example Usage

```typescript
import { ListPartnerApplicationsResponseBody } from "dub/models/operations";

let value: ListPartnerApplicationsResponseBody = {
  id: "<id>",
  createdAt: "1723593645141",
  partner: {
    id: "<id>",
    name: "<value>",
    companyName: "Cruickshank - White",
    email: "Wilfred84@gmail.com",
    image: "https://loremflickr.com/3107/532?lock=8302887421204714",
    country: "Kyrgyz Republic",
    status: "rejected",
  },
  applicationFormData: [],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `createdAt`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `partner`                                                                                              | [operations.ListPartnerApplicationsPartner](../../models/operations/listpartnerapplicationspartner.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `applicationFormData`                                                                                  | [operations.ApplicationFormData](../../models/operations/applicationformdata.md)[]                     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |