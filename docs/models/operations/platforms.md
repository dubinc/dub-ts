# Platforms

## Example Usage

```typescript
import { Platforms } from "dub/models/operations";

let value: Platforms = {
  type: "tiktok",
  identifier: "<value>",
  verifiedAt: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `type`                                                                                           | [operations.ListProgramApplicationsType](../../models/operations/listprogramapplicationstype.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `identifier`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `verifiedAt`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `subscribers`                                                                                    | *number*                                                                                         | :heavy_minus_sign:                                                                               | Subscribers or followers for social profiles, or domain rating for websites.                     |
| `posts`                                                                                          | *number*                                                                                         | :heavy_minus_sign:                                                                               | Number of posts on the profile.                                                                  |
| `views`                                                                                          | *number*                                                                                         | :heavy_minus_sign:                                                                               | Video views for YouTube, or impressions for other social profiles.                               |