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
  billingCycleStart: 5017.73,
  paymentFailedAt: "<value>",
  stripeConnectId: "<id>",
  payoutMethodId: "<id>",
  usage: 8115.18,
  usageLimit: 4760.84,
  linksUsage: 5231.56,
  linksLimit: 2505.21,
  salesUsage: 6050.43,
  salesLimit: 3029.05,
  domainsLimit: 5772.84,
  tagsLimit: 1696.78,
  usersLimit: 1594.69,
  aiUsage: 4170.30,
  aiLimit: 4268.20,
  conversionEnabled: false,
  dotLinkClaimed: false,
  partnersEnabled: false,
  createdAt: "<value>",
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
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `id`                                                                          | *string*                                                                      | :heavy_check_mark:                                                            | The unique ID of the workspace.                                               |
| `name`                                                                        | *string*                                                                      | :heavy_check_mark:                                                            | The name of the workspace.                                                    |
| `slug`                                                                        | *string*                                                                      | :heavy_check_mark:                                                            | The slug of the workspace.                                                    |
| `logo`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | The logo of the workspace.                                                    |
| `inviteCode`                                                                  | *string*                                                                      | :heavy_check_mark:                                                            | The invite code of the workspace.                                             |
| `plan`                                                                        | [components.Plan](../../models/components/plan.md)                            | :heavy_check_mark:                                                            | The plan of the workspace.                                                    |
| `stripeId`                                                                    | *string*                                                                      | :heavy_check_mark:                                                            | The Stripe ID of the workspace.                                               |
| `billingCycleStart`                                                           | *number*                                                                      | :heavy_check_mark:                                                            | The date and time when the billing cycle starts for the workspace.            |
| `paymentFailedAt`                                                             | *string*                                                                      | :heavy_check_mark:                                                            | The date and time when the payment failed for the workspace.                  |
| `stripeConnectId`                                                             | *string*                                                                      | :heavy_check_mark:                                                            | [BETA – Dub Conversions]: The Stripe Connect ID of the workspace.             |
| `payoutMethodId`                                                              | *string*                                                                      | :heavy_check_mark:                                                            | [BETA – Dub Partners]: The ID of the payment method for partner payouts.      |
| `usage`                                                                       | *number*                                                                      | :heavy_check_mark:                                                            | The usage of the workspace.                                                   |
| `usageLimit`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | The usage limit of the workspace.                                             |
| `linksUsage`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | The links usage of the workspace.                                             |
| `linksLimit`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | The links limit of the workspace.                                             |
| `salesUsage`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | The dollar amount of tracked revenue in the current billing cycle (in cents). |
| `salesLimit`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | The limit of tracked revenue in the current billing cycle (in cents).         |
| `domainsLimit`                                                                | *number*                                                                      | :heavy_check_mark:                                                            | The domains limit of the workspace.                                           |
| `tagsLimit`                                                                   | *number*                                                                      | :heavy_check_mark:                                                            | The tags limit of the workspace.                                              |
| `usersLimit`                                                                  | *number*                                                                      | :heavy_check_mark:                                                            | The users limit of the workspace.                                             |
| `aiUsage`                                                                     | *number*                                                                      | :heavy_check_mark:                                                            | The AI usage of the workspace.                                                |
| `aiLimit`                                                                     | *number*                                                                      | :heavy_check_mark:                                                            | The AI limit of the workspace.                                                |
| `conversionEnabled`                                                           | *boolean*                                                                     | :heavy_check_mark:                                                            | Whether the workspace has conversion tracking enabled (d.to/conversions).     |
| `dotLinkClaimed`                                                              | *boolean*                                                                     | :heavy_check_mark:                                                            | Whether the workspace has claimed a free .link domain. (dub.link/free)        |
| `partnersEnabled`                                                             | *boolean*                                                                     | :heavy_check_mark:                                                            | Whether the workspace has Dub Partners enabled.                               |
| `createdAt`                                                                   | *string*                                                                      | :heavy_check_mark:                                                            | The date and time when the workspace was created.                             |
| `users`                                                                       | [components.Users](../../models/components/users.md)[]                        | :heavy_check_mark:                                                            | The role of the authenticated user in the workspace.                          |
| `domains`                                                                     | [components.Domains](../../models/components/domains.md)[]                    | :heavy_check_mark:                                                            | The domains of the workspace.                                                 |
| `flags`                                                                       | Record<string, *boolean*>                                                     | :heavy_minus_sign:                                                            | The feature flags of the workspace, indicating which features are enabled.    |