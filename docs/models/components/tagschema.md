# TagSchema

## Example Usage

```typescript
import { TagSchema } from "dub/models/components";

let value: TagSchema = {
    id: "<id>",
    name: "<value>",
    color: "brown",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `id`                                                 | *string*                                             | :heavy_check_mark:                                   | The unique ID of the tag.                            |
| `name`                                               | *string*                                             | :heavy_check_mark:                                   | The name of the tag.                                 |
| `color`                                              | [components.Color](../../models/components/color.md) | :heavy_check_mark:                                   | The color of the tag.                                |