# QueryParamGroupBy

The parameter to group the analytics data points by. Defaults to `count` if undefined. Note that `trigger` is deprecated (use `triggers` instead), but kept for backwards compatibility.

## Example Usage

```typescript
import { QueryParamGroupBy } from "dub/models/operations";

let value: QueryParamGroupBy = "regions";
```

## Values

```typescript
"count" | "timeseries" | "continents" | "regions" | "countries" | "cities" | "devices" | "browsers" | "os" | "trigger" | "triggers" | "referers" | "referer_urls" | "top_links" | "top_urls"
```