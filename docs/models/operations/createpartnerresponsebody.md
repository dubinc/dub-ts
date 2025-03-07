# CreatePartnerResponseBody

The created partner

## Example Usage

```typescript
import { CreatePartnerResponseBody } from "dub/models/operations";

let value: CreatePartnerResponseBody = {
  id: "<id>",
  name: "<value>",
  email: "Cortney.Pollich28@yahoo.com",
  image: "https://picsum.photos/seed/nugmAds/873/152",
  country: "Mexico",
  payoutsEnabled: false,
  createdAt: "1714135972989",
  status: "approved",
  programId: "<id>",
  tenantId: "<id>",
  links: [
    {
      id: "<id>",
      domain: "next-guide.net",
      key: "<key>",
      shortLink: "https://limp-slime.com/",
      url: "https://kaleidoscopic-invite.name",
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