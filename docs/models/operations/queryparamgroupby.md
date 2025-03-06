# QueryParamGroupBy

The parameter to group the analytics data points by. Defaults to `count` if undefined.

## Example Usage

```typescript
import { QueryParamGroupBy } from "dub/models/operations";

let value: QueryParamGroupBy = "browsers";
```

## Values

```typescript
"count" | "timeseries" | "continents" | "regions" | "countries" | "cities" | "devices" | "browsers" | "os" | "trigger" | "triggers" | "referers" | "referer_urls" | "top_links" | "top_urls" | "utm_sources" | "utm_mediums" | "utm_campaigns" | "utm_terms" | "utm_contents"
```