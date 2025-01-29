# ListDomainsResponse

## Example Usage

```typescript
import { ListDomainsResponse } from "dub/models/operations";

let value: ListDomainsResponse = {
  result: [
    {
      id: "<id>",
      slug: "acme.com",
      placeholder: "https://dub.co/help/article/what-is-dub",
      expiredUrl: "https://acme.com/expired",
      notFoundUrl: "https://acme.com/not-found",
      logo: "<value>",
      createdAt: "1707744313634",
      updatedAt: "1738044269267",
      registeredDomain: {
        id: "<id>",
        createdAt: "1730968515082",
        expiresAt: "1766562632682",
      },
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `result`                                                             | [components.DomainSchema](../../models/components/domainschema.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |