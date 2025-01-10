/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { linksCount } from "../funcs/linksCount.js";
import { linksCreate } from "../funcs/linksCreate.js";
import { linksCreateMany } from "../funcs/linksCreateMany.js";
import { linksDelete } from "../funcs/linksDelete.js";
import { linksDeleteMany } from "../funcs/linksDeleteMany.js";
import { linksGet } from "../funcs/linksGet.js";
import { linksList } from "../funcs/linksList.js";
import { linksUpdate } from "../funcs/linksUpdate.js";
import { linksUpdateMany } from "../funcs/linksUpdateMany.js";
import { linksUpsert } from "../funcs/linksUpsert.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Links extends ClientSDK {
  /**
   * Create a new link
   *
   * @remarks
   * Create a new link for the authenticated workspace.
   */
  async create(
    request?: operations.CreateLinkRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<components.LinkSchema> {
    return unwrapAsync(linksCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a list of links
   *
   * @remarks
   * Retrieve a paginated list of links for the authenticated workspace.
   */
  async list(
    request?: operations.GetLinksRequest | undefined,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.GetLinksResponse, { page: number }>> {
    return unwrapResultIterator(linksList(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve links count
   *
   * @remarks
   * Retrieve the number of links for the authenticated workspace.
   */
  async count(
    request?: operations.GetLinksCountRequest | undefined,
    options?: RequestOptions,
  ): Promise<number> {
    return unwrapAsync(linksCount(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a link
   *
   * @remarks
   * Retrieve the info for a link.
   */
  async get(
    request?: operations.GetLinkInfoRequest | undefined,
    options?: RequestOptions,
  ): Promise<components.LinkSchema> {
    return unwrapAsync(linksGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a link
   *
   * @remarks
   * Update a link for the authenticated workspace. If there's no change, returns it as it is.
   */
  async update(
    linkId: string,
    requestBody?: operations.UpdateLinkRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<components.LinkSchema> {
    return unwrapAsync(linksUpdate(
      this,
      linkId,
      requestBody,
      options,
    ));
  }

  /**
   * Delete a link
   *
   * @remarks
   * Delete a link for the authenticated workspace.
   */
  async delete(
    linkId: string,
    options?: RequestOptions,
  ): Promise<operations.DeleteLinkResponseBody> {
    return unwrapAsync(linksDelete(
      this,
      linkId,
      options,
    ));
  }

  /**
   * Bulk create links
   *
   * @remarks
   * Bulk create up to 100 links for the authenticated workspace.
   */
  async createMany(
    request?: Array<operations.RequestBody> | undefined,
    options?: RequestOptions,
  ): Promise<Array<operations.ResponseBody>> {
    return unwrapAsync(linksCreateMany(
      this,
      request,
      options,
    ));
  }

  /**
   * Bulk update links
   *
   * @remarks
   * Bulk update up to 100 links with the same data for the authenticated workspace.
   */
  async updateMany(
    request?: operations.BulkUpdateLinksRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<Array<components.LinkSchema>> {
    return unwrapAsync(linksUpdateMany(
      this,
      request,
      options,
    ));
  }

  /**
   * Bulk delete links
   *
   * @remarks
   * Bulk delete up to 100 links for the authenticated workspace.
   */
  async deleteMany(
    request: operations.BulkDeleteLinksRequest,
    options?: RequestOptions,
  ): Promise<operations.BulkDeleteLinksResponseBody> {
    return unwrapAsync(linksDeleteMany(
      this,
      request,
      options,
    ));
  }

  /**
   * Upsert a link
   *
   * @remarks
   * Upsert a link for the authenticated workspace by its URL. If a link with the same URL already exists, return it (or update it if there are any changes). Otherwise, a new link will be created.
   */
  async upsert(
    request?: operations.UpsertLinkRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<components.LinkSchema> {
    return unwrapAsync(linksUpsert(
      this,
      request,
      options,
    ));
  }
}
