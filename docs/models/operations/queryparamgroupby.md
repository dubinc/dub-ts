# QueryParamGroupBy

The parameter to group the analytics data points by. Defaults to 'count' if undefined.

## Example Usage

```typescript
import { QueryParamGroupBy } from "dub/models/operations";

let value: QueryParamGroupBy = "timeseries";
```

## Values

```typescript
"count" | "timeseries" | "continents" | "countries" | "cities" | "devices" | "browsers" | "os" | "referers" | "referer_urls" | "top_links" | "top_urls" | "trigger"
```