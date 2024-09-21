# WorkspaceSchema

## Example Usage

```typescript
import { WorkspaceSchema } from "dub/models/components";

let value: WorkspaceSchema = {
  id: "<id>",
  name: "<value>",
  slug: "<value>",
  plan: "enterprise",
  stripeId: "<value>",
  billingCycleStart: 1032.98,
  stripeConnectId: "<value>",
  inviteCode: "<value>",
  usage: 8671.67,
  usageLimit: 291.90,
  linksUsage: 5349.17,
  linksLimit: 4042.44,
  salesUsage: 5241.84,
  salesLimit: 3651.00,
  domainsLimit: 1905.67,
  tagsLimit: 191.23,
  usersLimit: 5181.50,
  aiUsage: 8427.77,
  aiLimit: 3732.16,
  referralLinkId: "<value>",
  conversionEnabled: false,
  dotLinkClaimed: false,
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
| `plan`                                                                        | [components.Plan](../../models/components/plan.md)                            | :heavy_check_mark:                                                            | The plan of the workspace.                                                    |
| `stripeId`                                                                    | *string*                                                                      | :heavy_check_mark:                                                            | The Stripe ID of the workspace.                                               |
| `billingCycleStart`                                                           | *number*                                                                      | :heavy_check_mark:                                                            | The date and time when the billing cycle starts for the workspace.            |
| `stripeConnectId`                                                             | *string*                                                                      | :heavy_check_mark:                                                            | [BETA]: The Stripe Connect ID of the workspace.                               |
| `inviteCode`                                                                  | *string*                                                                      | :heavy_check_mark:                                                            | The invite code of the workspace.                                             |
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
| `referralLinkId`                                                              | *string*                                                                      | :heavy_check_mark:                                                            | The ID of the referral link of the workspace.                                 |
| `conversionEnabled`                                                           | *boolean*                                                                     | :heavy_check_mark:                                                            | Whether the workspace has conversion tracking enabled (d.to/conversions).     |
| `dotLinkClaimed`                                                              | *boolean*                                                                     | :heavy_check_mark:                                                            | Whether the workspace has claimed a free .link domain. (dub.link/free)        |
| `createdAt`                                                                   | *string*                                                                      | :heavy_check_mark:                                                            | The date and time when the workspace was created.                             |
| `users`                                                                       | [components.Users](../../models/components/users.md)[]                        | :heavy_check_mark:                                                            | The role of the authenticated user in the workspace.                          |
| `domains`                                                                     | [components.Domains](../../models/components/domains.md)[]                    | :heavy_check_mark:                                                            | The domains of the workspace.                                                 |
| `flags`                                                                       | Record<string, *boolean*>                                                     | :heavy_minus_sign:                                                            | The feature flags of the workspace, indicating which features are enabled.    |