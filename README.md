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

### NPM

```bash
npm add dub
```

### Yarn

```bash
yarn add dub
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
    workspaceId: "<value>",
});

async function run() {
    const result = await dub.links.create({
        url: "https://google/com",
    });

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
    workspaceId: "<value>",
});

async function run() {
    const result = await dub.links.upsert({
        url: "https://google/com",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [links](docs/sdks/links/README.md)

* [list](docs/sdks/links/README.md#list) - Retrieve a list of links
* [create](docs/sdks/links/README.md#create) - Create a new link
* [count](docs/sdks/links/README.md#count) - Retrieve the number of links
* [get](docs/sdks/links/README.md#get) - Retrieve a link
* [delete](docs/sdks/links/README.md#delete) - Delete a link
* [update](docs/sdks/links/README.md#update) - Update a link
* [createMany](docs/sdks/links/README.md#createmany) - Bulk create links
* [upsert](docs/sdks/links/README.md#upsert) - Upsert a link

### [qrCodes](docs/sdks/qrcodes/README.md)

* [get](docs/sdks/qrcodes/README.md#get) - Retrieve a QR code

### [analytics](docs/sdks/analytics/README.md)

* [retrieve](docs/sdks/analytics/README.md#retrieve) - Retrieve analytics for a link, a domain, or the authenticated workspace.

### [workspaces](docs/sdks/workspaces/README.md)

* [list](docs/sdks/workspaces/README.md#list) - Retrieve a list of workspaces
* [create](docs/sdks/workspaces/README.md#create) - Create a workspace
* [get](docs/sdks/workspaces/README.md#get) - Retrieve a workspace

### [tags](docs/sdks/tags/README.md)

* [list](docs/sdks/tags/README.md#list) - Retrieve a list of tags
* [create](docs/sdks/tags/README.md#create) - Create a new tag

### [domains](docs/sdks/domains/README.md)

* [list](docs/sdks/domains/README.md#list) - Retrieve a list of domains
* [add](docs/sdks/domains/README.md#add) - Add a domain
* [delete](docs/sdks/domains/README.md#delete) - Delete a domain
* [update](docs/sdks/domains/README.md#update) - Update a domain
* [setPrimary](docs/sdks/domains/README.md#setprimary) - Set a domain as primary
* [transfer](docs/sdks/domains/README.md#transfer) - Transfer a domain

### [track](docs/sdks/track/README.md)

* [lead](docs/sdks/track/README.md#lead) - Track a lead
* [sale](docs/sdks/track/README.md#sale) - Track a sale
* [customer](docs/sdks/track/README.md#customer) - Track a customer

### [metatags](docs/sdks/metatags/README.md)

* [get](docs/sdks/metatags/README.md#get) - Retrieve the metatags for a URL
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object               | Status Code                | Content Type               |
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
| errors.SDKError            | 4xx-5xx                    | */*                        |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Dub } from "dub";
import * as errors from "dub/models/errors";

const dub = new Dub({
    token: "DUB_API_KEY",
    workspaceId: "<value>",
});

async function run() {
    let result;
    try {
        result = await dub.links.list({});
    } catch (err) {
        switch (true) {
            case err instanceof errors.SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            case err instanceof errors.BadRequest: {
                console.error(err); // handle exception
                return;
            }
            case err instanceof errors.Unauthorized: {
                console.error(err); // handle exception
                return;
            }
            case err instanceof errors.Forbidden: {
                console.error(err); // handle exception
                return;
            }
            case err instanceof errors.NotFound: {
                console.error(err); // handle exception
                return;
            }
            case err instanceof errors.Conflict: {
                console.error(err); // handle exception
                return;
            }
            case err instanceof errors.InviteExpired: {
                console.error(err); // handle exception
                return;
            }
            case err instanceof errors.UnprocessableEntity: {
                console.error(err); // handle exception
                return;
            }
            case err instanceof errors.RateLimitExceeded: {
                console.error(err); // handle exception
                return;
            }
            case err instanceof errors.InternalServerError: {
                console.error(err); // handle exception
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
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
    workspaceId: "<value>",
});

async function run() {
    const result = await dub.links.list({});

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
    workspaceId: "<value>",
});

async function run() {
    const result = await dub.links.list({});

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
    workspaceId: "<value>",
});

async function run() {
    const result = await dub.links.list({});

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
