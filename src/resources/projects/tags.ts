// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'dub/resource';
import * as TagsAPI from 'dub/resources/projects/tags';

export class Tags extends APIResource {}

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

export namespace Tags {
  export import Tag = TagsAPI.Tag;
}
