# GetLinkInfoRequest

## Example Usage

```typescript
import { GetLinkInfoRequest } from "dub/models/operations";

let value: GetLinkInfoRequest = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `domain`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |                                                                               |
| `key`                                                                         | *string*                                                                      | :heavy_minus_sign:                                                            | The key of the link to retrieve. E.g. for `d.to/github`, the key is `github`. |                                                                               |
| `linkId`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | The unique ID of the short link.                                              | clux0rgak00011...                                                             |
| `externalId`                                                                  | *string*                                                                      | :heavy_minus_sign:                                                            | This is the ID of the link in the your database.                              | 123456                                                                        |