# Links

Types:

- <code><a href="./src/resources/links/links.ts">Link</a></code>
- <code><a href="./src/resources/links/links.ts">LinkListResponse</a></code>

Methods:

- <code title="post /links">client.links.<a href="./src/resources/links/links.ts">create</a>({ ...params }) -> Link</code>
- <code title="put /links/{linkId}">client.links.<a href="./src/resources/links/links.ts">update</a>(linkId, { ...params }) -> Link</code>
- <code title="get /links">client.links.<a href="./src/resources/links/links.ts">list</a>({ ...params }) -> LinkListResponse</code>
- <code title="delete /links/{linkId}">client.links.<a href="./src/resources/links/links.ts">deleteLink</a>(linkId, { ...params }) -> Link</code>

## Info

Methods:

- <code title="get /links/info">client.links.info.<a href="./src/resources/links/info.ts">retrieve</a>({ ...params }) -> Link</code>

## Bulk

Types:

- <code><a href="./src/resources/links/bulk.ts">BulkCreateResponse</a></code>

Methods:

- <code title="post /links/bulk">client.links.bulk.<a href="./src/resources/links/bulk.ts">create</a>([ ...body ]) -> BulkCreateResponse</code>

# Qr

Methods:

- <code title="get /qr">client.qr.<a href="./src/resources/qr.ts">retrieve</a>({ ...params }) -> Response</code>

# Projects

Types:

- <code><a href="./src/resources/projects/projects.ts">Project</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectDetails</a></code>
- <code><a href="./src/resources/projects/projects.ts">ProjectListResponse</a></code>

Methods:

- <code title="get /projects/{projectSlug}">client.projects.<a href="./src/resources/projects/projects.ts">retrieve</a>({ ...params }) -> ProjectDetails</code>
- <code title="get /projects">client.projects.<a href="./src/resources/projects/projects.ts">list</a>() -> ProjectListResponse</code>

## Tags

Types:

- <code><a href="./src/resources/projects/tags.ts">Tag</a></code>
