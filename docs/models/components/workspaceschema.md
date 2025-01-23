# WorkspaceSchema

## Example Usage

```typescript
import { WorkspaceSchema } from "dub/models/components";

let value: WorkspaceSchema = {
  id: "<id>",
  name: "<value>",
  slug: "<value>",
  inviteCode: "<value>",
  plan: "business extra",
  stripeId: "<id>",
  billingCycleStart: 3842.73,
  paymentFailedAt: "<value>",
  stripeConnectId: "<id>",
  usage: 7034.07,
  usageLimit: 3530.75,
  linksUsage: 1544.25,
  linksLimit: 3126.9,
  salesUsage: 8843.25,
  salesLimit: 9585.33,
  domainsLimit: 2075.12,
  tagsLimit: 7884.69,
  usersLimit: 2733.49,
  aiUsage: 8871.32,
  aiLimit: 1655.45,
  conversionEnabled: false,
  dotLinkClaimed: false,
  partnersEnabled: false,
  createdAt: "1727057691027",
  users: [
    {
      role: "owner",
    },
  ],
  domains: [
    {
      slug: "acme.com",
    },
  ],
  store: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `id`                                                                                                  | *string*                                                                                              | :heavy_check_mark:                                                                                    | The unique ID of the workspace.                                                                       |
| `name`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | The name of the workspace.                                                                            |
| `slug`                                                                                                | *string*                                                                                              | :heavy_check_mark:                                                                                    | The slug of the workspace.                                                                            |
| `logo`                                                                                                | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The logo of the workspace.                                                                            |
| `inviteCode`                                                                                          | *string*                                                                                              | :heavy_check_mark:                                                                                    | The invite code of the workspace.                                                                     |
| `plan`                                                                                                | [components.Plan](../../models/components/plan.md)                                                    | :heavy_check_mark:                                                                                    | The plan of the workspace.                                                                            |
| `stripeId`                                                                                            | *string*                                                                                              | :heavy_check_mark:                                                                                    | The Stripe ID of the workspace.                                                                       |
| `billingCycleStart`                                                                                   | *number*                                                                                              | :heavy_check_mark:                                                                                    | The date and time when the billing cycle starts for the workspace.                                    |
| `paymentFailedAt`                                                                                     | *string*                                                                                              | :heavy_check_mark:                                                                                    | The date and time when the payment failed for the workspace.                                          |
| `stripeConnectId`                                                                                     | *string*                                                                                              | :heavy_check_mark:                                                                                    | The Stripe Connect ID of the workspace.                                                               |
| `usage`                                                                                               | *number*                                                                                              | :heavy_check_mark:                                                                                    | The usage of the workspace.                                                                           |
| `usageLimit`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | The usage limit of the workspace.                                                                     |
| `linksUsage`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | The links usage of the workspace.                                                                     |
| `linksLimit`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | The links limit of the workspace.                                                                     |
| `salesUsage`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | The dollar amount of tracked revenue in the current billing cycle (in cents).                         |
| `salesLimit`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | The limit of tracked revenue in the current billing cycle (in cents).                                 |
| `domainsLimit`                                                                                        | *number*                                                                                              | :heavy_check_mark:                                                                                    | The domains limit of the workspace.                                                                   |
| `tagsLimit`                                                                                           | *number*                                                                                              | :heavy_check_mark:                                                                                    | The tags limit of the workspace.                                                                      |
| `usersLimit`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | The users limit of the workspace.                                                                     |
| `aiUsage`                                                                                             | *number*                                                                                              | :heavy_check_mark:                                                                                    | The AI usage of the workspace.                                                                        |
| `aiLimit`                                                                                             | *number*                                                                                              | :heavy_check_mark:                                                                                    | The AI limit of the workspace.                                                                        |
| `conversionEnabled`                                                                                   | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | Whether the workspace has conversion tracking enabled automatically for new links (d.to/conversions). |
| `dotLinkClaimed`                                                                                      | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | Whether the workspace has claimed a free .link domain. (dub.link/free)                                |
| `partnersEnabled`                                                                                     | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | Whether the workspace has Dub Partners enabled.                                                       |
| `createdAt`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | The date and time when the workspace was created.                                                     |
| `users`                                                                                               | [components.Users](../../models/components/users.md)[]                                                | :heavy_check_mark:                                                                                    | The role of the authenticated user in the workspace.                                                  |
| `domains`                                                                                             | [components.Domains](../../models/components/domains.md)[]                                            | :heavy_check_mark:                                                                                    | The domains of the workspace.                                                                         |
| `flags`                                                                                               | Record<string, *boolean*>                                                                             | :heavy_minus_sign:                                                                                    | The feature flags of the workspace, indicating which features are enabled.                            |
| `store`                                                                                               | Record<string, *any*>                                                                                 | :heavy_check_mark:                                                                                    | The miscellaneous key-value store of the workspace.                                                   |