# WorkspaceSchema

## Example Usage

```typescript
import { WorkspaceSchema } from "dub/models/components";

let value: WorkspaceSchema = {
    id: "<id>",
    name: "<value>",
    slug: "<value>",
    usage: 3015.75,
    usageLimit: 7160.75,
    linksUsage: 6601.74,
    linksLimit: 2879.91,
    domainsLimit: 2900.77,
    tagsLimit: 3834.62,
    usersLimit: 6180.16,
    plan: "business max",
    stripeId: "<value>",
    billingCycleStart: 4287.69,
    stripeConnectId: "<value>",
    createdAt: "<value>",
    users: [
        {
            role: "member",
        },
    ],
    domains: [
        {
            slug: "acme.com",
        },
    ],
    inviteCode: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | The unique ID of the workspace.                                            |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | The name of the workspace.                                                 |
| `slug`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | The slug of the workspace.                                                 |
| `logo`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | The logo of the workspace.                                                 |
| `usage`                                                                    | *number*                                                                   | :heavy_check_mark:                                                         | The usage of the workspace.                                                |
| `usageLimit`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | The usage limit of the workspace.                                          |
| `linksUsage`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | The links usage of the workspace.                                          |
| `linksLimit`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | The links limit of the workspace.                                          |
| `domainsLimit`                                                             | *number*                                                                   | :heavy_check_mark:                                                         | The domains limit of the workspace.                                        |
| `tagsLimit`                                                                | *number*                                                                   | :heavy_check_mark:                                                         | The tags limit of the workspace.                                           |
| `usersLimit`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | The users limit of the workspace.                                          |
| `plan`                                                                     | [components.Plan](../../models/components/plan.md)                         | :heavy_check_mark:                                                         | The plan of the workspace.                                                 |
| `stripeId`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | The Stripe ID of the workspace.                                            |
| `billingCycleStart`                                                        | *number*                                                                   | :heavy_check_mark:                                                         | The date and time when the billing cycle starts for the workspace.         |
| `stripeConnectId`                                                          | *string*                                                                   | :heavy_check_mark:                                                         | [BETA]: The Stripe Connect ID of the workspace.                            |
| `createdAt`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | The date and time when the workspace was created.                          |
| `users`                                                                    | [components.Users](../../models/components/users.md)[]                     | :heavy_check_mark:                                                         | The role of the authenticated user in the workspace.                       |
| `domains`                                                                  | [components.Domains](../../models/components/domains.md)[]                 | :heavy_check_mark:                                                         | The domains of the workspace.                                              |
| `inviteCode`                                                               | *string*                                                                   | :heavy_check_mark:                                                         | The invite code of the workspace.                                          |
| `flags`                                                                    | Record<string, *boolean*>                                                  | :heavy_minus_sign:                                                         | The feature flags of the workspace, indicating which features are enabled. |