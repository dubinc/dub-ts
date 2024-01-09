// File generated from our OpenAPI spec by Stainless.

import * as Core from 'dub/core';
import { APIResource } from 'dub/resource';
import * as InfoAPI from 'dub/resources/links/info';
import * as Shared from 'dub/resources/shared';

export class Info extends APIResource {
  /**
   * Retrieve the info for a link from their domain and key.
   */
  retrieve(query: InfoRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Link> {
    return this._client.get('/links/info', { query, ...options });
  }
}

export interface InfoRetrieveParams {
  /**
   * The domain of the link to retrieve. E.g. for dub.sh/github, the domain is
   * 'dub.sh'.
   */
  domain: string;

  /**
   * The key of the link to retrieve. E.g. for dub.sh/github, the key is 'github'.
   */
  key: string;

  /**
   * The slug for the project that the link belongs to. E.g. for app.dub.co/acme, the
   * projectSlug is 'acme'.
   */
  projectSlug: string;
}

export namespace Info {
  export import InfoRetrieveParams = InfoAPI.InfoRetrieveParams;
}
