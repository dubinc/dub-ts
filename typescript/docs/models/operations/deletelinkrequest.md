# DeleteLinkRequest


## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `linkId`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | The id of the link to delete. You can get this via the `getLinkInfo` endpoint. |
| `workspaceId`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | The ID of the workspace the link belongs to.                                   |