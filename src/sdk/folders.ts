/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { foldersCreate } from "../funcs/foldersCreate.js";
import { foldersDelete } from "../funcs/foldersDelete.js";
import { foldersList } from "../funcs/foldersList.js";
import { foldersUpdate } from "../funcs/foldersUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Folders extends ClientSDK {
  /**
   * Create a new folder
   *
   * @remarks
   * Create a new folder for the authenticated workspace.
   */
  async create(
    request?: operations.CreateFolderRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<components.FolderSchema> {
    return unwrapAsync(foldersCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a list of folders
   *
   * @remarks
   * Retrieve a list of folders for the authenticated workspace.
   */
  async list(
    request?: operations.ListFoldersRequest | undefined,
    options?: RequestOptions,
  ): Promise<Array<components.FolderSchema>> {
    return unwrapAsync(foldersList(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a folder
   *
   * @remarks
   * Update a folder in the workspace.
   */
  async update(
    id: string,
    requestBody?: operations.UpdateFolderRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<components.FolderSchema> {
    return unwrapAsync(foldersUpdate(
      this,
      id,
      requestBody,
      options,
    ));
  }

  /**
   * Delete a folder
   *
   * @remarks
   * Delete a folder from the workspace. All existing links will still work, but they will no longer be associated with this folder.
   */
  async delete(
    id: string,
    options?: RequestOptions,
  ): Promise<operations.DeleteFolderResponseBody> {
    return unwrapAsync(foldersDelete(
      this,
      id,
      options,
    ));
  }
}
