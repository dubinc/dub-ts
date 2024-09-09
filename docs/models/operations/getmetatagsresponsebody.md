# GetMetatagsResponseBody

The retrieved metatags

## Example Usage

```typescript
import { GetMetatagsResponseBody } from "dub/models/operations";

let value: GetMetatagsResponseBody = {
  title: "Dub.co - Link Management for Modern Marketing Teams",
  description: "Dub.co is the open-source link management infrastructure ...",
  image: "https://assets.dub.co/thumbnail.jpg",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `title`                                                      | *string*                                                     | :heavy_check_mark:                                           | The meta title tag for the URL.                              | Dub.co - Link Management for Modern Marketing Teams          |
| `description`                                                | *string*                                                     | :heavy_check_mark:                                           | The meta description tag for the URL.                        | Dub.co is the open-source link management infrastructure ... |
| `image`                                                      | *string*                                                     | :heavy_check_mark:                                           | The OpenGraph image for the URL.                             | https://assets.dub.co/thumbnail.jpg                          |