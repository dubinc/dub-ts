# LeadCreatedEventDataLink

## Example Usage

```typescript
import { LeadCreatedEventDataLink } from "dub/models/components";

let value: LeadCreatedEventDataLink = {
  id: "<id>",
  domain: "those-thorn.info",
  key: "<key>",
  shortLink: "https://defensive-scout.org",
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