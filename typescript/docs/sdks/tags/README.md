# Tags
(*tags*)

### Available Operations

* [getTags](#gettags) - Retrieve a list of tags
* [createTag](#createtag) - Create a new tag

## getTags

Retrieve a list of tags for the authenticated workspace.

### Example Usage

```typescript
import { Dub } from "dub";

async function run() {
  const sdk = new Dub({
    token: "<YOUR_BEARER_TOKEN_HERE>",
    workspaceId: "<value>",
  });

  const workspaceId = "<value>";
  
  const result = await sdk.tags.getTags(workspaceId);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `workspaceId`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The ID of the workspace to retrieve the tags for.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[components.TagSchema[]](../../models/.md)>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.FourHundred              | 400                             | application/json                |
| errors.FourHundredAndOne        | 401                             | application/json                |
| errors.FourHundredAndThree      | 403                             | application/json                |
| errors.FourHundredAndFour       | 404                             | application/json                |
| errors.FourHundredAndNine       | 409                             | application/json                |
| errors.FourHundredAndTen        | 410                             | application/json                |
| errors.FourHundredAndTwentyTwo  | 422                             | application/json                |
| errors.FourHundredAndTwentyNine | 429                             | application/json                |
| errors.FiveHundred              | 500                             | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |

## createTag

Create a new tag for the authenticated workspace.

### Example Usage

```typescript
import { Dub } from "dub";

async function run() {
  const sdk = new Dub({
    token: "<YOUR_BEARER_TOKEN_HERE>",
    workspaceId: "<value>",
  });

  const result = await sdk.tags.createTag({
    requestBody: {
      tag: "<value>",
    },
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateTagRequest](../../models/operations/createtagrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[components.TagSchema](../../models/components/tagschema.md)>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.FourHundred              | 400                             | application/json                |
| errors.FourHundredAndOne        | 401                             | application/json                |
| errors.FourHundredAndThree      | 403                             | application/json                |
| errors.FourHundredAndFour       | 404                             | application/json                |
| errors.FourHundredAndNine       | 409                             | application/json                |
| errors.FourHundredAndTen        | 410                             | application/json                |
| errors.FourHundredAndTwentyTwo  | 422                             | application/json                |
| errors.FourHundredAndTwentyNine | 429                             | application/json                |
| errors.FiveHundred              | 500                             | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |
