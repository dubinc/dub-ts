<!-- Start SDK Example Usage [usage] -->
```typescript
import { Dub } from "dub";

const dub = new Dub({
  token: "DUB_API_KEY",
});

async function run() {
  const result = await dub.links.create();

  console.log(result);
}

run();

```

```typescript
import { Dub } from "dub";

const dub = new Dub({
  token: "DUB_API_KEY",
});

async function run() {
  const result = await dub.links.upsert();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->