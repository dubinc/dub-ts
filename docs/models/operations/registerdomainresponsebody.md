# RegisterDomainResponseBody

The domain was registered.

## Example Usage

```typescript
import { RegisterDomainResponseBody } from "dub/models/operations";

let value: RegisterDomainResponseBody = {
  domain: "noxious-lid.com",
  status: "<value>",
  expiration: 1375.78,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `domain`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | The domain name.                                                         |
| `status`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | The status of the domain registration.                                   |
| `expiration`                                                             | *number*                                                                 | :heavy_check_mark:                                                       | The expiration timestamp of the domain (Unix timestamp in milliseconds). |