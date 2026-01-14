# CommissionCreatedEventLink

## Example Usage

```typescript
import { CommissionCreatedEventLink } from "dub/models/components";

let value: CommissionCreatedEventLink = {
  id: "<id>",
  shortLink: "https://rich-freckle.name/",
  domain: "delicious-plumber.org",
  key: "<key>",
};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                            | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | The unique ID of the short link.                                                                                                                |
| `shortLink`                                                                                                                                     | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | The full URL of the short link, including the https protocol (e.g. `https://dub.sh/try`).                                                       |
| `domain`                                                                                                                                        | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | The domain of the short link. If not provided, the primary domain for the workspace will be used (or `dub.sh` if the workspace has no domains). |
| `key`                                                                                                                                           | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | The short link slug. If not provided, a random 7-character slug will be generated.                                                              |