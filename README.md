<div align="center">
  <img src="https://github.com/dubinc/dub/assets/28986134/3815d859-afaa-48f9-a9b3-c09964e4d404" alt="Dub.co TypeScript SDK to interact with APIs.">
  <h3>Dub.co TypeScript SDK</h3>
  <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
  </a>
</div>

<br/>

Learn more about the Dub.co TypeScript SDK in the [official documentation](https://dub.co/docs/sdks/typescript/overview).

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Authentication](#authentication)
  * [Retries](#retries)
  * [Pagination](#pagination)
  * [Standalone functions](#standalone-functions)
  * [Debugging](#debugging)
* [Development](#development)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add dub
```

### PNPM

```bash
pnpm add dub
```

### Bun

```bash
bun add dub
```

### Yarn

```bash
yarn add dub zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "Dub": {
      "command": "npx",
      "args": [
        "-y", "--package", "dub",
        "--",
        "mcp", "start",
        "--api-token", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "Dub": {
      "command": "npx",
      "args": [
        "-y", "--package", "dub",
        "--",
        "mcp", "start",
        "--api-token", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package dub -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example 1

```typescript
import { Dub } from "dub";

const dub = new Dub({
  token: "DUB_API_KEY",
});

async function run() {
  const result = await dub.links.create();

  // Handle the result
  console.log(result);
}

run();

```

### Example 2

```typescript
import { Dub } from "dub";

const dub = new Dub({
  token: "DUB_API_KEY",
});

async function run() {
  const result = await dub.links.upsert();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [analytics](docs/sdks/analytics/README.md)

* [retrieve](docs/sdks/analytics/README.md#retrieve) - Retrieve analytics for a link, a domain, or the authenticated workspace.

### [customers](docs/sdks/customers/README.md)

* [list](docs/sdks/customers/README.md#list) - Retrieve a list of customers
* [~~create~~](docs/sdks/customers/README.md#create) - Create a customer :warning: **Deprecated**
* [get](docs/sdks/customers/README.md#get) - Retrieve a customer
* [update](docs/sdks/customers/README.md#update) - Update a customer
* [delete](docs/sdks/customers/README.md#delete) - Delete a customer

### [domains](docs/sdks/domains/README.md)

* [create](docs/sdks/domains/README.md#create) - Create a domain
* [list](docs/sdks/domains/README.md#list) - Retrieve a list of domains
* [update](docs/sdks/domains/README.md#update) - Update a domain
* [delete](docs/sdks/domains/README.md#delete) - Delete a domain


### [embedTokens](docs/sdks/embedtokens/README.md)

* [referrals](docs/sdks/embedtokens/README.md#referrals) - Create a new referrals embed token

### [events](docs/sdks/events/README.md)

* [list](docs/sdks/events/README.md#list) - Retrieve a list of events

### [folders](docs/sdks/folders/README.md)

* [create](docs/sdks/folders/README.md#create) - Create a new folder
* [list](docs/sdks/folders/README.md#list) - Retrieve a list of folders
* [update](docs/sdks/folders/README.md#update) - Update a folder
* [delete](docs/sdks/folders/README.md#delete) - Delete a folder

### [links](docs/sdks/links/README.md)

* [create](docs/sdks/links/README.md#create) - Create a new link
* [list](docs/sdks/links/README.md#list) - Retrieve a list of links
* [count](docs/sdks/links/README.md#count) - Retrieve links count
* [get](docs/sdks/links/README.md#get) - Retrieve a link
* [update](docs/sdks/links/README.md#update) - Update a link
* [delete](docs/sdks/links/README.md#delete) - Delete a link
* [createMany](docs/sdks/links/README.md#createmany) - Bulk create links
* [updateMany](docs/sdks/links/README.md#updatemany) - Bulk update links
* [deleteMany](docs/sdks/links/README.md#deletemany) - Bulk delete links
* [upsert](docs/sdks/links/README.md#upsert) - Upsert a link

### [partners](docs/sdks/partners/README.md)

* [create](docs/sdks/partners/README.md#create) - Create a new partner
* [createLink](docs/sdks/partners/README.md#createlink) - Create a link for a partner
* [retrieveLinks](docs/sdks/partners/README.md#retrievelinks) - Retrieve a partner's links.
* [upsertLink](docs/sdks/partners/README.md#upsertlink) - Upsert a link for a partner
* [analytics](docs/sdks/partners/README.md#analytics) - Retrieve analytics for a partner
* [updateSale](docs/sdks/partners/README.md#updatesale) - Update a sale for a partner.

### [qrCodes](docs/sdks/qrcodes/README.md)

* [get](docs/sdks/qrcodes/README.md#get) - Retrieve a QR code

### [tags](docs/sdks/tags/README.md)

* [create](docs/sdks/tags/README.md#create) - Create a new tag
* [list](docs/sdks/tags/README.md#list) - Retrieve a list of tags
* [update](docs/sdks/tags/README.md#update) - Update a tag
* [delete](docs/sdks/tags/README.md#delete) - Delete a tag

### [track](docs/sdks/track/README.md)

* [lead](docs/sdks/track/README.md#lead) - Track a lead
* [sale](docs/sdks/track/README.md#sale) - Track a sale

### [workspaces](docs/sdks/workspaces/README.md)

* [get](docs/sdks/workspaces/README.md#get) - Retrieve a workspace
* [update](docs/sdks/workspaces/README.md#update) - Update a workspace

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `create` method may throw the following errors:

| Error Type                 | Status Code | Content Type     |
| -------------------------- | ----------- | ---------------- |
| errors.BadRequest          | 400         | application/json |
| errors.Unauthorized        | 401         | application/json |
| errors.Forbidden           | 403         | application/json |
| errors.NotFound            | 404         | application/json |
| errors.Conflict            | 409         | application/json |
| errors.InviteExpired       | 410         | application/json |
| errors.UnprocessableEntity | 422         | application/json |
| errors.RateLimitExceeded   | 429         | application/json |
| errors.InternalServerError | 500         | application/json |
| errors.SDKError            | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `SDKError`.

```typescript
import { Dub } from "dub";
import {
  BadRequest,
  Conflict,
  Forbidden,
  InternalServerError,
  InviteExpired,
  NotFound,
  RateLimitExceeded,
  SDKValidationError,
  Unauthorized,
  UnprocessableEntity,
} from "dub/models/errors";

const dub = new Dub({
  token: "DUB_API_KEY",
});

async function run() {
  let result;
  try {
    result = await dub.links.create();

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof BadRequest): {
        // Handle err.data$: BadRequestData
        console.error(err);
        return;
      }
      case (err instanceof Unauthorized): {
        // Handle err.data$: UnauthorizedData
        console.error(err);
        return;
      }
      case (err instanceof Forbidden): {
        // Handle err.data$: ForbiddenData
        console.error(err);
        return;
      }
      case (err instanceof NotFound): {
        // Handle err.data$: NotFoundData
        console.error(err);
        return;
      }
      case (err instanceof Conflict): {
        // Handle err.data$: ConflictData
        console.error(err);
        return;
      }
      case (err instanceof InviteExpired): {
        // Handle err.data$: InviteExpiredData
        console.error(err);
        return;
      }
      case (err instanceof UnprocessableEntity): {
        // Handle err.data$: UnprocessableEntityData
        console.error(err);
        return;
      }
      case (err instanceof RateLimitExceeded): {
        // Handle err.data$: RateLimitExceededData
        console.error(err);
        return;
      }
      case (err instanceof InternalServerError): {
        // Handle err.data$: InternalServerErrorData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Dub } from "dub";

const dub = new Dub({
  serverURL: "https://api.dub.co",
  token: "DUB_API_KEY",
});

async function run() {
  const result = await dub.links.create();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Dub } from "dub";
import { HTTPClient } from "dub/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Dub({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name    | Type | Scheme      |
| ------- | ---- | ----------- |
| `token` | http | HTTP Bearer |

To authenticate with the API the `token` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Dub } from "dub";

const dub = new Dub({
  token: "DUB_API_KEY",
});

async function run() {
  const result = await dub.links.create();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Dub } from "dub";

const dub = new Dub({
  token: "DUB_API_KEY",
});

async function run() {
  const result = await dub.links.create({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Dub } from "dub";

const dub = new Dub({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  token: "DUB_API_KEY",
});

async function run() {
  const result = await dub.links.create();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { Dub } from "dub";

const dub = new Dub({
  token: "DUB_API_KEY",
});

async function run() {
  const result = await dub.links.list();

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`analyticsRetrieve`](docs/sdks/analytics/README.md#retrieve) - Retrieve analytics for a link, a domain, or the authenticated workspace.
- [`customersDelete`](docs/sdks/customers/README.md#delete) - Delete a customer
- [`customersGet`](docs/sdks/customers/README.md#get) - Retrieve a customer
- [`customersList`](docs/sdks/customers/README.md#list) - Retrieve a list of customers
- [`customersUpdate`](docs/sdks/customers/README.md#update) - Update a customer
- [`domainsCreate`](docs/sdks/domains/README.md#create) - Create a domain
- [`domainsDelete`](docs/sdks/domains/README.md#delete) - Delete a domain
- [`domainsList`](docs/sdks/domains/README.md#list) - Retrieve a list of domains
- [`domainsUpdate`](docs/sdks/domains/README.md#update) - Update a domain
- [`embedTokensReferrals`](docs/sdks/embedtokens/README.md#referrals) - Create a new referrals embed token
- [`eventsList`](docs/sdks/events/README.md#list) - Retrieve a list of events
- [`foldersCreate`](docs/sdks/folders/README.md#create) - Create a new folder
- [`foldersDelete`](docs/sdks/folders/README.md#delete) - Delete a folder
- [`foldersList`](docs/sdks/folders/README.md#list) - Retrieve a list of folders
- [`foldersUpdate`](docs/sdks/folders/README.md#update) - Update a folder
- [`linksCount`](docs/sdks/links/README.md#count) - Retrieve links count
- [`linksCreate`](docs/sdks/links/README.md#create) - Create a new link
- [`linksCreateMany`](docs/sdks/links/README.md#createmany) - Bulk create links
- [`linksDelete`](docs/sdks/links/README.md#delete) - Delete a link
- [`linksDeleteMany`](docs/sdks/links/README.md#deletemany) - Bulk delete links
- [`linksGet`](docs/sdks/links/README.md#get) - Retrieve a link
- [`linksList`](docs/sdks/links/README.md#list) - Retrieve a list of links
- [`linksUpdate`](docs/sdks/links/README.md#update) - Update a link
- [`linksUpdateMany`](docs/sdks/links/README.md#updatemany) - Bulk update links
- [`linksUpsert`](docs/sdks/links/README.md#upsert) - Upsert a link
- [`partnersAnalytics`](docs/sdks/partners/README.md#analytics) - Retrieve analytics for a partner
- [`partnersCreate`](docs/sdks/partners/README.md#create) - Create a new partner
- [`partnersCreateLink`](docs/sdks/partners/README.md#createlink) - Create a link for a partner
- [`partnersRetrieveLinks`](docs/sdks/partners/README.md#retrievelinks) - Retrieve a partner's links.
- [`partnersUpdateSale`](docs/sdks/partners/README.md#updatesale) - Update a sale for a partner.
- [`partnersUpsertLink`](docs/sdks/partners/README.md#upsertlink) - Upsert a link for a partner
- [`qrCodesGet`](docs/sdks/qrcodes/README.md#get) - Retrieve a QR code
- [`tagsCreate`](docs/sdks/tags/README.md#create) - Create a new tag
- [`tagsDelete`](docs/sdks/tags/README.md#delete) - Delete a tag
- [`tagsList`](docs/sdks/tags/README.md#list) - Retrieve a list of tags
- [`tagsUpdate`](docs/sdks/tags/README.md#update) - Update a tag
- [`trackLead`](docs/sdks/track/README.md#lead) - Track a lead
- [`trackSale`](docs/sdks/track/README.md#sale) - Track a sale
- [`workspacesGet`](docs/sdks/workspaces/README.md#get) - Retrieve a workspace
- [`workspacesUpdate`](docs/sdks/workspaces/README.md#update) - Update a workspace
- ~~[`customersCreate`](docs/sdks/customers/README.md#create)~~ - Create a customer :warning: **Deprecated**

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Dub } from "dub";

const sdk = new Dub({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Start Summary [summary] -->
## Summary

Dub API: Dub is link management infrastructure for companies to create marketing campaigns, link sharing features, and referral programs.
<!-- End Summary [summary] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
