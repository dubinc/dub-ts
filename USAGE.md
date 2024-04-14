<!-- Start SDK Example Usage [usage] -->
```typescript
import { Dub } from "dub";

const dub = new Dub({
    token: "<YOUR_BEARER_TOKEN_HERE>",
    workspaceId: "<value>",
});

async function run() {
    const result = await dub.links.list({
        tagIds: ["<value>"],
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->