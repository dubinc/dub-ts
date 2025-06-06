/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { domainsCheckStatus } from "../funcs/domainsCheckStatus.js";
import { domainsCreate } from "../funcs/domainsCreate.js";
import { domainsDelete } from "../funcs/domainsDelete.js";
import { domainsList } from "../funcs/domainsList.js";
import { domainsRegister } from "../funcs/domainsRegister.js";
import { domainsUpdate } from "../funcs/domainsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Domains extends ClientSDK {
  /**
   * Create a domain
   *
   * @remarks
   * Create a domain for the authenticated workspace.
   */
  async create(
    request?: operations.CreateDomainRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<components.DomainSchema> {
    return unwrapAsync(domainsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a list of domains
   *
   * @remarks
   * Retrieve a list of domains associated with the authenticated workspace.
   */
  async list(
    request?: operations.ListDomainsRequest | undefined,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.ListDomainsResponse, { page: number }>> {
    return unwrapResultIterator(domainsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a domain
   *
   * @remarks
   * Update a domain for the authenticated workspace.
   */
  async update(
    slug: string,
    requestBody?: operations.UpdateDomainRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<components.DomainSchema> {
    return unwrapAsync(domainsUpdate(
      this,
      slug,
      requestBody,
      options,
    ));
  }

  /**
   * Delete a domain
   *
   * @remarks
   * Delete a domain from a workspace. It cannot be undone. This will also delete all the links associated with the domain.
   */
  async delete(
    slug: string,
    options?: RequestOptions,
  ): Promise<operations.DeleteDomainResponseBody> {
    return unwrapAsync(domainsDelete(
      this,
      slug,
      options,
    ));
  }

  /**
   * Register a domain
   *
   * @remarks
   * Register a domain for the authenticated workspace. Only available for Enterprise Plans.
   */
  async register(
    request?: operations.RegisterDomainRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.RegisterDomainResponseBody> {
    return unwrapAsync(domainsRegister(
      this,
      request,
      options,
    ));
  }

  /**
   * Check the availability of one or more domains
   *
   * @remarks
   * Check if a domain name is available for purchase. You can check multiple domains at once.
   */
  async checkStatus(
    request: operations.CheckDomainStatusRequest,
    options?: RequestOptions,
  ): Promise<Array<operations.CheckDomainStatusResponseBody>> {
    return unwrapAsync(domainsCheckStatus(
      this,
      request,
      options,
    ));
  }
}
