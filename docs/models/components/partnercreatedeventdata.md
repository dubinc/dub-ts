# PartnerCreatedEventData

## Example Usage

```typescript
import { PartnerCreatedEventData } from "dub/models/components";

let value: PartnerCreatedEventData = {
  id: "<id>",
  name: "<value>",
  email: "Jazlyn26@hotmail.com",
  image: "https://picsum.photos/seed/Ztf4pzuan/1402/493",
  country: "Turkmenistan",
  payoutsEnabled: false,
  createdAt: "1724008547494",
  status: "pending",
  programId: "<id>",
  tenantId: "<id>",
  links: [
    {
      id: "<id>",
      domain: "limping-going.com",
      key: "<key>",
      shortLink: "https://marvelous-monocle.info/",
      url: "https://stormy-populist.org/",
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
| `status`                                               | [components.Status](../../models/components/status.md) | :heavy_check_mark:                                     | N/A                                                    |
| `programId`                                            | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `tenantId`                                             | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `links`                                                | [components.Links](../../models/components/links.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `clicks`                                               | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `leads`                                                | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `sales`                                                | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `saleAmount`                                           | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `earnings`                                             | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `applicationId`                                        | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |