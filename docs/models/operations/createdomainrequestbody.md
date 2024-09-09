# CreateDomainRequestBody

## Example Usage

```typescript
import { CreateDomainRequestBody } from "dub/models/operations";

let value: CreateDomainRequestBody = {
  slug: "acme.com",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `slug`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Name of the domain.                                                                                                | acme.com                                                                                                           |
| `expiredUrl`                                                                                                       | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Redirect users to a specific URL when any link under this domain has expired.                                      | https://acme.com/expired                                                                                           |
| `archived`                                                                                                         | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | Whether to archive this domain. `false` will unarchive a previously archived domain.                               | false                                                                                                              |
| `placeholder`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Provide context to your teammates in the link creation modal by showing them an example of a link to be shortened. | https://dub.co/help/article/what-is-dub                                                                            |