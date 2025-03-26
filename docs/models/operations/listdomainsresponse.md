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
      createdAt: "1730135158355",
      updatedAt: "1742909277192",
      registeredDomain: {
        id: "<id>",
        createdAt: "1739678803252",
        expiresAt: "1761630140742",
      },
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `result`                                                             | [components.DomainSchema](../../models/components/domainschema.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |