// File generated from our OpenAPI spec by Stainless.

import * as Core from 'dub/core';
import { APIResource } from 'dub/resource';
import * as LinksAPI from 'dub/resources/links/links';
import * as Shared from 'dub/resources/shared';
import * as BulkAPI from 'dub/resources/links/bulk';
import * as InfoAPI from 'dub/resources/links/info';

export class Links extends APIResource {
  info: InfoAPI.Info = new InfoAPI.Info(this._client);
  bulk: BulkAPI.Bulk = new BulkAPI.Bulk(this._client);

  /**
   * Create a new link for the authenticated project.
   */
  create(params: LinkCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Link> {
    params.domain = params.domain || 'dub.sh';
    console.log('Params:', params);
    const { projectSlug = this._client.projectSlug, ...body } = params;
    return this._client.post('/links', { query: { projectSlug }, body, ...options });
  }

  /**
   * Edit a link for the authenticated project.
   */
  update(
    linkId: string,
    params: LinkUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Link> {
    const { projectSlug = this._client.projectSlug, ...body } = params;
    return this._client.put(`/links/${linkId}`, { query: { projectSlug }, body, ...options });
  }

  /**
   * Retrieve a list of links for the authenticated project. The list will be
   * paginated and the provided query parameters allow filtering the returned links.
   */
  list(params: LinkListParams, options?: Core.RequestOptions): Core.APIPromise<LinkListResponse> {
    const { projectSlug = this._client.projectSlug, ...query } = params;
    return this._client.get('/links', { query: { projectSlug, ...query }, ...options });
  }

  /**
   * Delete a link for the authenticated project.
   */
  delete(
    linkId: string,
    params: LinkDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Link> {
    const { projectSlug = this._client.projectSlug } = params;
    return this._client.delete(`/links/${linkId}`, { query: { projectSlug }, ...options });
  }
}

export type LinkListResponse = Array<Shared.Link>;

export interface LinkCreateParams {
  /**
   * Query param: The slug for the project to create links for. E.g. for
   * app.dub.co/acme, the projectSlug is 'acme'.
   */
  projectSlug?: string;

  /**
   * Body param: The domain of the short link. If not set it will default to
   * 'dub.sh'.
   */
  domain?: string;

  /**
   * Body param: The destination URL of the short link.
   */
  url: string;

  /**
   * Body param: The Android destination URL for the short link for Android device
   * targeting.
   */
  android?: string | null;

  /**
   * Body param: Whether the short link is archived.
   */
  archived?: boolean;

  /**
   * Body param: The comments for the short link.
   */
  comments?: string | null;

  /**
   * Body param: The description of the short link generated via api.dub.co/metatags.
   * Will be used for Custom Social Media Cards if `proxy` is true.
   */
  description?: string | null;

  /**
   * Body param: The date and time when the short link will expire in ISO-8601
   * format. Must be in the future.
   */
  expiresAt?: string | null;

  /**
   * Body param: Geo targeting information for the short link in JSON format
   * {[COUNTRY]: "https://example.com" }. Learn more: https://dub.sh/geo
   */
  geo?: Record<string, string> | null;

  /**
   * Body param: The image of the short link generated via api.dub.co/metatags. Will
   * be used for Custom Social Media Cards if `proxy` is true.
   */
  image?: string | null;

  /**
   * Body param: The iOS destination URL for the short link for iOS device targeting.
   */
  ios?: string | null;

  /**
   * Body param: The short link slug. If not provided, a random 7-character slug will
   * be generated.
   */
  key?: string;

  /**
   * Body param: The password required to access the destination URL of the short
   * link.
   */
  password?: string | null;

  /**
   * Body param: Whether the short link uses Custom Social Media Cards feature.
   */
  proxy?: boolean;

  /**
   * Body param: Whether the short link's stats are publicly accessible.
   */
  publicStats?: boolean;

  /**
   * Body param: Whether the short link uses link cloaking.
   */
  rewrite?: boolean;

  /**
   * Body param: The unique id of the tag assigned to the short link.
   */
  tagId?: string | null;

  /**
   * Body param: The title of the short link generated via api.dub.co/metatags. Will
   * be used for Custom Social Media Cards if `proxy` is true.
   */
  title?: string | null;
}

export interface LinkUpdateParams {
  /**
   * Query param: The slug for the project that the link belongs to. E.g. for
   * app.dub.co/acme, the projectSlug is 'acme'.
   */
  projectSlug?: string;

  /**
   * Body param: The Android destination URL for the short link for Android device
   * targeting.
   */
  android?: string | null;

  /**
   * Body param: Whether the short link is archived.
   */
  archived?: boolean;

  /**
   * Body param: The comments for the short link.
   */
  comments?: string | null;

  /**
   * Body param: The description of the short link generated via api.dub.co/metatags.
   * Will be used for Custom Social Media Cards if `proxy` is true.
   */
  description?: string | null;

  /**
   * Body param: The domain of the short link.
   */
  domain?: string;

  /**
   * Body param: The date and time when the short link will expire in ISO-8601
   * format. Must be in the future.
   */
  expiresAt?: string | null;

  /**
   * Body param: Geo targeting information for the short link in JSON format
   * {[COUNTRY]: "https://example.com" }. Learn more: https://dub.sh/geo
   */
  geo?: Record<string, string> | null;

  /**
   * Body param: The image of the short link generated via api.dub.co/metatags. Will
   * be used for Custom Social Media Cards if `proxy` is true.
   */
  image?: string | null;

  /**
   * Body param: The iOS destination URL for the short link for iOS device targeting.
   */
  ios?: string | null;

  /**
   * Body param: The short link slug. If not provided, a random 7-character slug will
   * be generated.
   */
  key?: string;

  /**
   * Body param: The password required to access the destination URL of the short
   * link.
   */
  password?: string | null;

  /**
   * Body param: Whether the short link uses Custom Social Media Cards feature.
   */
  proxy?: boolean;

  /**
   * Body param: Whether the short link's stats are publicly accessible.
   */
  publicStats?: boolean;

  /**
   * Body param: Whether the short link uses link cloaking.
   */
  rewrite?: boolean;

  /**
   * Body param: The unique id of the tag assigned to the short link.
   */
  tagId?: string | null;

  /**
   * Body param: The title of the short link generated via api.dub.co/metatags. Will
   * be used for Custom Social Media Cards if `proxy` is true.
   */
  title?: string | null;

  /**
   * Body param: The destination URL of the short link.
   */
  url?: string;
}

export interface LinkListParams {
  /**
   * The slug for the project to retrieve links for. E.g. for app.dub.co/acme, the
   * projectSlug is 'acme'.
   */
  projectSlug?: string;

  /**
   * The domain to filter the links by. E.g. 'ac.me'. If not provided, all links for
   * the project will be returned.
   */
  domain?: string;

  /**
   * The page number for pagination (each page contains 100 links).
   */
  page?: number;

  /**
   * The search term to filter the links by. The search term will be matched against
   * the short link slug and the destination url.
   */
  search?: string;

  /**
   * Whether to include archived links in the response. Defaults to false if not
   * provided.
   */
  showArchived?: true | false;

  /**
   * The field to sort the links by. The default is 'createdAt', and sort order is
   * always descending.
   */
  sort?: 'createdAt' | 'clicks' | 'lastClicked';

  /**
   * The tag ID to filter the links by.
   */
  tagId?: string;

  /**
   * The user ID to filter the links by.
   */
  userId?: string;
}

export interface LinkDeleteParams {
  /**
   * The slug for the project that the link belongs to. E.g. for app.dub.co/acme, the
   * projectSlug is 'acme'.
   */
  projectSlug?: string;
}

export namespace Links {
  export import LinkListResponse = LinksAPI.LinkListResponse;
  export import LinkCreateParams = LinksAPI.LinkCreateParams;
  export import LinkUpdateParams = LinksAPI.LinkUpdateParams;
  export import LinkListParams = LinksAPI.LinkListParams;
  export import LinkDeleteParams = LinksAPI.LinkDeleteParams;
  export import Info = InfoAPI.Info;
  export import InfoRetrieveParams = InfoAPI.InfoRetrieveParams;
  export import Bulk = BulkAPI.Bulk;
  export import BulkCreateResponse = BulkAPI.BulkCreateResponse;
  export import BulkCreateParams = BulkAPI.BulkCreateParams;
}
