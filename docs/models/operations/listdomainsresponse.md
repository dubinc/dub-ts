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
      createdAt: "1737392601249",
      updatedAt: "1740036221431",
      registeredDomain: {
        id: "<id>",
        createdAt: "1717219088937",
        expiresAt: "1770170175455",
      },
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `result`                                                             | [components.DomainSchema](../../models/components/domainschema.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |