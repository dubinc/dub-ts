// File generated from our OpenAPI spec by Stainless.

import * as Core from 'dub/core';
import { APIResource } from 'dub/resource';
import * as TagsAPI from 'dub/resources/projects/tags';

export class Tags extends APIResource {
  /**
   * Create a new tag for the authenticated project.
   */
  create(projectSlug: string, body: TagCreateParams, options?: Core.RequestOptions): Core.APIPromise<Tag> {
    return this._client.post(`/projects/${projectSlug}/tags`, { body, ...options });
  }

  /**
   * Retrieve a list of tags for the authenticated project.
   */
  list(projectSlug: string, options?: Core.RequestOptions): Core.APIPromise<TagListResponse> {
    return this._client.get(`/projects/${projectSlug}/tags`, options);
  }
}

export interface Tag {
  /**
   * The unique ID of the tag.
   */
  id?: string;

  /**
   * The color of the tag.
   */
  color?: string;

  /**
   * The name of the tag.
   */
  name?: string;
}

export type TagListResponse = Array<Tag>;

export interface TagCreateParams {
  /**
   * The name of the tag to create.
   */
  tag?: string;
}

export namespace Tags {
  export import Tag = TagsAPI.Tag;
  export import TagListResponse = TagsAPI.TagListResponse;
  export import TagCreateParams = TagsAPI.TagCreateParams;
}
