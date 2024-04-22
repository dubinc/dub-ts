<!-- Start SDK Example Usage [usage] -->
```typescript
import { Dub } from "dub";

const dub = new Dub({
    token: "DUB_API_KEY",
    workspaceId: "<value>",
});

async function run() {
    const result = await dub.links.create({
        url: "https://google/com",
        tagIds: ["clux0rgak00011..."],
        tagNames: "<value>",
        geo: {},
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->