<!-- Start SDK Example Usage [usage] -->
```typescript
import { Dub } from "dub";

async function run() {
    const sdk = new Dub({
        workspaceId: "<value>",
        projectSlug: "<value>",
    });

    const operationSecurity = "<YOUR_BEARER_TOKEN_HERE>";

    const result = await sdk.links.list(
        {
            tagIds: ["<value>"],
        },
        operationSecurity
    );

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->