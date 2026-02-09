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
yarn add dub
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

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Analytics](docs/sdks/analytics/README.md)

* [retrieve](docs/sdks/analytics/README.md#retrieve) - Retrieve analytics for a link, a domain, or the authenticated workspace.

### [Bounties](docs/sdks/bounties/README.md)

* [listSubmissions](docs/sdks/bounties/README.md#listsubmissions) - List bounty submissions
* [approveSubmission](docs/sdks/bounties/README.md#approvesubmission) - Approve a bounty submission
* [rejectSubmission](docs/sdks/bounties/README.md#rejectsubmission) - Reject a bounty submission

### [Commissions](docs/sdks/commissions/README.md)

* [list](docs/sdks/commissions/README.md#list) - List all commissions
* [update](docs/sdks/commissions/README.md#update) - Update a commission.

### [Customers](docs/sdks/customers/README.md)

* [list](docs/sdks/customers/README.md#list) - Retrieve a list of customers
* [get](docs/sdks/customers/README.md#get) - Retrieve a customer
* [update](docs/sdks/customers/README.md#update) - Update a customer
* [delete](docs/sdks/customers/README.md#delete) - Delete a customer

### [Domains](docs/sdks/domains/README.md)

* [create](docs/sdks/domains/README.md#create) - Create a domain
* [list](docs/sdks/domains/README.md#list) - Retrieve a list of domains
* [update](docs/sdks/domains/README.md#update) - Update a domain
* [delete](docs/sdks/domains/README.md#delete) - Delete a domain
* [register](docs/sdks/domains/README.md#register) - Register a domain
* [checkStatus](docs/sdks/domains/README.md#checkstatus) - Check the availability of one or more domains

### [EmbedTokens](docs/sdks/embedtokens/README.md)

* [referrals](docs/sdks/embedtokens/README.md#referrals) - Create a referrals embed token

### [Events](docs/sdks/events/README.md)

* [list](docs/sdks/events/README.md#list) - Retrieve a list of events

### [Folders](docs/sdks/folders/README.md)

* [create](docs/sdks/folders/README.md#create) - Create a folder
* [list](docs/sdks/folders/README.md#list) - Retrieve a list of folders
* [update](docs/sdks/folders/README.md#update) - Update a folder
* [delete](docs/sdks/folders/README.md#delete) - Delete a folder

### [Links](docs/sdks/links/README.md)

* [create](docs/sdks/links/README.md#create) - Create a link
* [list](docs/sdks/links/README.md#list) - Retrieve a list of links
* [count](docs/sdks/links/README.md#count) - Retrieve links count
* [get](docs/sdks/links/README.md#get) - Retrieve a link
* [update](docs/sdks/links/README.md#update) - Update a link
* [delete](docs/sdks/links/README.md#delete) - Delete a link
* [createMany](docs/sdks/links/README.md#createmany) - Bulk create links
* [updateMany](docs/sdks/links/README.md#updatemany) - Bulk update links
* [deleteMany](docs/sdks/links/README.md#deletemany) - Bulk delete links
* [upsert](docs/sdks/links/README.md#upsert) - Upsert a link

### [Partners](docs/sdks/partners/README.md)

* [create](docs/sdks/partners/README.md#create) - Create or update a partner
* [list](docs/sdks/partners/README.md#list) - List all partners
* [createLink](docs/sdks/partners/README.md#createlink) - Create a link for a partner
* [retrieveLinks](docs/sdks/partners/README.md#retrievelinks) - Retrieve a partner's links.
* [upsertLink](docs/sdks/partners/README.md#upsertlink) - Upsert a link for a partner
* [analytics](docs/sdks/partners/README.md#analytics) - Retrieve analytics for a partner
* [ban](docs/sdks/partners/README.md#ban) - Ban a partner
* [deactivate](docs/sdks/partners/README.md#deactivate) - Deactivate a partner

### [Payouts](docs/sdks/payouts/README.md)

* [list](docs/sdks/payouts/README.md#list) - List all payouts

### [QRCodes](docs/sdks/qrcodes/README.md)

* [get](docs/sdks/qrcodes/README.md#get) - Retrieve a QR code

### [Tags](docs/sdks/tags/README.md)

* [create](docs/sdks/tags/README.md#create) - Create a tag
* [list](docs/sdks/tags/README.md#list) - Retrieve a list of tags
* [update](docs/sdks/tags/README.md#update) - Update a tag
* [delete](docs/sdks/tags/README.md#delete) - Delete a tag

### [Track](docs/sdks/track/README.md)

* [lead](docs/sdks/track/README.md#lead) - Track a lead
* [sale](docs/sdks/track/README.md#sale) - Track a sale

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`DubError`](./src/models/errors/duberror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Dub } from "dub";
import * as errors from "dub/models/errors";

const dub = new Dub({
  token: "DUB_API_KEY",
});

async function run() {
  try {
    const result = await dub.links.create();

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.DubError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.BadRequest) {
        console.log(error.data$.error); // errors.ErrorT
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`DubError`](./src/models/errors/duberror.ts): The base class for HTTP error responses.
  * [`BadRequest`](./src/models/errors/badrequest.ts): The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing). Status code `400`.
  * [`Unauthorized`](./src/models/errors/unauthorized.ts): Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response. Status code `401`.
  * [`Forbidden`](./src/models/errors/forbidden.ts): The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server. Status code `403`.
  * [`NotFound`](./src/models/errors/notfound.ts): The server cannot find the requested resource. Status code `404`.
  * [`Conflict`](./src/models/errors/conflict.ts): This response is sent when a request conflicts with the current state of the server. Status code `409`.
  * [`InviteExpired`](./src/models/errors/inviteexpired.ts): This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Status code `410`.
  * [`UnprocessableEntity`](./src/models/errors/unprocessableentity.ts): The request was well-formed but was unable to be followed due to semantic errors. Status code `422`.
  * [`RateLimitExceeded`](./src/models/errors/ratelimitexceeded.ts): The user has sent too many requests in a given amount of time ("rate limiting"). Status code `429`.
  * [`InternalServerError`](./src/models/errors/internalservererror.ts): The server has encountered a situation it does not know how to handle. Status code `500`.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`DubError`](./src/models/errors/duberror.ts)**:
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
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

const sdk = new Dub({ httpClient: httpClient });
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
- [`bountiesApproveSubmission`](docs/sdks/bounties/README.md#approvesubmission) - Approve a bounty submission
- [`bountiesListSubmissions`](docs/sdks/bounties/README.md#listsubmissions) - List bounty submissions
- [`bountiesRejectSubmission`](docs/sdks/bounties/README.md#rejectsubmission) - Reject a bounty submission
- [`commissionsList`](docs/sdks/commissions/README.md#list) - List all commissions
- [`commissionsUpdate`](docs/sdks/commissions/README.md#update) - Update a commission.
- [`customersDelete`](docs/sdks/customers/README.md#delete) - Delete a customer
- [`customersGet`](docs/sdks/customers/README.md#get) - Retrieve a customer
- [`customersList`](docs/sdks/customers/README.md#list) - Retrieve a list of customers
- [`customersUpdate`](docs/sdks/customers/README.md#update) - Update a customer
- [`domainsCheckStatus`](docs/sdks/domains/README.md#checkstatus) - Check the availability of one or more domains
- [`domainsCreate`](docs/sdks/domains/README.md#create) - Create a domain
- [`domainsDelete`](docs/sdks/domains/README.md#delete) - Delete a domain
- [`domainsList`](docs/sdks/domains/README.md#list) - Retrieve a list of domains
- [`domainsRegister`](docs/sdks/domains/README.md#register) - Register a domain
- [`domainsUpdate`](docs/sdks/domains/README.md#update) - Update a domain
- [`embedTokensReferrals`](docs/sdks/embedtokens/README.md#referrals) - Create a referrals embed token
- [`eventsList`](docs/sdks/events/README.md#list) - Retrieve a list of events
- [`foldersCreate`](docs/sdks/folders/README.md#create) - Create a folder
- [`foldersDelete`](docs/sdks/folders/README.md#delete) - Delete a folder
- [`foldersList`](docs/sdks/folders/README.md#list) - Retrieve a list of folders
- [`foldersUpdate`](docs/sdks/folders/README.md#update) - Update a folder
- [`linksCount`](docs/sdks/links/README.md#count) - Retrieve links count
- [`linksCreate`](docs/sdks/links/README.md#create) - Create a link
- [`linksCreateMany`](docs/sdks/links/README.md#createmany) - Bulk create links
- [`linksDelete`](docs/sdks/links/README.md#delete) - Delete a link
- [`linksDeleteMany`](docs/sdks/links/README.md#deletemany) - Bulk delete links
- [`linksGet`](docs/sdks/links/README.md#get) - Retrieve a link
- [`linksList`](docs/sdks/links/README.md#list) - Retrieve a list of links
- [`linksUpdate`](docs/sdks/links/README.md#update) - Update a link
- [`linksUpdateMany`](docs/sdks/links/README.md#updatemany) - Bulk update links
- [`linksUpsert`](docs/sdks/links/README.md#upsert) - Upsert a link
- [`partnersAnalytics`](docs/sdks/partners/README.md#analytics) - Retrieve analytics for a partner
- [`partnersBan`](docs/sdks/partners/README.md#ban) - Ban a partner
- [`partnersCreate`](docs/sdks/partners/README.md#create) - Create or update a partner
- [`partnersCreateLink`](docs/sdks/partners/README.md#createlink) - Create a link for a partner
- [`partnersDeactivate`](docs/sdks/partners/README.md#deactivate) - Deactivate a partner
- [`partnersList`](docs/sdks/partners/README.md#list) - List all partners
- [`partnersRetrieveLinks`](docs/sdks/partners/README.md#retrievelinks) - Retrieve a partner's links.
- [`partnersUpsertLink`](docs/sdks/partners/README.md#upsertlink) - Upsert a link for a partner
- [`payoutsList`](docs/sdks/payouts/README.md#list) - List all payouts
- [`qrCodesGet`](docs/sdks/qrcodes/README.md#get) - Retrieve a QR code
- [`tagsCreate`](docs/sdks/tags/README.md#create) - Create a tag
- [`tagsDelete`](docs/sdks/tags/README.md#delete) - Delete a tag
- [`tagsList`](docs/sdks/tags/README.md#list) - Retrieve a list of tags
- [`tagsUpdate`](docs/sdks/tags/README.md#update) - Update a tag
- [`trackLead`](docs/sdks/track/README.md#lead) - Track a lead
- [`trackSale`](docs/sdks/track/README.md#sale) - Track a sale

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

Dub API: Dub is the modern link attribution platform for short links, conversion tracking, and affiliate programs.
<!-- End Summary [summary] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
