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
      createdAt: "1716551687619",
      updatedAt: "1737010299337",
      registeredDomain: {
        id: "<id>",
        createdAt: "1706692437923",
        expiresAt: "1744465816403",
      },
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `result`                                                             | [components.DomainSchema](../../models/components/domainschema.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |