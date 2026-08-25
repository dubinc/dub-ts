# Lead

The lead event object to associate the commission with.

## Example Usage

```typescript
import { Lead } from "dub/models/operations";

let value: Lead = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `eventName`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | The name of the lead event to track. If not provided, defaults to 'Sign up'. | Sign up                                                                      |
| `metadata`                                                                   | Record<string, *any*>                                                        | :heavy_minus_sign:                                                           | Additional metadata to be stored with the lead event. Max 10,000 characters. |                                                                              |