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
    });

    // Handle the result
    console.log(result);
}

run();

```

```typescript
import { Dub } from "dub";

const dub = new Dub({
    token: "DUB_API_KEY",
    workspaceId: "<value>",
});

async function run() {
    const result = await dub.links.upsert({
        url: "https://google/com",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->