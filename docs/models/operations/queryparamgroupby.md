# QueryParamGroupBy

The parameter to group the analytics data points by. Defaults to 'count' if undefined.

## Example Usage

```typescript
import { QueryParamGroupBy } from "dub/models/operations";

let value: QueryParamGroupBy = "countries";
```

## Values

```typescript
"count" | "timeseries" | "continents" | "countries" | "cities" | "devices" | "browsers" | "os" | "referers" | "top_links" | "top_urls" | "trigger"
```