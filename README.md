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

### [domains](docs/sdks/domains/README.md)

* [create](docs/sdks/domains/README.md#create) - Create a domain
* [list](docs/sdks/domains/README.md#list) - Retrieve a list of domains
* [update](docs/sdks/domains/README.md#update) - Update a domain
* [delete](docs/sdks/domains/README.md#delete) - Delete a domain


### [events](docs/sdks/events/README.md)

* [list](docs/sdks/events/README.md#list) - Retrieve a list of events

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

### [metatags](docs/sdks/metatags/README.md)

* [get](docs/sdks/metatags/README.md#get) - Retrieve the metatags for a URL

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
* [customer](docs/sdks/track/README.md#customer) - Track a customer

### [workspaces](docs/sdks/workspaces/README.md)

* [get](docs/sdks/workspaces/README.md#get) - Retrieve a workspace
* [update](docs/sdks/workspaces/README.md#update) - Update a workspace

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. By default, an API error will throw a `errors.SDKError`.

If a HTTP request fails, an operation my also throw an error from the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |

In addition, when custom error responses are specified for an operation, the SDK may throw their associated Error type. You can refer to respective *Errors* tables in SDK docs for more details on possible error types for each operation. For example, the `create` method may throw the following errors:

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.BadRequest          | 400                        | application/json           |
| errors.Unauthorized        | 401                        | application/json           |
| errors.Forbidden           | 403                        | application/json           |
| errors.NotFound            | 404                        | application/json           |
| errors.Conflict            | 409                        | application/json           |
| errors.InviteExpired       | 410                        | application/json           |
| errors.UnprocessableEntity | 422                        | application/json           |
| errors.RateLimitExceeded   | 429                        | application/json           |
| errors.InternalServerError | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

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
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
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
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.dub.co` | None |

```typescript
import { Dub } from "dub";

const dub = new Dub({
  serverIdx: 0,
  token: "DUB_API_KEY",
});

async function run() {
  const result = await dub.links.create();

  // Handle the result
  console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

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

| Name        | Type        | Scheme      |
| ----------- | ----------- | ----------- |
| `token`     | http        | HTTP Bearer |

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

- [analyticsRetrieve](docs/sdks/analytics/README.md#retrieve)
- [domainsCreate](docs/sdks/domains/README.md#create)
- [domainsDelete](docs/sdks/domains/README.md#delete)
- [domainsList](docs/sdks/domains/README.md#list)
- [domainsUpdate](docs/sdks/domains/README.md#update)
- [eventsList](docs/sdks/events/README.md#list)
- [linksCount](docs/sdks/links/README.md#count)
- [linksCreateMany](docs/sdks/links/README.md#createmany)
- [linksCreate](docs/sdks/links/README.md#create)
- [linksDeleteMany](docs/sdks/links/README.md#deletemany)
- [linksDelete](docs/sdks/links/README.md#delete)
- [linksGet](docs/sdks/links/README.md#get)
- [linksList](docs/sdks/links/README.md#list)
- [linksUpdateMany](docs/sdks/links/README.md#updatemany)
- [linksUpdate](docs/sdks/links/README.md#update)
- [linksUpsert](docs/sdks/links/README.md#upsert)
- [metatagsGet](docs/sdks/metatags/README.md#get)
- [qrCodesGet](docs/sdks/qrcodes/README.md#get)
- [tagsCreate](docs/sdks/tags/README.md#create)
- [tagsDelete](docs/sdks/tags/README.md#delete)
- [tagsList](docs/sdks/tags/README.md#list)
- [tagsUpdate](docs/sdks/tags/README.md#update)
- [trackCustomer](docs/sdks/track/README.md#customer)
- [trackLead](docs/sdks/track/README.md#lead)
- [trackSale](docs/sdks/track/README.md#sale)
- [workspacesGet](docs/sdks/workspaces/README.md#get)
- [workspacesUpdate](docs/sdks/workspaces/README.md#update)


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

Dub.co API: Dub is link management infrastructure for companies to create marketing campaigns, link sharing features, and referral programs.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Pagination](#pagination)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
