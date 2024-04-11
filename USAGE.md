<!-- Start SDK Example Usage [usage] -->
```typescript
import { Dub } from "dub";

async function run() {
    const sdk = new Dub({
        token: "<YOUR_BEARER_TOKEN_HERE>",
        workspaceId: "<value>",
        projectSlug: "<value>",
    });

    const result = await sdk.links.list({
        tagIds: ["<value>"],
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->