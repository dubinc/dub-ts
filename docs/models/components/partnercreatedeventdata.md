# PartnerCreatedEventData

## Example Usage

```typescript
import { PartnerCreatedEventData } from "dub/models/components";

let value: PartnerCreatedEventData = {
  id: "<id>",
  name: "<value>",
  email: "Mya_Cruickshank@gmail.com",
  image: "https://picsum.photos/seed/n80nKZsil/3477/248",
  country: "Belize",
  payoutsEnabledAt: "<value>",
  createdAt: "1725866879765",
  status: "invited",
  programId: "<id>",
  tenantId: "<id>",
  links: [
    {
      id: "<id>",
      domain: "posh-adrenalin.name",
      key: "<key>",
      shortLink: "https://meager-unblinking.biz",
      url: "https://defenseless-diver.biz",
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
| `payoutsEnabledAt`                                     | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
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