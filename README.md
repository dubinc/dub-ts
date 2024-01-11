# Official Dub.co Typescript SDK

[![NPM version](https://img.shields.io/npm/v/dub.svg)](https://npmjs.org/package/dub)

This library provides convenient access to the Dub REST API from server-side TypeScript or JavaScript.

The API documentation can be found [here](https://dub.co/api).

## Installation

```sh
npm install --save dub
# or
yarn add dub
```

## Usage

The full API of this library can be found in [api.md](https://www.github.com/dubinc/dub-node/blob/main/api.md).

<!-- prettier-ignore -->
```js
import Dub from 'dub';

const dub = new Dub({
  token: process.env.DUB_API_KEY, // default setting, can be omitted
});

async function main() {
  const link = await dub.link.create({
    projectSlug: 'xxx'
    url: 'https://google.com'
  })

  console.log(link) // log out the created link
}

main();
```

### Request & Response types

This library includes TypeScript definitions for all request params and response fields. You may import and use them like so:

<!-- prettier-ignore -->
```ts
import Dub from 'dub';

const dub = new Dub({
  token: process.env.DUB_API_KEY, // default setting, can be omitted
});

async function main() {
  const link: Dub.Link = await dub.link.create({
    projectSlug: 'xxx'
    url: 'https://google.com'
  })

  console.log(link) // log out the created link
}

main();
```

Documentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.

## Handling errors

When the library is unable to connect to the API,
or if the API returns a non-success status code (i.e., 4xx or 5xx response),
a subclass of `APIError` will be thrown:

<!-- prettier-ignore -->
```ts
async function main() {
  const project = await dub.projects.retrieve('REPLACE_ME').catch((err) => {
    if (err instanceof Dub.APIError) {
      console.log(err.status); // 400
      console.log(err.name); // BadRequestError
      console.log(err.headers); // {server: 'nginx', ...}
    } else {
      throw err;
    }
  });
}

main();
```

Error codes are as followed:

| Status Code | Error Type                 |
| ----------- | -------------------------- |
| 400         | `BadRequestError`          |
| 401         | `AuthenticationError`      |
| 403         | `PermissionDeniedError`    |
| 404         | `NotFoundError`            |
| 422         | `UnprocessableEntityError` |
| 429         | `RateLimitError`           |
| >=500       | `InternalServerError`      |
| N/A         | `APIConnectionError`       |

### Retries

Certain errors will be automatically retried 2 times by default, with a short exponential backoff.
Connection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,
429 Rate Limit, and >=500 Internal errors will all be retried by default.

You can use the `maxRetries` option to configure or disable this:

<!-- prettier-ignore -->
```js
// Configure the default for all requests:
const dub = new Dub({
  maxRetries: 0, // default is 2
});

// Or, configure per-request:
await dub.projects.retrieve('REPLACE_ME', {
  maxRetries: 5,
});
```

### Timeouts

Requests time out after 1 minute by default. You can configure this with a `timeout` option:

<!-- prettier-ignore -->
```ts
// Configure the default for all requests:
const dub = new Dub({
  timeout: 20 * 1000, // 20 seconds (default is 1 minute)
});

// Override per-request:
await dub.projects.retrieve('REPLACE_ME', {
  timeout: 5 * 1000,
});
```

On timeout, an `APIConnectionTimeoutError` is thrown.

Note that requests which time out will be [retried twice by default](#retries).

Note that React Native is not supported at this time.

If you are interested in other runtime environments, please open or upvote an issue on GitHub.
