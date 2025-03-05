# CreatePartnerResponseBody

The created partner

## Example Usage

```typescript
import { CreatePartnerResponseBody } from "dub/models/operations";

let value: CreatePartnerResponseBody = {
  id: "<id>",
  name: "<value>",
  email: "Aimee_Gleason22@gmail.com",
  image: "https://loremflickr.com/3637/3250?lock=5183384200862309",
  country: "Canada",
  payoutsEnabled: false,
  createdAt: "1711858715641",
  status: "pending",
  programId: "<id>",
  tenantId: "<id>",
  links: [
    {
      id: "<id>",
      domain: "boiling-instructor.name",
      key: "<key>",
      shortLink: "https://utilized-nougat.name",
      url: "https://vain-word.com",
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `id`                                                   | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `name`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `email`                                                | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `image`                                                | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `description`                                          | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `country`                                              | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `payoutsEnabled`                                       | *boolean*                                              | :heavy_check_mark:                                     | N/A                                                    |
| `createdAt`                                            | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `status`                                               | [operations.Status](../../models/operations/status.md) | :heavy_check_mark:                                     | N/A                                                    |
| `programId`                                            | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `tenantId`                                             | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `links`                                                | [operations.Links](../../models/operations/links.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `clicks`                                               | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `leads`                                                | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `sales`                                                | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `saleAmount`                                           | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `earnings`                                             | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `applicationId`                                        | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |