# PartnerEnrolledEventData

## Example Usage

```typescript
import { PartnerEnrolledEventData } from "dub/models/components";

let value: PartnerEnrolledEventData = {
  id: "<id>",
  name: "<value>",
  email: "Luella_Streich@hotmail.com",
  image: "https://loremflickr.com/2147/1657?lock=6571640826873655",
  country: "Slovenia",
  payoutsEnabledAt: "<value>",
  createdAt: "1720882408284",
  status: "invited",
  programId: "<id>",
  tenantId: "<id>",
  links: [
    {
      id: "<id>",
      domain: "slight-dulcimer.name",
      key: "<key>",
      shortLink: "https://busy-tinderbox.org/",
      url: "https://crafty-academics.biz/",
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `email`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `image`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `description`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `country`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `payoutsEnabledAt`                                                                           | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `createdAt`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `status`                                                                                     | [components.Status](../../models/components/status.md)                                       | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `programId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `tenantId`                                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `links`                                                                                      | [components.PartnerEnrolledEventLink](../../models/components/partnerenrolledeventlink.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `clicks`                                                                                     | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `leads`                                                                                      | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `sales`                                                                                      | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `saleAmount`                                                                                 | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `earnings`                                                                                   | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `applicationId`                                                                              | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |