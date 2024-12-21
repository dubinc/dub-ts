# GetCustomerLink

## Example Usage

```typescript
import { GetCustomerLink } from "dub/models/operations";

let value: GetCustomerLink = {
  id: "<id>",
  domain: "dramatic-knickers.org",
  key: "<key>",
  shortLink: "https://grizzled-event.name",
  programId: "<id>",
};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                            | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | The unique ID of the short link.                                                                                                                |
| `domain`                                                                                                                                        | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | The domain of the short link. If not provided, the primary domain for the workspace will be used (or `dub.sh` if the workspace has no domains). |
| `key`                                                                                                                                           | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | The short link slug. If not provided, a random 7-character slug will be generated.                                                              |
| `shortLink`                                                                                                                                     | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | The full URL of the short link, including the https protocol (e.g. `https://dub.sh/try`).                                                       |
| `programId`                                                                                                                                     | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | The ID of the program the short link is associated with.                                                                                        |