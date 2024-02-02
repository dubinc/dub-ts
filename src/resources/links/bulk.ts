// File generated from our OpenAPI spec by Stainless.

import * as Core from 'dub/core';
import { APIResource } from 'dub/resource';
import * as BulkAPI from 'dub/resources/links/bulk';
import * as LinksAPI from 'dub/resources/links/links';

export class Bulk extends APIResource {
  /**
   * Bulk create up to 100 links for the authenticated project.
   */
  create(params: BulkCreateParams, options?: Core.RequestOptions): Core.APIPromise<BulkCreateResponse> {
    const { projectSlug, ...body } = params;
    return this._client.post('/links/bulk', { query: { projectSlug }, body, ...options });
  }
}

export type BulkCreateResponse = Array<LinksAPI.Link>;

export interface BulkCreateParams {
  /**
   * Query param: The slug for the project to create links for. E.g. for
   * app.dub.co/acme, the projectSlug is 'acme'.
   */
  projectSlug: string;
}

export namespace BulkCreateParams {
  export interface Body {
    /**
     * The Android destination URL for the short link for Android device targeting.
     */
    android?: string | null;

    /**
     * Whether the short link is archived.
     */
    archived?: boolean;

    /**
     * The comments for the short link.
     */
    comments?: string | null;

    /**
     * The description of the short link generated via api.dub.co/metatags. Will be
     * used for Custom Social Media Cards if `proxy` is true.
     */
    description?: string | null;

    /**
     * The domain of the short link.
     */
    domain?: string;

    /**
     * The date and time when the short link will expire in ISO-8601 format. Must be in
     * the future.
     */
    expiresAt?: string | null;

    /**
     * Geo targeting information for the short link in JSON format {[COUNTRY]:
     * "https://example.com" }. Learn more: https://dub.sh/geo
     */
    geo?: Record<string, string> | null;

    /**
     * The image of the short link generated via api.dub.co/metatags. Will be used for
     * Custom Social Media Cards if `proxy` is true.
     */
    image?: string | null;

    /**
     * The iOS destination URL for the short link for iOS device targeting.
     */
    ios?: string | null;

    /**
     * The short link slug. If not provided, a random 7-character slug will be
     * generated.
     */
    key?: string;

    /**
     * The password required to access the destination URL of the short link.
     */
    password?: string | null;

    /**
     * Whether the short link uses Custom Social Media Cards feature.
     */
    proxy?: boolean;

    /**
     * Whether the short link's stats are publicly accessible.
     */
    publicStats?: boolean;

    /**
     * Whether the short link uses link cloaking.
     */
    rewrite?: boolean;

    /**
     * The unique id of the tag assigned to the short link.
     */
    tagId?: string | null;

    /**
     * The title of the short link generated via api.dub.co/metatags. Will be used for
     * Custom Social Media Cards if `proxy` is true.
     */
    title?: string | null;

    /**
     * The destination URL of the short link.
     */
    url?: string;
  }
}

export namespace Bulk {
  export import BulkCreateResponse = BulkAPI.BulkCreateResponse;
  export import BulkCreateParams = BulkAPI.BulkCreateParams;
}
