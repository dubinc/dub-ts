# Shared

Types:

- <code><a href="./src/resources/shared.ts">Link</a></code>

# Links

Types:

- <code><a href="./src/resources/links/links.ts">LinkListResponse</a></code>

Methods:

- <code title="post /links">client.links.<a href="./src/resources/links/links.ts">create</a>({ ...params }) -> Link</code>
- <code title="put /links/{linkId}">client.links.<a href="./src/resources/links/links.ts">update</a>(linkId, { ...params }) -> Link</code>
- <code title="get /links">client.links.<a href="./src/resources/links/links.ts">list</a>({ ...params }) -> LinkListResponse</code>
- <code title="delete /links/{linkId}">client.links.<a href="./src/resources/links/links.ts">delete</a>(linkId, { ...params }) -> Link</code>

## Info

Methods:

- <code title="get /links/info">client.links.info.<a href="./src/resources/links/info.ts">retrieve</a>({ ...params }) -> Link</code>

## Bulk

Types:

- <code><a href="./src/resources/links/bulk.ts">BulkCreateResponse</a></code>

Methods:

- <code title="post /links/bulk">client.links.bulk.<a href="./src/resources/links/bulk.ts">create</a>([ ...body ]) -> BulkCreateResponse</code>

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
- <code><a href="./src/resources/projects/tags.ts">TagListResponse</a></code>

Methods:

- <code title="post /projects/{projectSlug}/tags">client.projects.tags.<a href="./src/resources/projects/tags.ts">create</a>({ ...params }) -> Tag</code>
- <code title="get /projects/{projectSlug}/tags">client.projects.tags.<a href="./src/resources/projects/tags.ts">list</a>({ ...params }) -> TagListResponse</code>
