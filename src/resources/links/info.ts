// File generated from our OpenAPI spec by Stainless.

import * as Core from 'dub/core';
import { APIResource } from 'dub/resource';
import * as InfoAPI from 'dub/resources/links/info';
import * as Shared from 'dub/resources/shared';

export class Info extends APIResource {
  /**
   * Retrieve the info for a link from their domain and key.
   */
  retrieve(params: InfoRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Link> {
    params.domain = params.domain || 'dub.sh';
    const { projectSlug = this._client.projectSlug, ...query } = params;
    return this._client.get('/links/info', { query: { projectSlug, ...query }, ...options });
  }
}

export interface InfoRetrieveParams {
  /**
   * The domain of the link to retrieve. E.g. for spt.fi/github, the domain is
   * 'dub.sh'. If not provided the default domain is 'dub.sh'.
   */
  domain?: string;

  /**
   * The key of the link to retrieve. E.g. for dub.sh/github, the key is 'github'.
   */
  key: string;

  /**
   * The slug for the project that the link belongs to. E.g. for app.dub.co/acme, the
   * projectSlug is 'acme'.
   */
  projectSlug?: string;
}

export namespace Info {
  export import InfoRetrieveParams = InfoAPI.InfoRetrieveParams;
}
