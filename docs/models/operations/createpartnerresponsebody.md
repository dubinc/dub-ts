# CreatePartnerResponseBody

The created partner

## Example Usage

```typescript
import { CreatePartnerResponseBody } from "dub/models/operations";

let value: CreatePartnerResponseBody = {
  id: "<id>",
  name: "<value>",
  email: "Ellie59@hotmail.com",
  image: "https://picsum.photos/seed/dMa8Wlupt4/2565/2570",
  country: "Cote d'Ivoire",
  payoutsEnabledAt: "<value>",
  createdAt: "1716461103869",
  status: "invited",
  programId: "<id>",
  tenantId: "<id>",
  links: [
    {
      id: "<id>",
      domain: "dense-unique.org",
      key: "<key>",
      shortLink: "https://better-depot.biz",
      url: "https://nutritious-masterpiece.net",
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `email`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `image`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `description`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `country`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `payoutsEnabledAt`                                                             | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `status`                                                                       | [operations.Status](../../models/operations/status.md)                         | :heavy_check_mark:                                                             | N/A                                                                            |
| `programId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `tenantId`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `links`                                                                        | [operations.CreatePartnerLink](../../models/operations/createpartnerlink.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `clicks`                                                                       | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `leads`                                                                        | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `sales`                                                                        | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `saleAmount`                                                                   | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `earnings`                                                                     | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `applicationId`                                                                | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |